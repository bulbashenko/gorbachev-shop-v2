"use client";

import { useState } from "react";

export default function VerifyPage() {
  const [message, setMessage] = useState("");

  const handleVerify = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("No token found. Please log in first.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/verify", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(`Token is valid. UserId: ${data.userId}`);
      } else {
        setMessage(data.error || "Invalid token.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-6">Verify Token</h1>
      <button
        onClick={handleVerify}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Verify Token
      </button>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
}
