/* eslint-disable @next/next/no-img-element */
"use client";

export default function Team() {
  const teamMembers = [
    {
      name: "Nurse Grace Akello",
      role: "Registered Nurse",
      experience: "5 years",
      image: "/images/nurse1.jpg",
    },
    {
      name: "Nurse John Kato",
      role: "Enrolled Nurse",
      experience: "3 years",
      image: "/images/nurse2.jpg",
    },
    {
      name: "Caregiver Susan Achieng",
      role: "Home Care Assistant",
      experience: "4 years",
      image: "/images/nurse3.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="overflow-hidden h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-700 mb-1">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.experience} experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}