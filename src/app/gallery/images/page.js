
"use client"
import React, { useState } from "react";
import Navbar from "../../Componets/Navbar/Navbar";
import Link from "next/link";
import Footer from "../../Componets/Footer/Footer";
import StatsOfNumbers from "../../Componets/StatsOfNumbers/StatsOfNumbers";

const images = [
  { src: "https://i.ytimg.com/vi/_Ka4z6AfGdk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDfb63FjqJ1cdR69wi6Mehb3QB2Gg", title: "Geyser Repair" },
  { src: "https://images.squarespace-cdn.com/content/v1/66ce80914c93ab213fa22503/80c99182-adff-467d-9c66-478375a84490/Refrigerator-Repair-1200x675-1.jpeg", title: "Refrigerator Repair" },
  { src: "https://www.shutterstock.com/image-photo/working-man-plumber-repairs-washing-260nw-1051194281.jpg", title: "Microwave Repair" },
  { src: "https://www.shutterstock.com/image-photo/repairman-fix-air-conditioning-systems-600nw-2463365013.jpg", title: "AC Repair" },
  { src: "https://media.istockphoto.com/id/1766566361/photo/young-repairman-in-a-blue-uniform-repairs-and-repairs-a-microwave-oven-with-a-screwdriver-in.jpg?s=612x612&w=0&k=20&c=Js4d8OeChqtR1PVkpqPWjxZV8Xi7imYsFE7Q9uTF79o=", title: "Water Purifier Maintenance" },
  { src: "https://c8.alamy.com/comp/2GFTJAB/fixing-lcd-television-tv-checking-and-installation-2GFTJAB.jpg", title: "LCD TV Fix" },
  { src: "https://www.shutterstock.com/image-photo/water-purification-filter-install-maintenance-260nw-2187309473.jpg", title: "ro-water-purifier" },
  { src: "https://omsaimaintenance.com/images/services/Geyser-Repair-1.jpg", title: "Fridge Gas Refill" },
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

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <Navbar />
      <section
        style={{
          backgroundImage: `url('https://static01.nyt.com/images/2021/...jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-gradient-to-r from-[#f0f4ff] to-[#eaf0fc] py-16 px-[5%] flex flex-col md:flex-row items-center justify-between"
      >
        <div>
          <h1 className="text-4xl mt-10 md:text-5xl font-bold text-[#0f172a] mb-2">
            Images
          </h1>
          <p className="text-[#666] text-base">
            <Link href="/">Home</Link> / Images
          </p>
        </div>
      </section>

      <section className="min-h-screen bg-gray-50 py-10 mt-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-600 text-center mb-10">
            Image Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {image.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full px-4">
            <button
              onClick={closeModal}
              className="absolute top-4   right-4 text-white text-2xl font-bold"
            >
              ✕
            </button>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
              <button
                onClick={prevImage}
                className="text-white text-4xl px-4 font-bold"
              >
                ‹
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
              <button
                onClick={nextImage}
                className="text-white text-4xl px-4 font-bold"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}

      <StatsOfNumbers />
      <Footer />
    </div>
  );
}
