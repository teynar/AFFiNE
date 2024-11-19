import UIKit
import Capacitor
import Intelligents

class AFFiNEViewController: CAPBridgeViewController {
  override func viewDidLoad() {
    super.viewDidLoad()
    webView?.allowsBackForwardNavigationGestures = true
    self.navigationController?.navigationBar.isHidden = true
    installIntelligentsButton()
  }
  
  override func capacitorDidLoad() {
    bridge?.registerPluginInstance(CookiePlugin())
    bridge?.registerPluginInstance(HashcashPlugin())
    bridge?.registerPluginInstance(IntelligentsPlugin(ui: self))
  }
  
  override func viewDidAppear(_ animated: Bool) {
    super.viewDidAppear(animated)
    navigationController?.setNavigationBarHidden(false, animated: animated)
    self.dismissIntelligentsButton()
  }
  
  override func viewDidDisappear(_ animated: Bool) {
    super.viewDidDisappear(animated)
  }
}
