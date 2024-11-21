//
//  IntelligentsFocusApertureView.swift
//  Intelligents
//
//  Created by 秋星桥 on 2024/11/21.
//

import UIKit

public class IntelligentsFocusApertureView: UIView {
  let backgroundView = UIView()
  let snapshotView = UIImageView()
  let controlButtonsPanel = ControlButtonsPanel()

  public var animationDuration: TimeInterval = 0.75

  public internal(set) weak var targetView: UIView?
  public internal(set) weak var targetViewController: UIViewController?
  public internal(set) weak var capturedImage: UIImage? {
    get { snapshotView.image }
    set { snapshotView.image = newValue }
  }

  var frameConstraints: [NSLayoutConstraint] = []
  var contentBeginConstraints: [NSLayoutConstraint] = []
  var contentFinalConstraints: [NSLayoutConstraint] = []

  public init() {
    super.init(frame: .zero)

    let tap = UITapGestureRecognizer(
      target: self,
      action: #selector(dismissFocus)
    )

    backgroundView.backgroundColor = .black
    backgroundView.isUserInteractionEnabled = true
    backgroundView.addGestureRecognizer(tap)

    snapshotView.layer.masksToBounds = true
    snapshotView.contentMode = .scaleAspectFill
    snapshotView.isUserInteractionEnabled = true
    snapshotView.addGestureRecognizer(tap)

    addSubview(backgroundView)
    addSubview(controlButtonsPanel)
    addSubview(snapshotView)
    bringSubviewToFront(snapshotView)

    var views: [UIView] = [self]
    while let view = views.first {
      views.removeFirst()
      view.translatesAutoresizingMaskIntoConstraints = false
      view.subviews.forEach { views.append($0) }
    }
  }

  @available(*, unavailable)
  required init?(coder _: NSCoder) {
    fatalError()
  }

  public func prepareAnimationWith(
    capturingTargetContentView targetContentView: UIView,
    coveringRootViewController viewController: UIViewController
  ) {
    captureImageBuffer(targetContentView)

    targetView = targetContentView
    targetViewController = viewController

    viewController.view.addSubview(self)

    prepareFrameLayout()
    prepareContentLayouts()
    activateLayoutForAnimation(.begin)
  }

  public func executeAnimationKickIn(_ completion: @escaping () -> Void = {}) {
    activateLayoutForAnimation(.begin)
    isUserInteractionEnabled = false
    UIView.animate(
      withDuration: animationDuration,
      delay: 0,
      usingSpringWithDamping: 1.0,
      initialSpringVelocity: 0.8
    ) {
      self.activateLayoutForAnimation(.complete)
    } completion: { _ in
      self.isUserInteractionEnabled = true
      completion()
    }
  }

  public func executeAnimationDismiss(_ completion: @escaping () -> Void = {}) {
    activateLayoutForAnimation(.complete)
    isUserInteractionEnabled = false
    UIView.animate(
      withDuration: animationDuration,
      delay: 0,
      usingSpringWithDamping: 1.0,
      initialSpringVelocity: 0.8
    ) {
      self.activateLayoutForAnimation(.begin)
    } completion: { _ in
      self.isUserInteractionEnabled = true
      completion()
    }
  }

  @objc func dismissFocus() {
    isUserInteractionEnabled = false
    executeAnimationDismiss {
      self.removeFromSuperview()
    }
  }
}
