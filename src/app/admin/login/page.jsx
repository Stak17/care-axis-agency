"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [bookings, setBookings] = useState([]);

  // =========================
  // CHECK SESSION
  // =========================
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();

      if (data?.session) {
        setUser(data.session.user);
      }

      setLoading(false);
    };

    checkUser();
  }, []);

  // =========================
  // FETCH BOOKINGS
  // =========================
  useEffect(() => {
    if (!user) return;

    fetch("/api/getBookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user]);

  // =========================
  // LOGIN
  // =========================
  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      const { data } = await supabase.auth.getSession();
      setUser(data.session.user);
    }
  };

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setBookings([]);
  };

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold text-gray-700">
        Loading admin dashboard...
      </div>
    );
  }

  // =========================
  // LOGIN UI (IMPROVED VISIBILITY)
  // =========================
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border"
        >
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
            Admin Login
          </h2>

          <input
            type="email"
            placeholder="Admin Email"
            className="w-full p-3 mb-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Login
          </button>
        </form>
      </div>
    );
  }

  // =========================
  // ADMIN DASHBOARD (IMPROVED VISIBILITY)
  // =========================
  return (
    <main className="p-10 bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen">

      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-10 max-w-5xl mx-auto">
        <h1 className="text-3xl font-extrabold text-blue-900">
          Admin Dashboard – Bookings
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-5 py-2 rounded-lg shadow hover:bg-red-700 transition font-semibold"
        >
          Logout
        </button>
      </div>

      {/* BOOKINGS */}
      <div className="grid gap-6 max-w-5xl mx-auto">
        {bookings.length === 0 ? (
          <p className="text-center text-gray-700 text-lg font-medium">
            No bookings found yet.
          </p>
        ) : (
          bookings.map((b, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition"
            >
              {/* NAME */}
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                {b.full_name}
              </h2>

              {/* DETAILS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-800">
                <p><span className="font-semibold text-gray-900">📞 Phone:</span> {b.phone}</p>
                <p><span className="font-semibold text-gray-900">📧 Email:</span> {b.email}</p>
                <p><span className="font-semibold text-gray-900">🛠 Service:</span> {b.service}</p>
                <p><span className="font-semibold text-gray-900">📅 Date:</span> {b.date}</p>
              </div>

              {/* MESSAGE */}
              {b.message && (
                <div className="mt-4 p-4 bg-gray-100 border rounded-lg">
                  <p className="font-semibold text-gray-800 mb-1">
                    Message:
                  </p>
                  <p className="text-gray-900">
                    {b.message}
                  </p>
                </div>
              )}

              {/* FOOTER */}
              <p className="text-xs text-gray-500 mt-4 text-right">
                Submitted: {new Date(b.created_at).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}