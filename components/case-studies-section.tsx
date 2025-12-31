import { Button } from "@/components/ui/button"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "FinTrack AI",
      category: "AI SaaS",
      description: "AI-powered expense tracking that helped founders save 15 hours/week on bookkeeping",
      results: ["0 to 1K users in 3 months", "$50K MRR", "Seed funded"],
      image: "/images/chatgpt-20image-20sep-2011-2c-202025-2c-2010-54-18-20am.png",
      tech: ["Next.js", "OpenAI", "Stripe", "Supabase"],
    },
    {
      title: "TeamSync",
      category: "SaaS Platform",
      description: "Team collaboration platform that modernized project management for remote teams",
      results: ["5K+ active users", "15% weekly growth", "Series A ready"],
      image: "/images/chatgpt-20image-20sep-2011-2c-202025-2c-2011-01-05-20am.png",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    },
    {
      title: "MarketPulse",
      category: "AI Analytics",
      description: "Real-time market intelligence platform using AI to predict trends for e-commerce brands",
      results: ["200+ paying customers", "$100K ARR in 6 months", "Profitable"],
      image: "/images/chatgpt-20image-20sep-2011-2c-202025-2c-2011-35-19-20am.png",
      tech: ["Python", "TensorFlow", "React", "AWS"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#37322f] mb-4">
            Real Products. Real Founders. Real Results.
          </h2>
          <p className="text-lg text-[#605a57] max-w-2xl mx-auto">
            We've helped dozens of founders take their ideas from zero to one and beyond. Here are some of our success
            stories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group border border-[#e0dedb] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-[#f5f4f3] overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-[#ff8000] font-medium mb-2">{study.category}</div>
                <h3 className="text-2xl font-semibold text-[#37322f] mb-3">{study.title}</h3>
                <p className="text-[#605a57] mb-4 leading-relaxed">{study.description}</p>

                <div className="space-y-2 mb-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[#37322f]">
                      <svg className="w-4 h-4 text-[#ff8000]" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {result}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-[#f5f4f3] text-[#605a57] rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#37322f] hover:bg-[#37322f]/90 text-white px-8 py-6 text-lg">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  )
}
