"use client";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
import {
  FaSnowflake,
  FaTv,
  FaWater,
  FaWind,
  FaTachometerAlt,
  FaFire,
  FaSink,
} from "react-icons/fa";
import { MdMicrowave } from "react-icons/md"; // ✅ Correct microwave icon

// ✅ Card Item Component
const CardItem = ({ Icon, label, title, description }) => (
  <div className="cursor-pointer bg-white border border-gray-200 rounded-md p-6 flex flex-col justify-between shadow-md hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 text-orange-500 text-3xl">
        <Icon className="w-full h-full" />
      </div>
      <div>
        <p className="text-xs text-orange-500 font-semibold uppercase">
          {label}
        </p>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
    <hr className="my-6 border-gray-200" />
    <p className="text-gray-600 text-sm mb-6">{description}</p>
    <button className="text-sm font-semibold text-gray-900 flex items-center gap-2">
      Readmore <FaPlus className="text-xs" />
    </button>
    <span className="absolute bottom-0 right-0 w-4 h-4 bg-orange-500"></span>
  </div>
);

// ✅ Main Component
export default function Card() {
  const cardData = [
    {
      Icon: FaSnowflake,
      label: "Feature One",
      title: "REFRIGERATOR",
      description: "Quick and reliable repair for your mobile devices.",
    },
    {
      Icon: FaTachometerAlt,
      label: "Feature Two",
      title: "WASHING MACHINE",
      description: "Professional tablet repair services at your doorstep.",
    },
    {
      Icon: FaWind,
      label: "Feature Three",
      title: "AIR CONDITIONER",
      description: "Expert laptop diagnostics and service.",
    },
    {
      Icon: MdMicrowave,
      label: "Feature Four",
      title: "MICROWAVE OVEN",
      description: "Fast battery replacements for all major devices.",
    },
    {
      Icon: FaTv,
      label: "Feature One",
      title: "TELEVISION",
      description: "Quick and reliable repair for your mobile devices.",
    },
    {
      Icon: FaFire,
      label: "Feature Two",
      title: "GEYSER",
      description: "Professional tablet repair services at your doorstep.",
    },
    {
      Icon: FaWater,
      label: "Feature Three",
      title: "RO WATER PURIFIER",
      description: "Expert laptop diagnostics and service.",
    },
    {
      Icon: FaSink,
      label: "Feature Four",
      title: "KITCHEN CHIMNEY",
      description: "Fast battery replacements for all major devices.",
    },
  ];

  return (
    <>
      {/* Cards Grid */}
      <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 mb-6 md:mb-4 lg:mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {cardData.map((card, i) => (
            <CardItem
              key={i}
              Icon={card.Icon}
              label={card.label}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-100 flex items-center justify-center px-4 mt-0 md:mt-4">
        <div className="bg-[#0e0034] rounded-2xl px-6 sm:px-8 py-10 sm:py-12 w-full max-w-6xl text-center text-white relative overflow-hidden shadow-lg">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <div className="absolute left-6 top-1/3 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-radial from-purple-400/40 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute right-6 top-10 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-radial from-yellow-300/30 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute left-6 bottom-6 text-purple-200 text-5xl sm:text-6xl animate-spin [animation-duration:12s]">✦</div>
            <div className="absolute right-6 top-6 text-yellow-300 text-4xl sm:text-5xl animate-spin [animation-duration:12s]">✶</div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-8 sm:mb-10">
            We Repair, You Relax. Click Below <br className="hidden sm:block" /> and Let’s Fix Your Devices!
          </h2>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {/* Call Button */}
            <a href="tel:+1234567898" className="block w-full md:w-auto">
              <div className="relative overflow-hidden font-bold py-3 px-5 sm:px-6 rounded-full shadow-md group hover:scale-105 transition-transform duration-300 cursor-pointer text-center">
                <span className="absolute inset-0 bg-gradient-to-t from-orange-500 to-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
                <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-white">
                  <div className="bg-white  bg-opacity-20 p-2 rounded-full">
                    <FiPhoneCall className="text- text-base sm:text-lg" />
                  </div>
                  <span className="text-white text-base sm:text-lg font-bold">+123 456-7898</span>
                </div>
              </div>
            </a>

            {/* OR Text */}
            <span className="text-white/70 font-semibold hidden md:block">OR</span>

            {/* Schedule Button */}
            <button className="relative overflow-hidden text-white font-bold py-3 px-5 sm:px-6 rounded-full shadow-md group hover:scale-105 transition-transform duration-300 w-full md:w-auto">
              <span className="absolute inset-0 bg-gradient-to-t from-orange-500 to-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
              <span className="relative z-10 block text-center">
                <Link href="/contact">GET A SCHEDULE</Link>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
