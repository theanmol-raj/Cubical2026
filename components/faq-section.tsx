"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "How quickly can you build my MVP?",
    answer:
      "Our typical MVP timeline is 6-8 weeks from kickoff to launch. This includes discovery, design, development, and deployment. We focus on core features that validate your business hypothesis and get you in front of users fast.",
  },
  {
    question: "Do you specialize in AI SaaS products?",
    answer:
      "Yes! We have extensive experience building AI-powered SaaS products. From ChatGPT integrations to custom ML models, we help founders leverage AI to create innovative solutions. We work with OpenAI, Anthropic, and other leading AI platforms.",
  },
  {
    question: "What tech stack do you use?",
    answer:
      "We primarily use modern, proven stacks: Next.js/React for frontend, Node.js/Python for backend, and PostgreSQL/MongoDB for databases. For AI projects, we integrate with OpenAI, Anthropic, and custom models. We choose the best tools for your specific needs.",
  },
  {
    question: "Will I own the source code?",
    answer:
      "Absolutely. You own 100% of the source code and all intellectual property. We provide full documentation and GitHub repository access. You're never locked in and can continue development with your own team whenever you're ready.",
  },
  {
    question: "Do you help with fundraising?",
    answer:
      "While we're not a fundraising firm, we help founders become investor-ready. We provide technical diligence support, build compelling demos, and can connect you with our network of VCs and angel investors who back our founders.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes post-launch support (2 weeks to 1 month depending on package). We monitor performance, fix bugs, and help with initial user feedback. Many founders choose our ongoing Scale & Grow package to continue adding features and scaling.",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full flex justify-center items-start bg-white py-20 px-4">
      <div className="flex-1 max-w-7xl flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#37322f] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Questions Founders Ask Us
          </div>
          <div className="w-full text-[#605a57] text-base font-normal leading-7 font-sans">
            Everything you need to know about working with us, building your SaaS, and taking it to market.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#37322f] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605a57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
