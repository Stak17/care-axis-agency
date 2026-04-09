"use client";

import Testimonials from "./components/Testimonials";
import Team from "./components/Team";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="py-24 text-center bg-gradient-to-r from-blue-100 via-white to-green-100 rounded-xl shadow-lg px-6 md:px-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 leading-tight">
          Care Axis Agency,
          <br /> Right Where You Need It
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Professional nursing and caregiving services delivered with dignity, comfort, and trust.
        </p>

        <div className="mt-8 flex justify-center flex-wrap gap-4">
          <a
            href="/booking"
            className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition"
          >
            Book Now
          </a>

          <a
            href="/contact"
            className="border border-blue-600 text-blue-700 px-8 py-3 rounded-full hover:bg-blue-50 hover:scale-105 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "24/7 Availability",
            "Nationwide Service",
            "Professional Nurses",
            "Emergency Support",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 border border-gray-100 transition transform duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-700">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Who We Are
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
            Care Axis Agency is a compassionate home care provider dedicated to delivering
            personalized, one-to-one care services in the comfort of each client’s home. We support
            elderly individuals, new mothers, recovering patients, and those with chronic conditions.
          </p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 px-6 md:px-20">
        <Team />
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 px-6 md:px-20">
        <Testimonials />
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-green-100 to-blue-100 text-center rounded-2xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Ready to Get Started?
        </h2>

        <p className="text-gray-700 mb-6 text-lg">
          Book a service today and let us provide compassionate care for your loved ones.
        </p>

        <a
          href="/booking"
          className="bg-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition"
        >
          Make a Booking
        </a>
      </section>

    </main>
  );
}