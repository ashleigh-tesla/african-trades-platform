import { useEffect, useState } from "react";
import axios from "axios";

const BrowseTrades = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [filter, setFilter] = useState({ tradeType: "", location: "" });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/api/portfolios", {
        params: filter,
      });
      setPortfolios(res.data);
    };
    fetchData();
  }, [filter]);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <input
          placeholder="Filter by trade type"
          className="border p-2 rounded w-1/3"
          onChange={(e) => setFilter({ ...filter, tradeType: e.target.value })}
        />
        <input
          placeholder="Filter by location"
          className="border p-2 rounded w-1/3"
          onChange={(e) => setFilter({ ...filter, location: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {portfolios.map((p) => (
          <div key={p._id} className="bg-white p-4 shadow rounded-xl">
            <h2 className="font-bold text-lg mb-2">{p.tradeType}</h2>
            <p>{p.description}</p>
            <p className="text-sm text-gray-600">{p.location}</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {p.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Portfolio"
                  className="w-full h-32 object-cover rounded-lg"
                />
              ))}
            </div>
            <a
              href={`tel:${p.contactNumber}`}
              className="block mt-4 text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Contact
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseTrades;
