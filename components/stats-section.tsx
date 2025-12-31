export function StatsSection() {
  const stats = [
    {
      number: "50+",
      label: "SaaS Products Launched",
      description: "From MVP to market",
    },
    {
      number: "$20M+",
      label: "Raised by Our Founders",
      description: "Post-launch funding",
    },
    {
      number: "8 weeks",
      label: "Average MVP Timeline",
      description: "Idea to production",
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      description: "Would recommend us",
    },
  ]

  return (
    <section className="py-20 px-4 bg-[#37322f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#fbfaf9] mb-4">The Numbers Speak for Themselves</h2>
          <p className="text-lg text-[#d2c6bf] max-w-2xl mx-auto">
            We measure our success by the success of the founders we work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#ff8000] mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-[#fbfaf9] mb-1">{stat.label}</div>
              <div className="text-sm text-[#d2c6bf]">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
