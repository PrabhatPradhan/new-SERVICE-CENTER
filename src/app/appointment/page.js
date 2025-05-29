"use client";
import React, { useState } from "react";
import Navbar from "../Componets/Navbar/Navbar";
import Footer from "../Componets/Footer/Footer";
import Link from 'next/link'
import StatsOfNumbers from "../Componets/StatsOfNumbers/StatsOfNumbers";
export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Form Data:", formData);
    alert("Appointment request submitted!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    });
  };

  return (
    <div>
      <Navbar />
      <section
          style={{
            backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/015/634/808/small_2x/circular-hud-connection-with-circuit-board-futuristic-modern-website-background-or-cover-page-for-technology-and-finance-concept-and-education-future-company-vector.jpg')`, // Replace with actual image path or URL
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="bg-gradient-to-r from-[#f0f4ff] to-[#eaf0fc] py-16 px-[5%] flex flex-col md:flex-row items-center justify-between"
        >
          <div>
            <h1 className="text-4xl mt-10 md:text-5xl font-bold text-white mb-2">
              {" "}
              Appointment
            </h1>
            <p className="text-[#666] text-base">
              <Link href="/">Home</Link> /Appointment
            </p>
          </div>
        </section>

      <section className="bg-gray-50 min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-lg shadow-lg overflow-hidden">

          {/* Left Side with Background Image */}
          <div
            className="hidden md:flex flex-col justify-center text-white p-8 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1600880292089-90a7e086ee8d?auto=format&fit=crop&w=1400&q=80')",
            }}
          >
            <div className="bg-orange-50 py-12 px-6 text-center">
  <h2 className="text-3xl font-bold text-orange-600 mb-4">Authorised Customer Service</h2>
  <p className="max-w-2xl mx-auto text-gray-700 text-lg">
    At Travel Batoi, our Authorised Customer Service team is committed to delivering top-tier
    assistance before, during, and after your journey. Whether you need help booking a package,
    modifying travel dates, or resolving queries on the go – we are here for you, 24/7.
  </p>
  <div className="mt-6 text-gray-800">
    <ul className="space-y-2">
      <li><i className="fa-solid fa-headset text-orange-500 mr-2"></i> 24x7 Dedicated Support</li>
      <li><i className="fa-solid fa-circle-check text-orange-500 mr-2"></i> Verified Travel Experts</li>
      <li><i className="fa-solid fa-file-contract text-orange-500 mr-2"></i> Secure & Transparent Bookings</li>
      <li><i className="fa-solid fa-thumbs-up text-orange-500 mr-2"></i> 100% Satisfaction Guarantee</li>
    </ul>
  </div>
</div>

          </div>

          {/* Right Side Form */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">Book an Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded"
              >
                <option value="">Select Service</option>
                <option value="AC Repair">AC Repair</option>
                <option value="Installation">Installation</option>
                <option value="Maintenance">Maintenance</option>
              </select>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded"
              />
              <textarea
                name="message"
                placeholder="Additional Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 w-full"
              >
                Submit Appointment
              </button>
            </form>
          </div>

        </div>
      </section>
      <StatsOfNumbers/>
      <Footer/>
    </div>
  );
}
