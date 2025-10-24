import { useEffect, useState } from "react";
import axios from "axios";
import { Bell } from "lucide-react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await axios.get("/api/notifications", {
        withCredentials: true,
      });
      setNotifications(res.data);
    };
    fetchNotifications();
  }, []);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="relative">
        <Bell />
        {notifications.some((n) => !n.read) && (
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs w-3 h-3 rounded-full"></span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-64 p-2 z-10">
          {notifications.length === 0 ? (
            <p className="text-gray-500 text-sm">No notifications</p>
          ) : (
            notifications.map((n) => (
              <a
                href={n.link}
                key={n._id}
                className={`block p-2 rounded ${!n.read ? "bg-gray-100" : ""}`}
              >
                {n.message}
              </a>
            ))
          )}
        </div>
      )}
    </div>
  );
}
