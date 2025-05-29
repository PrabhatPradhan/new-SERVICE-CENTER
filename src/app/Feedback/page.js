"use client";
import React from "react";
import { Star, CalendarDays, Building2 } from "lucide-react";
import { useState } from "react";
import Footer from "../Componets/Footer/Footer";
import Navbar from "../Componets/Navbar/Navbar";
import EnquiryForm from "../Componets/EnquiryForm/EnquiryForm";
import ServiceCenterCard from "../Componets/ServiceCenterCard/ServiceCenterCard";
import StatsOfNumbers from "../Componets/StatsOfNumbers/StatsOfNumbers";
import Link from 'next/link'
const reviews = [
  {
    name: "Arvind Tipradi",
    rating: 5,
    text: "Good work and well in time. Good service by professionals and experienced personal I am satisfied with their work. Charges are also reasonable. Good work over all. Thank you for the service",
    tags: ["Professional", "On Time Service"],
    company: "VKS Interior & Carpenter",
    date: "May, 17 2025",
  },
  {
    name: "Banu",
    rating: 5,
    text: "The technician did a fantastic job with my washing machine. He was professional, efficient, and made sure the repair was done to a high standard.",
    tags: [],
    company: "Sunlight Electrical Service Centre",
    date: "May, 17 2025",
  },
  {
    name: "Kumar",
    rating: 5,
    text: "Their work is absolutely amazing",
    tags: [],
    company: "Excellent Bird Control Service",
    date: "May, 17 2025",
  },
  {
    name: "Mohan",
    rating: 5,
    text: "I'm very pleased with how the carpenter repaired our old rack. His work was meticulous and the rack is now as good as new.",
    tags: [],
    company: "Rahul Carpenter",
    date: "May, 17 2025",
  },
];

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <>
    <Navbar/>
    <ServiceCenterCard />
    <EnquiryForm />
    <section
          style={{
            backgroundImage: `url('https://www.newbreedrevenue.com/hs-fs/hubfs/shutterstock_695711272.jpg?width=5001&name=shutterstock_695711272.jpg')`, // Replace with actual image path or URL
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="bg-gradient-to-r mt-12 from-[#f0f4ff] to-[#eaf0fc] py-16 px-[5%] flex flex-col md:flex-row items-center justify-between"
        >
          <div>
            <h1 className="text-4xl mt-10 md:text-5xl font-bold text-[#0f172a] mb-2">
              {" "}
              Feedback
            </h1>
            <p className="text-[#666] text-base">
              <Link href="/">Home</Link> / Feedback
            </p>
          </div>
        </section>
    <div className="min-h-screen mt-12 bg-white px-4 py-10 md:px-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-10 gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Reviews and ratings
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-yellow-500">4.7</span>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-1">Based on 784,658 ratings</p>

          {/* Ratings breakdown */}
          <div className="space-y-1 mt-6">
            {[5, 4, 3, 2, 1].map((star, i) => {
              const percentage = [74, 23, 1, 0, 1][i];
              return (
                <div key={star} className="flex items-center gap-2">
                  <span className="text-sm w-4">{star}★</span>
                  <div className="w-48 h-2 bg-gray-200 rounded">
                    <div
                      className="h-2 bg-yellow-400 rounded"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">{percentage}%</span>
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <p className="text-gray-700 text-base leading-relaxed">
              At <strong>Authorised Customer Service</strong>, your happiness
              drives everything we do...
              <br />
              <br />
              <strong>Share Your Experience</strong> Authorised Customer Service
              ensures that customers receive support from certified
              professionals who are officially recognized by the company or
              brand. These representatives are trained to handle inquiries,
              troubleshoot issues, and provide accurate information using
              genuine tools and procedures. Customers can trust that they are
              receiving reliable assistance, maintaining the quality and
              integrity of the products or services offered. Choosing authorised
              customer service guarantees peace of mind, expert solutions, and a
              commitment to customer satisfaction.{" "}
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-orange-600 text-center mb-6">
            Feedback Form
          </h2>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="rating"
                >
                  Rating (1–5)
                </label>
                <input
                  id="rating"
                  type="number"
                  min="1"
                  max="5"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="message"
                >
                  Your Feedback
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition duration-200"
              >
                Submit Feedback
              </button>
            </form>
          ) : (
            <div className="text-green-600 text-center font-semibold mt-4">
              Thank you for your feedback!
            </div>
          )}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review, i) => (
          <div key={i} className="border-b pb-6">
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                {review.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <CalendarDays className="w-4 h-4" />
                    {review.date}
                  </div>
                </div>

                <div className="flex items-center mt-1 mb-2">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-sm mb-2">{review.text}</p>

                {/* Tags */}
                {review.tags.length > 0 && (
                  <div className="flex gap-2 flex-wrap mb-2">
                    {review.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Company */}
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <Building2 className="w-4 h-4" />
                  {review.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  <StatsOfNumbers/> 
    <Footer/>
    </>
  );
}
