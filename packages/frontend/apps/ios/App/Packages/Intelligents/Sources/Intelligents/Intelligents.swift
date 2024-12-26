// The Swift Programming Language
// https://docs.swift.org/swift-book

import Foundation

public enum Intelligents {
  public static func setUpstreamEndpoint(_ upstream: String) {
    guard let url = URL(string: upstream) else {
      assertionFailure()
      return
    }
    print("[*] setting up upstream endpoint to \(url.absoluteString)")
    Constant.affineUpstreamURL = url
  }
}
