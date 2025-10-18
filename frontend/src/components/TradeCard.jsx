function TradeCard({ trade, description, icon }) {
  return (
    <div className="bg-white text-gray-800 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="font-semibold text-xl mb-2">{trade}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
export default TradeCard;
