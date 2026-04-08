/* eslint-disable @next/next/no-img-element */
// src/app/components/Services.jsx
"use client";

import { FaHeartbeat, FaBaby, FaUserNurse, FaWheelchair, FaProcedures, FaNotesMedical } from "react-icons/fa";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Elderly Care",
      desc: "Support for elderly individuals including bathing, feeding, mobility assistance, medication reminders, and companionship.",
      icon: <FaHeartbeat size={40} className="text-blue-600 mb-3" />,
      image: "/images/elderly-care.jpg",
    },
    {
      title: "Postnatal Care (Mother & Baby)",
      desc: "Care for new mothers and newborns including recovery monitoring, breastfeeding support, and baby care.",
      icon: <FaBaby size={40} className="text-pink-600 mb-3" />,
      image: "/images/Postnatal-care.jpg",
    },
    {
      title: "Home Nursing / Travel Nurse",
      desc: "Professional nursing care at home or while traveling, ensuring safety and comfort.",
      icon: <FaUserNurse size={40} className="text-green-600 mb-3" />,
      image: "/images/home-nursing.jpg",
    },
    {
      title: "Disability Support",
      desc: "Assistance for individuals with disabilities including mobility support, hygiene care, and daily living help.",
      icon: <FaWheelchair size={40} className="text-purple-600 mb-3" />,
      image: "/images/Disability-Support.jpg",
    },
    {
      title: "Post-Surgery Recovery Care",
      desc: "Wound care, medication reminders, and recovery monitoring after surgery.",
      icon: <FaProcedures size={40} className="text-red-600 mb-3" />,
      image: "/images/Post-Surgery.jpg",
    },
    {
      title: "Chronic Illness Care",
      desc: "Support for patients with diabetes, hypertension, stroke recovery, and other long-term conditions.",
      icon: <FaNotesMedical size={40} className="text-yellow-600 mb-3" />,
      image: "/images/Chronic-Illness.jpg",
    },
  ];

  return (
    <section className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition flex flex-col items-center text-center"
          >
            {/* Service Image with Hover Effect */}
            <div className="overflow-hidden rounded mb-4 w-full h-48">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
              />
            </div>

            {/* Icon */}
            {service.icon}

            {/* Title */}
            <h2 className="text-xl font-semibold text-blue-600 mb-3">{service.title}</h2>

            {/* Description */}
            <p className="text-gray-600 mb-4">{service.desc}</p>

            {/* Extra Info */}
            <div className="text-sm text-gray-500 mb-4">
              <p>✔ Available 24/7</p>
              <p>✔ Flexible Duration</p>
              <p>✔ Pricing: Based on needs</p>
            </div>

            {/* Book Now Button */}
            <Link
              href="/booking"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}