import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold">User Testimonials</h1>
      </header>

      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <TestimonialCard
            name="Alex Johnson"
            role="Software Developer"
            content="SecureBrowser has been a game-changer for my online security. The phishing detection is incredibly accurate, and I love the real-time alerts. It's like having a personal cybersecurity expert watching over my shoulder."
            rating={5}
          />
          <TestimonialCard
            name="Sarah Lee"
            role="Digital Marketer"
            content="As someone who spends most of their day online, SecureBrowser gives me peace of mind. The privacy protection features are top-notch, and I've noticed a significant boost in my browsing speed since installing it."
            rating={5}
          />
          <TestimonialCard
            name="Michael Chen"
            role="Financial Analyst"
            content="I deal with sensitive financial information daily, and SecureBrowser has become an essential tool in my security arsenal. The malware blocking is robust, and the detailed security reports help me stay on top of potential threats."
            rating={5}
          />
          <TestimonialCard
            name="Emily Rodriguez"
            role="Online Educator"
            content="SecureBrowser has made it so much easier to teach online safety to my students. Its user-friendly interface and clear alerts make it accessible even to those who aren't tech-savvy. A must-have for anyone who values their online security!"
            rating={5}
          />
          <TestimonialCard
            role="E-commerce Business Owner"
            content="Running an online store, I can't afford to have my customers' data compromised. SecureBrowser's advanced security features have given me and my customers an extra layer of protection. It's an investment in trust and safety."
            rating={5}
          />
          <TestimonialCard
            name="David Thompson"
            role="Retired IT Professional"
            content="I've tried many security extensions over the years, but SecureBrowser stands out for its comprehensive approach and minimal performance impact. It's reassuring to know that my online activities are protected by such a capable tool."
            rating={5}
          />
        </div>
      </main>

      <footer className="bg-gray-900 py-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 SecureBrowser. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function TestimonialCard({ name, role, content, rating }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
      <div className="flex items-center mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="mb-4">{content}</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </div>
  )
}

