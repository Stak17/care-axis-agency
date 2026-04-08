"use client";

import { FaMobileAlt, FaMoneyBillWave, FaUniversity, FaLock } from "react-icons/fa";

export default function Payment() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-100 via-white to-green-100 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">
          Payment Options
        </h1>
        <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
          We offer flexible, secure, and convenient payment methods to make accessing our services easy and safe.
        </p>
      </section>

      {/* PAYMENT METHODS */}
      <section className="py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* MTN Mobile Money */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 border border-gray-100 transition text-center">
            <FaMobileAlt className="text-yellow-500 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              MTN Mobile Money
            </h2>
            <p className="text-gray-600 mb-1">Number:</p>
            <p className="font-bold text-lg">0791 263 310</p>
          </div>

          {/* Airtel Money */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 border border-gray-100 transition text-center">
            <FaMobileAlt className="text-red-500 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Airtel Money
            </h2>
            <p className="text-gray-600 mb-1">Number:</p>
            <p className="font-bold text-lg">0702 171 661</p>
          </div>

          {/* Bank Transfer & Cash */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 border border-gray-100 transition text-center">
            <FaUniversity className="text-blue-500 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Bank Transfer / Cash
            </h2>
            <p className="text-gray-600">
              Direct bank transfers and cash payments are accepted upon service delivery. Online payments can be arranged upon request.
            </p>
          </div>

        </div>
      </section>

      {/* SECURE PAYMENT NOTE */}
      <section className="py-16 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <FaLock className="text-green-600 text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-blue-800 mb-3">
            Secure Payments
          </h2>
          <p className="text-gray-700">
            All transactions are handled securely and confidentially. Your safety and trust are our priority.
          </p>
        </div>
      </section>

      {/* ADDITIONAL NOTE */}
      <section className="py-16 text-center">
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition max-w-2xl mx-auto">
          <FaMoneyBillWave className="text-green-600 text-3xl mx-auto mb-3" />
          <p className="text-gray-700">
            <strong>Note:</strong> Online payments are available upon request. Please contact us via WhatsApp or phone for assistance.
          </p>
        </div>
      </section>

    </main>
  );
}