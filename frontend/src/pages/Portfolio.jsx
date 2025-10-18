import PortfolioCard from "../components/PortfolioCard";
import yourCarpenter from "../assets/images/carpenter.jpg";
import thyElectrician from "../assets/images/electrician.jpg";

function Portfolio() {
  const portfolios = [
    {
      image: yourCarpenter,
      title: "Custom Wooden Wardrobe",
      trade: "Carpentry",
      name: "John Moyo",
    },
    {
      image: thyElectrician,
      title: "Electrical Installation",
      trade: "Electrician",
      name: "Tinashe Chuma",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-orange-600 mb-10">
        Tradespeople Portfolios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {portfolios.map((p, i) => (
          <PortfolioCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
