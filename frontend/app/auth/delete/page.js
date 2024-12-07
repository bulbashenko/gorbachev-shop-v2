"use client";

import { useState } from "react";

export default function DeleteUserPage() {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("No token found. Please log in first.");
      return;
    }

    if (!userId || isNaN(userId)) {
      setMessage("Please enter a valid numeric user ID.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(`User with ID ${userId} deleted successfully.`);
      } else {
        setMessage(data.error || "Unable to delete user.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-2xl font-bold mb-6">Delete User</h1>
      <input
        type="text"
        placeholder="Enter user ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="px-3 py-2 border text-black border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleDelete}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete User
      </button>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
}
