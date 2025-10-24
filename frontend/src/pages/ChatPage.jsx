import { useEffect, useState } from "react";
import { socket } from "../utils/socket";
import axios from "axios";

export default function ChatPage({ userId, partnerId }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const room = [userId, partnerId].sort().join("-");

  useEffect(() => {
    socket.emit("joinRoom", room);

    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("receiveMessage");
  }, [room]);

  const sendMessage = () => {
    const messageData = {
      room,
      sender: userId,
      text: newMessage,
      time: new Date().toISOString(),
    };
    socket.emit("sendMessage", messageData);
    setMessages((prev) => [...prev, messageData]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg ${msg.sender === userId ? "bg-blue-500 text-white self-end" : "bg-gray-200"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border rounded-lg flex-1 p-2"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
