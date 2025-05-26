'use client';
import React from "react";
import Footer from "../Componets/Footer/Footer";
import Navbar from "../Componets/Navbar/Navbar";
import Link from "next/link";
import ServiceCenterCard from "../Componets/ServiceCenterCard/ServiceCenterCard";
import EnquiryForm from "../Componets/EnquiryForm/EnquiryForm";
import StatsOfNumbers from "../Componets/StatsOfNumbers/StatsOfNumbers"
export default function Page() {
  return (
    <>
      <Navbar />
      <EnquiryForm />
      <ServiceCenterCard />
      <div
        className="bg-white text-[#111]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Header Section */}
        <section
          style={{
            backgroundImage: `url('https://aoneeducationpoint.com/wp-content/uploads/2022/01/contact-to-infinity-training-center-kuwait.jpg')`, // Replace with actual image path or URL
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="bg-gradient-to-r mt-8 from-[#f0f4ff] to-[#eaf0fc] py-16 px-[5%] flex flex-col md:flex-row items-center justify-between"
        >
          <div>
            <h1 className="text-4xl mt-10 md:text-5xl font-bold text-[#0f172a] mb-2">
              {" "}
              Contact
            </h1>
            <p className="text-[#666] text-base">
              <Link href="/">Home</Link> / Contact
            </p>
          </div>
        </section>
        {/* Contact Section */}
        <section className="flex flex-wrap gap-10 justify-between px-[5%] py-16">
          {/* Left */}
          <div className="flex-1 min-w-[300px]">
            {/* Info Cards */}
            <div className="flex flex-wrap gap-5 mb-10">
              {/* Phone */}
              <a
                href="tel:+6845550102"
                className="flex items-center gap-3 bg-white rounded-lg shadow-sm p-5 flex-1 min-w-[220px] hover:shadow-md transition"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
                  alt="Phone"
                  className="h-[30px]"
                />
                <div>
                  <strong className="text-sm text-[#666] block">Phone:</strong>
                  <span className="text-base font-bold text-[#111]">
                    (+684) 555-0102
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@example.com"
                className="flex items-center gap-3 bg-white rounded-lg shadow-sm p-5 flex-1 min-w-[220px] hover:shadow-md transition"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                  alt="Email"
                  className="h-[30px]"
                />
                <div>
                  <strong className="text-sm text-[#666] block">
                    Email Us
                  </strong>
                  <span className="text-base font-bold text-[#111]">
                    info@example.com
                  </span>
                </div>
              </a>

              {/* Address */}
              <a
                href="https://www.google.com/maps/search/2972+Westheimer+96+Rd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-lg shadow-sm p-5 flex-1 min-w-[220px] hover:shadow-md transition"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                  alt="Address"
                  className="h-[30px]"
                />
                <div>
                  <strong className="text-sm text-[#666] block">Address</strong>
                  <span className="text-base font-bold text-[#111]">
                    2972 Westheimer 96 Rd.
                  </span>
                </div>
              </a>
            </div>

            {/* Text */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
              Need any kind of fixhero help?{" "}
              <span className="text-[#f3842f]">Send us a message</span>
            </h2>
            <p className="my-5 text-[#666]">
              Proactively envisioned multimedia based expertise cross-media
              growth strategies. Seamlessly visualize quality intellectual
              capital without superior collaboration.
            </p>

            {/* <a
              href="#"
              className="inline-block px-6 py-3 border border-gray-300 rounded-md font-medium bg-white hover:bg-gray-100 transition"
            >
              See Our Faq
            </a> */}
          </div>

          {/* Right */}
          <div className="flex-1 min-w-[300px] bg-[#fafafa] rounded-xl p-8">
            <form>
              <div className="flex flex-wrap gap-5 mb-5">
                <div className="flex-1 min-w-[100px]">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border border-gray-300 rounded-md text-sm outline-none"
                  />
                </div>
                <div className="flex-1 min-w-[100px]">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full p-3 border border-gray-300 rounded-md text-sm outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-5 mb-5">
                <div className="flex-1 min-w-[100px]">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 rounded-md text-sm outline-none"
                  />
                </div>
                <div className="flex-1 min-w-[100px]">
                  <select className="w-full p-3 border border-gray-300 rounded-md text-sm outline-none">
                    <option>Select Services</option>
                    <option>Repair</option>
                    <option>Installation</option>
                  </select>
                </div>
              </div>

              <div className="mb-5">
                <textarea
                  placeholder="Your message..."
                  className="w-full p-3 border border-gray-300 rounded-md text-sm outline-none min-h-[120px] resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                className=" bg-[#f39b2f] hover:bg-[#d67e20] text-white px-8 py-3 rounded-md font-bold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE"
        width="100%"
        height="400"
        className="rounded-lg shadow-md"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <StatsOfNumbers />

      <Footer />
    </>
  );
}
