import TradeCard from "../components/TradeCard";

function Trades() {
  const trades = [
    {
      trade: "Carpenter",
      description: "Expert in woodwork and furniture",
      icon: "🪚",
    },
    {
      trade: "Electrician",
      description: "Handles electrical wiring & repair",
      icon: "💡",
    },
    {
      trade: "Plumber",
      description: "Solves water & drainage issues",
      icon: "🚰",
    },
    {
      trade: "Welder",
      description: "Metalwork & structure fabrication",
      icon: "⚙️",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-orange-600 mb-10">
        Explore Trades
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {trades.map((t, i) => (
          <TradeCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
}

export default Trades;
