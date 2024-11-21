//
//  IntelligentsFocusApertureView+Panel.swift
//  Intelligents
//
//  Created by 秋星桥 on 2024/11/21.
//

import UIKit

extension IntelligentsFocusApertureView {
  class ControlButtonsPanel: UIView {
    init() {
      super.init(frame: .zero)
      backgroundColor = .red

      heightAnchor.constraint(equalToConstant: 256).isActive = true
    }

    @available(*, unavailable)
    required init?(coder _: NSCoder) {
      fatalError()
    }
  }
}
