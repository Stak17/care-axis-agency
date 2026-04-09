"use client";

import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      name: "Nurse Anita Nabirye",
      role: "Registered Nurse",
      experience: "4 years",
      image: "/images/Anita.jpg",
    },
    {
      name: "Nurse Racheal Nakanwagi",
      role: "Enrolled Nurse",
      experience: "3 months",
      image: "/images/Racheal.jpg",
    },
    {
      name: "Nurse Amos Samuel Kiryowa",
      role: "Male nurse ",
      experience: "2 years",
      image: "/images/Amos.jpg",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Meet Our Care Team
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center p-6"
            >
              
              {/* Square Centered Image */}
              <div className="w-40 h-40 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-blue-700">
                {member.name}
              </h3>

              <p className="text-gray-600">{member.role}</p>

              <p className="text-gray-500 text-sm mt-1">
                {member.experience} experience
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}