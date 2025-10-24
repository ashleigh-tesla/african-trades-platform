import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function BookingForm({ tradepersonId }) {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const submitBooking = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/bookings",
        { tradeperson: tradepersonId, service, date, notes },
        { withCredentials: true }
      );
      toast.success("Booking request sent!");
    } catch {
      toast.error("Failed to create booking.");
    }
  };

  return (
    <form
      onSubmit={submitBooking}
      className="bg-white p-4 rounded-lg shadow space-y-2"
    >
      <h3 className="text-lg font-semibold">Book this tradesperson</h3>
      <input
        type="text"
        value={service}
        onChange={(e) => setService(e.target.value)}
        placeholder="Service needed"
        className="border rounded p-2 w-full"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border rounded p-2 w-full"
      />
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notes..."
        className="border rounded p-2 w-full"
      ></textarea>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Send Request
      </button>
    </form>
  );
}
