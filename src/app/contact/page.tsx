"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Navigation from "@/components/headers/Navigation";

export default function Contact() {
  return (
    <div
      className="min-h-screen flex flex-col items-center bg-cover bg-fixed text-black"
      style={{
        backgroundImage: "url('/images/finalbg.jpg')",
        backgroundPosition: "center",
      }}
    >
      {/* Navigation */}
      <Navigation />

      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mt-20"
      >
        Contact Us
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg mt-4 text-center"
      >
        We’d love to hear from you! Get in touch via email, phone, or WhatsApp.
      </motion.p>

      {/* Contact Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center"
        >
          <FaEnvelope className="text-green-500 text-3xl" />
          <h3 className="text-xl font-semibold mt-3">Email Us</h3>
          <p className="text-gray-600 mt-2">ara80fficial@gmail.com</p>
        </motion.div>

        {/* Phone */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center"
        >
          <FaPhone className="text-blue-500 text-3xl" />
          <h3 className="text-xl font-semibold mt-3">Call Us</h3>
          <p className="text-gray-600 mt-2">+977 9817396487</p>
        </motion.div>

        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/9817396487?text=Hello! I need assistance."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-green-500 text-white shadow-lg rounded-lg flex flex-col items-center cursor-pointer"
        >
          <FaWhatsapp className="text-3xl" />
          <h3 className="text-xl font-semibold mt-3">WhatsApp Us</h3>
          <p className="mt-2">Chat with us instantly</p>
        </motion.a>
      </div>
    </div>
  );
}
