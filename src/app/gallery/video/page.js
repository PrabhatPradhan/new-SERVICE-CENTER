"use client";
import React, { useState } from "react";
import Navbar from "../../Componets/Navbar/Navbar";
import Footer from "../../Componets/Footer/Footer";
import StatsOfNumbers from "../../Componets/StatsOfNumbers/StatsOfNumbers";
import Link from "next/link";

const videos = [
  {
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Video 1",
  },
  {
    src: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    title: "Video 2",
  },
  {
    src: "https://www.youtube.com/embed/tgbNymZ7vqY",
    title: "Video 3",
  },
  {
    src: "https://www.youtube.com/embed/oHg5SJYRHA0",
    title: "Video 4",
  },
  {
    src: "https://www.youtube.com/embed/L_jWHffIx5E",
    title: "Video 5",
  },
  {
    src: "https://www.youtube.com/embed/e-ORhEE9VVg",
    title: "Video 6",
  },
  {
    src: "https://www.youtube.com/embed/V-_O7nl0Ii0",
    title: "Video 7",
  },
  {
    src: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    title: "Video 8",
  },
];

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div>
      <Navbar />
      <section
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1713557112617-e12d67bddc3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-gradient-to-r from-[#f0f4ff] to-[#eaf0fc] py-16 px-[5%] flex flex-col md:flex-row items-center justify-between"
      >
        <div>
          <h1 className="text-4xl mt-10 md:text-5xl font-bold text-[#0f172a] mb-2">
            Videos
          </h1>
          <p className="text-[#666] text-base">
            <Link href="/">Home</Link> / Videos
          </p>
        </div>
      </section>

      <section className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-600 text-center mb-10">
            Video Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className="relative group h-[16rem] overflow-hidden rounded-lg shadow-md cursor-pointer"
              >
                <div className="relative pb-[56.25%] h-[16rem] overflow-hidden rounded-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    src={`${video.src}?autoplay=0&mute=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative w-full max-w-4xl px-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="z-50 absolute top-2 right-2 bg-white text-black text-2xl rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-red-600 hover:text-white transition"
            >
              ✕
            </button>

            {/* Video Frame */}
            <div className="relative pb-[56.25%] h-0 z-10">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`${videos[currentIndex].src}?autoplay=1`}
                title={videos[currentIndex].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Navigation */}
            <button
              onClick={prevVideo}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold z-40"
            >
              ‹
            </button>
            <button
              onClick={nextVideo}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold z-40"
            >
              ›
            </button>
          </div>
        </div>
      )}
 
      <StatsOfNumbers />
      <Footer />
    </div>
  );
}
