import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      </header>

      <main className="container mx-auto px-4 py-10">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is SecureBrowser?</AccordionTrigger>
            <AccordionContent>
              SecureBrowser is a comprehensive cybersecurity browser extension designed to protect users from various
              online threats such as phishing, malware, and privacy invasions. It offers real-time protection, alerts,
              and detailed security reports to keep you safe while browsing the internet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does SecureBrowser detect phishing attempts?</AccordionTrigger>
            <AccordionContent>
              SecureBrowser uses advanced AI algorithms to analyze URLs and webpage content in real-time. It compares
              this information against a constantly updated database of known phishing sites and employs machine
              learning to identify new, previously unseen phishing attempts based on common characteristics and
              patterns.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Will SecureBrowser slow down my browsing?</AccordionTrigger>
            <AccordionContent>
              SecureBrowser is designed to be lightweight and efficient. While it performs complex security checks, it's
              optimized to have minimal impact on your browsing speed. In fact, by blocking resource-heavy ads and
              scripts, many users report faster browsing experiences with SecureBrowser installed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How often is SecureBrowser updated?</AccordionTrigger>
            <AccordionContent>
              We release updates for SecureBrowser regularly to ensure it stays ahead of the latest cybersecurity
              threats. Major feature updates typically occur monthly, while security definitions and minor improvements
              are pushed more frequently, often weekly or even daily as needed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Is my personal data safe with SecureBrowser?</AccordionTrigger>
            <AccordionContent>
              Absolutely. We take your privacy seriously. SecureBrowser operates locally on your device and doesn't
              collect or transmit your personal browsing data. The extension only sends anonymous, aggregated data for
              improving threat detection capabilities, and this can be opted out of in the settings.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Which browsers are compatible with SecureBrowser?</AccordionTrigger>
            <AccordionContent>
              SecureBrowser is currently compatible with Google Chrome, Mozilla Firefox, Microsoft Edge, and Opera.
              We're constantly working on expanding our browser support to reach more users.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>

      <footer className="bg-gray-900 py-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 SecureBrowser. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

