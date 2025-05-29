"use client";
import React from "react";
import Link from "next/link";
import { FaSnowflake, FaTv, FaWater, FaWind, FaTachometerAlt, FaFire, FaSink } from "react-icons/fa";
import { MdMicrowave } from "react-icons/md";
import Footer from "../Componets/Footer/Footer";
import Navbar from '../Componets/Navbar/Navbar'

// ✅ Card Item Component
const CardItem = ({ Icon, label, title  }) => (
  <div className="cursor-pointer bg-white border border-gray-200 rounded-md p-6 flex flex-col justify-between shadow-md hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 text-orange-500 text-3xl">
        <Icon className="w-full h-full" />
      </div>
      <div>
        <p className="text-xs text-orange-500 font-semibold uppercase">{label}</p>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
    </div> 
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
      path: "/blog/refrigerator",
    },
    {
      Icon: FaTachometerAlt,
      label: "Feature Two",
      title: "WASHING MACHINE",
      description: "Professional tablet repair services at your doorstep.",
      path: "/blog/washing-machine",
    },
    {
      Icon: FaWind,
      label: "Feature Three",
      title: "AIR CONDITIONER",
      description: "Expert laptop diagnostics and service major devices.",
      path: "/blog/air-conditioner",
    },
    {
      Icon: MdMicrowave,
      label: "Feature Four",
      title: "MICROWAVE OVEN",
      description: "Fast battery replacements for all major devices.",
      path: "/blog/microwave-oven",
    },
    {
      Icon: FaTv,
      label: "Feature One",
      title: "TELEVISION",
      description: "Quick and reliable repair for your mobile devices.",
      path: "/blog/television",
    },
    {
      Icon: FaFire,
      label: "Feature Two",
      title: "GEYSER",
      description: "Professional tablet repair services at your doorstep.",
      path: "/blog/geyser",
    },
    {
      Icon: FaWater,
      label: "Feature Three",
      title: "RO WATER PURIFIER",
      description: "Expert laptop diagnostics and service major devices.",
      path: "/blog/ro-water-purifier",
    },
    {
      Icon: FaSink,
      label: "Feature Four",
      title: "KITCHEN CHIMNEY",
      description: "Fast battery replacements for all major devices.",
      path: "/blog/kitchen-chimney",
    },
  ];

  return (
    <>
    <Navbar/>
    <section
          style={{
            backgroundImage: `url('https://www.shutterstock.com/image-photo/flat-lay-home-office-desktop-260nw-1869950761.jpg')`, // Replace with actual image path or URL
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="bg-gradient-to-r from-[#f0f4ff] to-[#eaf0fc] py-16 px-[5%] flex flex-col md:flex-row items-center justify-between"
        >
          <div>
            <h1 className="text-4xl mt-10 md:text-5xl font-bold text-[#0f172a] mb-2">
              {" "}
              Blog
            </h1>
            <p className="text-[#666] text-base">
              <Link href="/">Home</Link> /  Blog
            </p>
          </div>
        </section>

      {/* Cards Grid */}
      <div className="min-h-screen mt-12  bg-gray-100 p-4 sm:p-6 md:p-8 mb-6 md:mb-4 lg:mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {cardData.map((card, i) => (
            <Link href={card.path} key={i}>
              <CardItem
                Icon={card.Icon}
                label={card.label}
                title={card.title}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
     <Footer/>
    </>
  );
}
