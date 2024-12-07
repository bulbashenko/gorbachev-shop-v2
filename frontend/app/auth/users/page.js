"use client";

import { useState } from "react";

export default function UsersListPage() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  // Фильтры
  const [nameFilter, setNameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [yearOfBirthFilter, setYearOfBirthFilter] = useState("");

  // Сортировка
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleFetchUsers = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("No token found. Please log in first.");
      return;
    }

    const params = new URLSearchParams();
    if (nameFilter) params.append("name", nameFilter);
    if (emailFilter) params.append("email", emailFilter);
    if (stateFilter) params.append("state", stateFilter);
    if (yearOfBirthFilter) params.append("yearOfBirth", yearOfBirthFilter);
    if (sortField) {
      params.append("sort", sortField);
      params.append("order", sortOrder);
    }

    try {
      const response = await fetch(`http://localhost:5000/api/users?${params.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        setUsers(data);
        setMessage("");
      } else {
        setMessage(data.error || "Unable to fetch users.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Registered Users</h1>
      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          placeholder="Filter by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="px-3 py-2 text-black border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Filter by email"
          value={emailFilter}
          onChange={(e) => setEmailFilter(e.target.value)}
          className="px-3 py-2 text-black border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Filter by state"
          value={stateFilter}
          onChange={(e) => setStateFilter(e.target.value)}
          className="px-3 py-2 text-black border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Filter by yearOfBirth"
          value={yearOfBirthFilter}
          onChange={(e) => setYearOfBirthFilter(e.target.value)}
          className="px-3 py-2 text-black border border-gray-300 rounded"
        />
        <div className="flex gap-2">
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            className="px-3 py-2 text-black border border-gray-300 rounded"
          >
            <option value="">No sort</option>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="state">State</option>
            <option value="yearOfBirth">Year Of Birth</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-3 py-2 text-black border border-gray-300 rounded"
          >
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>
        <button
          onClick={handleFetchUsers}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Fetch Users
        </button>
      </div>
      {message && <p className="text-red-500 mb-4">{message}</p>}
      {users.length > 0 && (
        <table className="table-auto border-collapse border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">State</th>
              <th className="border border-gray-300 px-4 py-2">YearOfBirth</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{user.state}</td>
                <td className="border border-gray-300 px-4 py-2">{user.yearOfBirth}</td>
                <td className="border border-gray-300 px-4 py-2">{user.phone || ""}</td>
                <td className="border border-gray-300 px-4 py-2">{user.notes || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
