"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const waMessage = `Hello Blessed Hands Home Care, I would like to book a service:
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Preferred Date: ${formData.date}
Message: ${formData.message}`;

    const waLink = `https://wa.me/256791263310?text=${encodeURIComponent(
      waMessage
    )}`;

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Booking submitted! You can also confirm via WhatsApp.");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          service: "",
          date: "",
          message: "",
        });
        window.open(waLink, "_blank");
      } else {
        alert("Error submitting booking. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server. Try again later.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      {/* HERO SECTION */}
      <section className="py-24 text-center bg-gradient-to-r from-blue-100 via-white to-green-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">
          Book a Service
        </h1>
        <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
          Schedule professional home care services easily. We are here to support you and your loved ones.
        </p>
      </section>

      {/* FORM & CONTACT GRID */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          {/* BOOKING FORM */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Booking Form</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="">Select Service</option>
                <option value="Elderly Care">Elderly Care</option>
                <option value="Postnatal Care (Mother & Baby)">Postnatal Care (Mother & Baby)</option>
                <option value="Home Nursing / Travel Nurse">Home Nursing / Travel Nurse</option>
                <option value="Disability Support">Disability Support</option>
                <option value="Post-Surgery Recovery Care">Post-Surgery Recovery Care</option>
                <option value="Chronic Illness Care">Chronic Illness Care</option>
              </select>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Additional Message (Optional)"
                className="border p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition"
              >
                Submit Booking
              </button>
            </form>
          </div>

          {/* CONTACT OPTIONS */}
          <div className="flex flex-col gap-6">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg flex items-center gap-4">
              <FaWhatsapp className="text-green-500 text-3xl" />
              <div>
                <h3 className="font-semibold text-blue-800">Book via WhatsApp</h3>
                <p className="text-gray-700">0791 263 310</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg flex items-center gap-4">
              <FaEnvelope className="text-pink-500 text-3xl" />
              <div>
                <h3 className="font-semibold text-blue-800">Book via Email</h3>
                <p className="text-gray-700">blessedhandshomecare34@gmail.com</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-2xl shadow text-gray-700">
              <p>
                <strong>Note:</strong> Advance booking is recommended, but emergency visits are available.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}