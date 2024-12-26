//
//  File.swift
//  Intelligents
//
//  Created by 秋星桥 on 2024/12/26.
//

import UIKit
import AffineGraphQL

extension IntelligentsChatController {
  @objc func chat_onLoad() {
    
  }
  
  @objc func chat_onSend() {
    beginProgress()
    let viewModel = self.inputBox.editor.viewModel.duplicate()
    self.inputBox.editor.viewModel.reset()
    DispatchQueue.global().async {
      self.chat_onSendExecute(viewModel: viewModel)
      self.endProgress()
    }
  }
}

private extension IntelligentsChatController {
  func dispatchToMain(_ block: @escaping () -> Void) {
    if Thread.isMainThread {
      block()
    } else {
      DispatchQueue.main.async(execute: block)
    }
  }
  
  func beginProgress() {
    dispatchToMain { [self] in
      inputBox.isUserInteractionEnabled = false
      progressView.startAnimating()
      progressView.isHidden = false
      progressView.alpha = 0
      UIView.animate(withDuration: 0.3) {
        self.inputBox.editor.alpha = 0
        self.progressView.alpha = 1
      }
    }
  }
  
  func endProgress() {
    dispatchToMain { [self] in
      UIView.animate(withDuration: 0.3) {
        self.inputBox.editor.alpha = 1
        self.progressView.alpha = 0
      } completion: { _ in
        self.inputBox.isUserInteractionEnabled = true
        self.progressView.stopAnimating()
      }
    }
  }
}

private extension IntelligentsChatController {
  func chat_createSessionIfNeeded() -> String {
    let mutation = CreateCopilotSessionMutation(options: .init(
      docId: "",
      promptName: "",
      workspaceId: ""
    ))
    Intelligents.qlClient.perform(
      mutation: mutation,
      queue: .global()
    ) { result in
      print(result)
    }
    return ""
  }
  
  func chat_onSendExecute(viewModel: InputEditView.ViewModel) {
    let text = viewModel.text
    let images = viewModel.attachments
  }
}
