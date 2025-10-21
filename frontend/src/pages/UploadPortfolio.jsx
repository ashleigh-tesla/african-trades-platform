import { useState } from "react";
import axios from "axios";

const UploadPortfolio = () => {
  const [formData, setFormData] = useState({
    tradeType: "",
    description: "",
    location: "",
    contactNumber: "",
  });
  const [images, setImages] = useState([]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => setImages(e.target.files);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const form = new FormData();
    for (const key in formData) form.append(key, formData[key]);
    for (const img of images) form.append("images", img);

    try {
      await axios.post("http://localhost:5000/api/portfolios", form, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Portfolio uploaded successfully!");
    } catch (err) {
      alert("Error uploading portfolio.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4 w-96"
      >
        <h2 className="text-xl font-bold text-center">Upload Your Work</h2>
        <select
          name="tradeType"
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Trade</option>
          <option value="Carpenter">Carpenter</option>
          <option value="Electrician">Electrician</option>
          <option value="Builder">Builder</option>
          <option value="Photographer">Photographer</option>
          <option value="Painter">Painter</option>
        </select>

        <textarea
          name="description"
          placeholder="Describe your service..."
          onChange={handleChange}
          className="w-full border p-2 rounded"
        ></textarea>

        <input
          name="location"
          placeholder="Location"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="contactNumber"
          placeholder="Contact Number"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="w-full border p-2 rounded"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadPortfolio;
