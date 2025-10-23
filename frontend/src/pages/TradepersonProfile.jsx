import { useEffect, useState } from "react";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";

export default function TradepersonProfile({ id }) {
  const [profile, setProfile] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get(`/api/users/${id}`);
      setProfile(res.data);
    };

    const fetchReviews = async () => {
      const res = await axios.get(`/api/reviews/${id}`);
      setReviews(res.data);
    };

    fetchProfile();
    fetchReviews();
  }, [id]);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg">
      <div className="flex flex-col items-center space-y-3">
        <img
          src={profile.profileImage}
          className="w-24 h-24 rounded-full"
          alt="Profile"
        />
        <h2 className="text-2xl font-semibold">{profile.name}</h2>
        <p className="text-gray-600">{profile.skill}</p>
      </div>

      <h3 className="mt-6 text-lg font-bold">Reviews</h3>
      <div className="space-y-3 mt-2">
        {reviews.map((r, i) => (
          <div key={i} className="p-3 bg-white shadow rounded-lg">
            <p className="font-semibold">{r.client.name}</p>
            <p>⭐ {r.rating}</p>
            <p>{r.comment}</p>
          </div>
        ))}
      </div>

      <ReviewForm tradepersonId={id} />
    </div>
  );
}
