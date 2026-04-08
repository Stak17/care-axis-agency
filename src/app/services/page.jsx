"use client";

import {
  FaHeartbeat,
  FaBaby,
  FaUserNurse,
  FaWheelchair,
  FaProcedures,
  FaNotesMedical,
} from "react-icons/fa";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Services() {
  const services = [
    {
      title: "Elderly Care",
      desc: "Support for elderly individuals including bathing, feeding, mobility assistance, medication reminders, and companionship.",
      icon: <FaHeartbeat className="text-blue-600 text-2xl mb-3" />,
      image: "/images/elderly-care.jpg",
    },
    {
      title: "Postnatal Care (Mother & Baby)",
      desc: "Care for new mothers and newborns including recovery monitoring, breastfeeding support, and baby care.",
      icon: <FaBaby className="text-pink-600 text-2xl mb-3" />,
      image: "/images/Postnatal-Care.jpg",
    },
    {
      title: "Home Nursing / Travel Nurse",
      desc: "Professional nursing care at home or while traveling, ensuring safety and comfort.",
      icon: <FaUserNurse className="text-green-600 text-2xl mb-3" />,
      image: "/images/home-nursing.jpg",
    },
    {
      title: "Disability Support",
      desc: "Assistance for individuals with disabilities including mobility support, hygiene care, and daily living help.",
      icon: <FaWheelchair className="text-purple-600 text-2xl mb-3" />,
      image: "/images/Disability-Support.jpg",
    },
    {
      title: "Post-Surgery Recovery Care",
      desc: "Wound care, medication reminders, and recovery monitoring after surgery.",
      icon: <FaProcedures className="text-red-600 text-2xl mb-3" />,
      image: "/images/Post-Surgery.jpg",
    },
    {
      title: "Chronic Illness Care",
      desc: "Support for patients with diabetes, hypertension, stroke recovery, and other long-term conditions.",
      icon: <FaNotesMedical className="text-yellow-600 text-2xl mb-3" />,
      image: "/images/Chronic-Illness.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">

      {/* HERO SECTION */}
      <section className="py-24 text-center bg-gradient-to-r from-blue-100 via-white to-green-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">
          Our Services
        </h1>
        <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
          We provide a wide range of professional home care services tailored to meet your needs.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 md:px-20">
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 border border-gray-100 transition flex flex-col items-center text-center"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded mb-4 w-full h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                />
              </div>

              {/* ICON */}
              {service.icon}

              {/* TITLE */}
              <h2 className="text-xl font-semibold text-blue-600 mb-3">
                {service.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mb-4">{service.desc}</p>

              {/* EXTRA INFO */}
              <div className="text-sm text-gray-500 mb-4 space-y-1">
                <p>✔ Available 24/7</p>
                <p>✔ Flexible Duration</p>
                <p>✔ Pricing: Based on needs</p>
              </div>

              {/* BOOK NOW BUTTON */}
              <Link
                href="/booking"
                className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
