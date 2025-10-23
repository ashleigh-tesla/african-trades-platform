import { useState } from "react";
import axios from "axios";

export default function ReviewForm({ tradepersonId }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/reviews",
        { tradeperson: tradepersonId, rating, comment },
        { withCredentials: true }
      );
      alert("Review submitted!");
    } catch (error) {
      alert("Failed to submit review.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 shadow rounded-lg space-y-2"
    >
      <h3 className="text-lg font-semibold">Leave a Review</h3>
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border rounded p-2"
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num} Stars
          </option>
        ))}
      </select>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your review..."
        className="border rounded w-full p-2"
      ></textarea>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
}
