export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We start by understanding your vision, target market, and business goals. Through strategic workshops, we validate your idea and define the MVP scope that gets you to market fast.",
      duration: "1-2 weeks",
    },
    {
      number: "02",
      title: "Design & Architecture",
      description:
        "Our design team creates intuitive interfaces while our architects plan scalable infrastructure. We focus on user experience and technical excellence from day one.",
      duration: "2-3 weeks",
    },
    {
      number: "03",
      title: "Development Sprint",
      description:
        "Rapid development with weekly demos. We build your MVP using modern tech stacks, focusing on core features that validate your business hypothesis and attract early users.",
      duration: "6-12 weeks",
    },
    {
      number: "04",
      title: "Launch & Iterate",
      description:
        "We help you launch to your first users, gather feedback, and iterate quickly. From beta testing to production deployment, we're with you every step of the way.",
      duration: "2-4 weeks",
    },
  ]

  return (
    <section className="py-20 px-4 bg-[#fbfaf9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#37322f] mb-4">
            From Idea to Launch in Weeks, Not Months
          </h2>
          <p className="text-lg text-[#605a57] max-w-2xl mx-auto">
            Our proven process takes founders from concept to market-ready product. Fast, efficient, and
            founder-focused.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#37322f] text-[#fbfaf9] flex items-center justify-center text-xl font-semibold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-[#37322f]">{step.title}</h3>
                    <span className="text-sm text-[#847971] font-medium">{step.duration}</span>
                  </div>
                  <p className="text-[#605a57] leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-8 w-0.5 h-full bg-[#e0dedb]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
