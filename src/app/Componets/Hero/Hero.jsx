"use client";

import { useState, useEffect } from "react";
import {
  FaSnowflake,
  FaTachometerAlt,
 
  FaTv,
  FaFire,
  FaWater,
  FaSink,
  FaWind,
} from "react-icons/fa";
import { MdMicrowave } from "react-icons/md";
const icons = [
  { Icon: FaSnowflake, label: "REFRIGERATOR", angle: -90 },
  { Icon: FaTachometerAlt, label: "WASHING MACHINE", angle: -35 },
  { Icon: MdMicrowave, label: "MICROWAVE OVEN", angle: 5 },
  { Icon: FaTv, label: "TELEVISION", angle: 45 },
  { Icon: FaFire, label: "GEYSER", angle: 80 },
  { Icon: FaWater, label: "RO WATER", angle: 125 },
  { Icon: FaSink, label: "KITCHEN CHIMNEY", angle: 170 },
  { Icon: FaWind, label: "AC", angle: 215 },
];

export default function Hero() {
  const radius = 200;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % icons.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <>
      <section className="flex items-center   justify-around flex-col pb-2 md:flex-row   gap-0 px-6 md:px-20 py-6 bg-[#f0f6fc] relative overflow-hidden">
        {/* Left Content */}
        <div className="max-w-xl z-10 px-6 md:px-0 space-y-4">
          <p className="text-orange-600 font-semibold text-sm flex items-center gap-2">
            <span className="text-xl">🛠️</span> 100% SATISFACTION GUARANTEE
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            For All Your <br />
            Big And Small Repair <br />& Maintenance Needs
          </h1>
          <p className="text-gray-600 text-sm">
            Collaboratively administrate empowered markets via plug-and-play
            networks, dynamically procrastinate B2C users after installed.
          </p>
        </div>

        {/* Right Image and Icons */}
        <div className="relative w-[40rem] h-[550px]   items-center justify-center bg-blue-50 overflow-hidden hidden md:flex">
          {/* Dotted Circle SVG */}
          <svg
            className="absolute   "
            width={radius * 2 + 100}
            height={radius * 2 + 100}
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <circle
              cx={(radius * 2 + 100) / 2}
              cy={(radius * 2 + 100) / 2}
              r={radius}
              stroke="#f6863b"
              strokeWidth="1"
              strokeDasharray="4 8"
              fill="none"
            />
          </svg>

          <img
            src="https://handyman.fixherotheme.com/wp-content/uploads/2023/09/man.png"
            alt="Repairman"
            width={260}
            height={260}
            className="z-10 pl-1 animate-spin-slow"
            id="img-hero"
          />

          {/* Circular Icons */}
          {icons.map((item, i) => {
            const angleRad = (item.angle * Math.PI) / 176;
            const x = radius * Math.cos(angleRad);
            const y = radius * Math.sin(angleRad);
            const isHovered = hoveredIndex === i;
            const isActive = isHovered || (!hoveredIndex && i === activeIndex);

            return (
              <div
                key={i}
                className="absolute group"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  top: "48%",
                  left: "47%",
                }}
                onMouseEnter={() => {
                  setPaused(true);
                  setHoveredIndex(i);
                }}
                onMouseLeave={() => {
                  setPaused(false);
                  setHoveredIndex(null);
                }}
              >
                <div
                  className={`w-12 h-12   text-3xl rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer transition text-orange-600   ${
                    isActive ? "scale-110" : ""
                  }`}
                >
                  <item.Icon />
                </div>

                <div
                  className={`absolute top-full mt-1 left-1/2 -translate-x-1/2 text-black text-base font-bold rounded px-2 py-1
                  transition-all duration-500 transform
                  ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Special Services Section */}
      <section className="bg-orange-500 text-white text-center py-16 px-4">
        <p className="uppercase text-sm tracking-widest font-bold text-black mb-2">
          Special Services
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          All Appliance Repair Service &<br />
          <span className="text-white">In One Platform</span>
        </h2>
        <p className="text-sm md:text-base text-white mt-6 max-w-4xl mx-auto leading-relaxed">
          In Indian family now a days uses at least 8 to 12 electrical
          appliances like Air Conditioners, Microwave Oven, Refrigerator,
          Washing Machine and electronic devices of variable brands & everyday
          each individual faces such small or big problems. If you are looking
          for the best Home Appliances Repairing Company in India as well as
          Kolkata then NEWTACK Service Platform is the leading Company, which
          provides complete repairing and maintenance service like Air
          Conditioner Repairing, Geyser Repairing, Refrigerator Repairing,
          Washing machine Repairing, LED TV Repairing, and Microwave Oven
          Repairing in Kolkata at the most affordable rates. With the latest
          advancements in the home appliance and electronics goods sector in
          recent times you need the experts in the field to stay up to date with
          the latest technology and
        </p>
      </section>
    </>
  );
}
