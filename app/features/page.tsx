import { Shield, Lock, Bell, Eye, Zap, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold">SecureBrowser Features</h1>
      </header>

      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <FeatureCard
            icon={Shield}
            title="Advanced Phishing Detection"
            description="Our AI-powered algorithms analyze URLs and webpage content in real-time to identify and block sophisticated phishing attempts, keeping your sensitive information safe."
          />
          <FeatureCard
            icon={Lock}
            title="Robust Malware Blocking"
            description="SecureBrowser's comprehensive malware database and behavioral analysis engine prevent malicious software from infecting your device, ensuring a safe browsing experience."
          />
          <FeatureCard
            icon={Bell}
            title="Real-time Security Alerts"
            description="Stay informed with instant, non-intrusive notifications about potential security threats. Our alerts provide context and recommended actions to keep you in control of your online safety."
          />
          <FeatureCard
            icon={Eye}
            title="Privacy Protection"
            description="Block trackers, fingerprinting attempts, and intrusive ads to maintain your online privacy. SecureBrowser puts you in control of your data and browsing habits."
          />
          <FeatureCard
            icon={Zap}
            title="Performance Optimization"
            description="Enjoy faster browsing speeds by blocking resource-heavy ads and scripts. SecureBrowser is designed to be lightweight and efficient, minimizing its impact on your system resources."
          />
          <FeatureCard
            icon={BarChart}
            title="Detailed Security Reports"
            description="Access comprehensive reports on blocked threats, performance improvements, and privacy protections. Understand your online security status at a glance with our intuitive dashboard."
          />
        </div>
      </main>

      <section className="bg-gray-800 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Experience the SecureBrowser Difference</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Protect yourself with industry-leading cybersecurity features, all in one easy-to-use browser extension.
        </p>
        <a href="https://github.com/S-YEOLE/secure-browser-frontend1/raw/main/SecureBrowser.zip"
  download
  target="_blank"
  rel="noopener noreferrer">
    <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
          Download SecureBrowser
        </Button></a>
      </section>

      <footer className="bg-gray-900 py-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 SecureBrowser. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
      <Icon className="w-12 h-12 mb-4 text-cyan-400" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

