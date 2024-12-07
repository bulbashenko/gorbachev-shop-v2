"use client";

import { useState } from "react";

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
    <div className="flex flex-col items-center justify-center h-screen font-sans">
      <h1 className="text-2xl font-bold mb-6">
        {isRegistering ? "Register" : "Log In"}
      </h1>
      <form onSubmit={handleAuth} className="flex flex-col gap-4 w-72">
        {isRegistering && (
          <>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="px-3 py-2 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Year of Birth"
              value={yearOfBirth}
              onChange={(e) => setYearOfBirth(e.target.value)}
              required
              className="px-3 py-2 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              className="px-3 py-2 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Phone (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="px-3 py-2 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Notes (optional)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="px-3 py-2 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
            />
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-3 py-2 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="px-3 py-2 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {isRegistering ? "Register" : "Log In"}
        </button>
      </form>
      {message && <p className="mt-2 text-red-500">{message}</p>}
      <button
        onClick={() => setIsRegistering(!isRegistering)}
        className="mt-4 text-blue-500 hover:underline"
      >
        {isRegistering
          ? "Already have an account? Log in"
          : "Don't have an account? Register"}
      </button>
    </div>
  );
}
