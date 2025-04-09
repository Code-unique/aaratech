"use client";

import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

// Define the type for the team member object
type MemberType = {
  name: string;
  role: string;
  description: string;
  image: string;
};

const teamMembers: MemberType[] = [
  {
    name: "Abhishek Bhandari",
    role: "Founder & CEO",
    description: "The glue who’s binding the team together and leading up front.",
    image: "/images/abishek.png",
  },
  {
    name: "Er. Rajan Basnet",
    role: "Co-Founder & CTO",
    description: "The tech-savvy one who dissects machines for fun.",
    image: "/images/rajan.png",
  },
  {
    name: "Er. Pawan Karki",
    role: "Co-Founder & Chief Advisor",
    description: "The well-connected guy who’s brilliant at PR, Leads Marketing.",
    image: "/images/pawan.png",
  },
  {
    name: "Er. Shasank Pokharel",
    role: "Co-Founder & CFO",
    description: "The boring dude who looks after paperwork and keeps hisab.",
    image: "/images/Sashank.png",
  },
  {
    name: "Chandra Lal Bohora",
    role: " Production Manager ",
    description: "   ",
    image: "/images/Chandra Lal Bohora.png",
  },
  {
    name: "Samip Bhattarai",
    role: " Research Engineer ",
    description: "      ",
    image: "/images/Samip Bhattarai.png",
  },
  {
    name: "Er. Hemanta Neupane",
    role: "Product Development Engineer",
    description: "",
    image: "images/hemanta.png",
  },
  {
    name: "Sabin Basnet",
    role: "Chief Operating Officer",
    description: "",
    image: "images/sabin1.png",
  },
];

// Define the type for the TeamCard component props
type TeamCardProps = {
  member: MemberType;
};

const TeamCard = ({ member }: TeamCardProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative group cursor-pointer rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105 bg-background p-6 text-black shadow-lg">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="text-2xl font-semibold mt-4">{member.name}</h2>
      <p className="text-lg opacity-80">{member.role}</p>

      <button
        className="absolute top-4 right-4 text-white bg-black/60 p-2 rounded-full hover:bg-teal-500 transition-all duration-300"
        aria-label="More Info"
        onClick={() => setModalOpen(true)}
      >
        <FaInfoCircle />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 text-black">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="mt-2">{member.description}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-black rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const OurTeam = () => {
  return (
    <section
      className="py-20 text-white"
      style={{
        backgroundImage: "url('/images/finalbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black">Meet Our Team</h1>
        <p className="text-xl text-black opacity-80 mt-3">
          Our philosophy is simple: hire great people and give them the resources and support to do their best work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
