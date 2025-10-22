import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      if (user.role === "tradesperson") {
        try {
          const token = localStorage.getItem("token");
          const res = await axios.get("http://localhost:5000/api/portfolios", {
            headers: { Authorization: `Bearer ${token}` },
            params: { userId: user.id }, // fetch only this user's portfolios
          });
          setPortfolios(res.data.filter((p) => p.user._id === user.id));
        } catch (err) {
          console.error("Error fetching portfolios:", err);
        }
      }
    };

    fetchPortfolios();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {user.role === "tradesperson" ? "Your Portfolio" : "Your Profile"}
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-2">Name: {user.name}</h2>
        <h2 className="text-lg font-semibold mb-4">Email: {user.email}</h2>

        {user.role === "tradesperson" && portfolios.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolios.map((p) => (
              <div key={p._id} className="border p-4 rounded-lg shadow-sm">
                <h3 className="font-bold mb-1">{p.tradeType}</h3>
                <p className="text-gray-600 mb-2">{p.description}</p>
                <p className="text-sm text-gray-500 mb-2">
                  Location: {p.location}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Contact: {p.contactNumber}
                </p>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  {p.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Portfolio"
                      className="w-full h-32 object-cover rounded-md"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : user.role === "tradesperson" ? (
          <p className="text-center text-gray-500">
            You haven’t uploaded any portfolios yet.
          </p>
        ) : (
          <p className="text-gray-700">
            Welcome to your profile! Browse trades to find skilled
            professionals.
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
