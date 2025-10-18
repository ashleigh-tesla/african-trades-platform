function PortfolioCard({ image, title, trade, name }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{trade}</p>
        <p className="text-sm text-gray-500 italic">by {name}</p>
      </div>
    </div>
  );
}

export default PortfolioCard;
