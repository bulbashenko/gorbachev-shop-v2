"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaStickyNote, FaCalendarAlt, FaGlobe } from "react-icons/fa";



export default function AuthPage() {
  const [isRegistering, setIsRegistering] = useState(false);

  // Поля для регистрации
  const [name, setName] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  // Общие поля
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    setMessage("");

    // Простая валидация на фронтенде
    if (isRegistering) {
      // Проверка имени: только буквы
      if (!/^[A-Za-z]+$/.test(name)) {
        setMessage("Name must contain only letters.");
        return;
      }
      // Проверка года рождения: число
      if (isNaN(yearOfBirth) || yearOfBirth.trim() === "") {
        setMessage("Year of birth must be a number.");
        return;
      }
      // Проверка email
      if (!/\S+@\S+\.\S+/.test(email)) {
        setMessage("Please enter a valid email.");
        return;
      }
    }

    const endpoint = isRegistering
      ? "http://localhost:5000/api/auth/register"
      : "http://localhost:5000/api/auth/login";

    const payload = isRegistering
      ? { name, yearOfBirth, state, email, password, phone, notes }
      : { email, password };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        if (isRegistering) {
          setMessage("Registration successful! You can now log in.");
        } else {
          // Сохраняем токен в localStorage
          if (data.token) {
            localStorage.setItem("token", data.token);
            setMessage("Welcome back! Token saved in localStorage.");
          } else {
            setMessage("Login successful, but no token received.");
          }
        }
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-black text-white font-sans">
      <h1 className="text-3xl font-bold mb-6">{isRegistering ? "Register" : "Log In"}</h1>
      <form onSubmit={handleAuth} className="flex flex-col gap-4 w-80 bg-zinc-900 p-6 rounded shadow-lg">
        {isRegistering && (
          <>
            <div className="flex items-center border border-gray-500 rounded px-3 py-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent w-full focus:outline-none"
                required
              />
            </div>
            <div className="flex items-center border border-gray-500 rounded px-3 py-2">
              <FaCalendarAlt className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Year of Birth"
                value={yearOfBirth}
                onChange={(e) => setYearOfBirth(e.target.value)}
                className="bg-transparent w-full focus:outline-none"
                required
              />
            </div>
            <div className="flex items-center border border-gray-500 rounded px-3 py-2">
              <FaGlobe className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Country"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="bg-transparent w-full focus:outline-none"
                required
              />
            </div>
            <div className="flex items-center border border-gray-500 rounded px-3 py-2">
              <FaPhone className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Phone (optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-transparent w-full focus:outline-none"
              />
            </div>
            <div className="flex items-center border border-gray-500 rounded px-3 py-2">
              <FaStickyNote className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Notes (optional)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="bg-transparent w-full focus:outline-none"
              />
            </div>
          </>
        )}
        <div className="flex items-center border border-gray-500 rounded px-3 py-2">
          <FaEnvelope className="text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent w-full focus:outline-none"
            required
          />
        </div>
        <div className="flex items-center border border-gray-500 rounded px-3 py-2">
          <FaLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent w-full focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          {isRegistering ? "Register" : "Log In"}
        </button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
      <button
        onClick={() => setIsRegistering(!isRegistering)}
        className="mt-4 text-gray-400 hover:underline"
      >
        {isRegistering ? "Already have an account? Log in" : "Don't have an account? Register"}
      </button>
    </div>
  );
}  