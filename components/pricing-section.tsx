"use client"

import { useState } from "react"
import { CALENDAR_LINK } from "./header"

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly")

  const packages = [
    {
      name: "MVP Sprint",
      description: "Perfect for validating your idea and getting to market fast",
      price: "Starting at $25K",
      duration: "6-8 weeks",
      features: [
        "Product discovery workshop",
        "MVP scope definition",
        "UI/UX design",
        "Core feature development",
        "Database setup",
        "Basic authentication",
        "Deployment & hosting",
        "2 weeks post-launch support",
      ],
      cta: "Start Your MVP",
      featured: false,
    },
    {
      name: "Full Product Build",
      description: "Comprehensive development from concept to scalable product",
      price: "Starting at $60K",
      duration: "12-16 weeks",
      features: [
        "Everything in MVP Sprint",
        "Advanced feature development",
        "AI/ML integration",
        "Payment processing",
        "Admin dashboard",
        "API development",
        "Performance optimization",
        "Testing & QA",
        "1 month post-launch support",
        "Technical documentation",
      ],
      cta: "Build Your Product",
      featured: true,
    },
    {
      name: "Scale & Grow",
      description: "Ongoing partnership to scale your product and add features",
      price: "Custom pricing",
      duration: "Ongoing",
      features: [
        "Dedicated dev team",
        "Feature prioritization",
        "Continuous deployment",
        "Performance monitoring",
        "Security updates",
        "Database scaling",
        "Third-party integrations",
        "Technical consulting",
        "24/7 support",
        "Growth optimization",
      ],
      cta: "Let's Talk",
      featured: false,
    },
  ]

  return (
    <section className="relative py-20 px-4 bg-[#fbfaf9]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#37322f] mb-4">Transparent Pricing. No Surprises.</h2>
          <p className="text-lg text-[#605a57] max-w-2xl mx-auto">
            Choose the engagement model that fits your stage. All packages include source code ownership and ongoing
            support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative px-6 py-8 rounded-lg border transition-all ${
                pkg.featured
                  ? "bg-[#37322f] border-[#37322f] shadow-xl scale-105"
                  : "bg-white border-[#e0dedb] hover:shadow-lg"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#ff8000] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-semibold mb-2 ${pkg.featured ? "text-[#fbfaf9]" : "text-[#37322f]"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm ${pkg.featured ? "text-[#d2c6bf]" : "text-[#605a57]"}`}>{pkg.description}</p>
              </div>

              <div className="mb-6">
                <div className={`text-4xl font-bold mb-1 ${pkg.featured ? "text-[#fbfaf9]" : "text-[#37322f]"}`}>
                  {pkg.price}
                </div>
                <div className={`text-sm ${pkg.featured ? "text-[#d2c6bf]" : "text-[#847971]"}`}>{pkg.duration}</div>
              </div>

              <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer">
                <button
                  className={`w-full py-3 px-4 rounded-full font-medium mb-8 transition-colors ${
                    pkg.featured
                      ? "bg-[#ff8000] hover:bg-[#ff8000]/90 text-white"
                      : "bg-[#37322f] hover:bg-[#37322f]/90 text-white"
                  }`}
                >
                  {pkg.cta}
                </button>
              </a>

              <div className="space-y-3">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.featured ? "text-[#ff8000]" : "text-[#ff8000]"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${pkg.featured ? "text-[#fbfaf9]" : "text-[#605a57]"}`}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#605a57]">
            Not sure which package is right for you?{" "}
            <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer">
              <button className="text-[#ff8000] font-medium hover:underline">Schedule a free consultation</button>
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
