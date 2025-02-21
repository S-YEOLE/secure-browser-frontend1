import Link from "next/link"
import { Shield, Lock, Bell, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">SecureBrowser</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-cyan-400 transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-cyan-400 transition-colors">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-cyan-400 transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Secure Your Online World</h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            SecureBrowser: Your personal cybersecurity guardian. Protect against phishing, malware, and privacy threats
            with our cutting-edge browser extension.
          </p>
          <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
            <Download className="mr-2 h-5 w-5" /> Download Now
          </Button>
        </section>

        <section className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <FeatureCard
                icon={Shield}
                title="Phishing Detection"
                description="Advanced AI-powered algorithms to identify and block phishing attempts in real-time."
              />
              <FeatureCard
                icon={Lock}
                title="Malware Blocking"
                description="Prevent malicious software from infecting your device with our robust malware blocking system."
              />
              <FeatureCard
                icon={Bell}
                title="Real-time Alerts"
                description="Stay informed with instant notifications about potential security threats as you browse."
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Browser?</h2>
          <p className="text-xl mb-10">Join thousands of users who trust SecureBrowser for their online safety.</p>
          <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
            <Download className="mr-2 h-5 w-5" /> Get SecureBrowser
          </Button>
        </section>
      </main>

      <footer className="bg-gray-800 py-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 SecureBrowser. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors">
      <Icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

