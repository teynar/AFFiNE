// The Swift Programming Language
// https://docs.swift.org/swift-book

import Foundation
import AffineGraphQL
import Apollo

public enum Intelligents {
  public static private(set) var qlClient: ApolloClient = .init(url: Constant.affineUpstreamURL)
  
  public static func setUpstreamEndpoint(_ upstream: String) {
    guard let url = URL(string: upstream) else {
      assertionFailure()
      return
    }
    print("[*] setting up upstream endpoint to \(url.absoluteString)")
    Constant.affineUpstreamURL = url
    qlClient = .init(url: url)
  }
}
