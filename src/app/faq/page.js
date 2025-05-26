'use client';
import React, { useState } from 'react';
import Link from "next/link";
import { FaChevronDown } from 'react-icons/fa';
import Navbar from '../Componets/Navbar/Navbar';
import Footer from '../Componets/Footer/Footer';
import EnquiryForm from "../Componets/EnquiryForm/EnquiryForm";
import StatsOfNumbers from "../Componets/StatsOfNumbers/StatsOfNumbers";
import ServiceCenterCard from "../Componets/ServiceCenterCard/ServiceCenterCard";

const faqs = [
  { question: 'Get Service In Time', answer: 'Yes. Get service within 45 Minutes' },
  { question: 'Genuine Spare Parts', answer: 'Yes. Get Genuine and Fixed price for all spare parts' },
  { question: 'Get Reliable Services', answer: 'Yes. You can rely on our services which are tested by 50000+ Customers' },
  { question: 'Trained Professional', answer: 'Yes. Service provided by Certified Trained Professionals.' },
  { question: 'Service Guarantee', answer: 'Yes. Get 90 Days service guarantee in all Appliance Repair' },
  { question: 'Brands Support', answer: 'Yes. We repair all brand appliances and provide customer support' },
  { question: 'Our Best Services Provided by NewTack Company', answer: 'Air Conditioners, Microwave Oven, Refrigerator, Washing Machine, TV, Geyser, RO Water Purifier, Kitchen Chimney and more.' },
  { question: 'All Brand Repair & Service by NewTack Company', answer: 'Samsung, LG, Whirlpool, Godrej, IFB, Bosch, Hitachi, Voltas, Carrier, Blue Star, Daikin, O General, Kenstar, Panasonic, Haier, Onida, Electrolux, Mitsubishi, Bajaj, Videocon, BPL, Sharp, Toshiba, Sansui, etc.' },
  { question: 'Do we have any skilled technicians?', answer: 'Our technicians are Certified Trained Professionals and regularly update their skills to match technological advancements.' },
  { question: 'Do you provide material and/or service warranty?', answer: 'Yes. Warranty on parts is offered as described on the material bill. Insist on a material bill from the provider. We also offer a 30-day service warranty for the same problem.' },
  { question: 'What is Newtack Service Platform?', answer: 'Newtack Service is an authorized appliance repair service platform with hundreds of successful repairs. We work with all major brands to extend the life of your appliances.' },
  { question: 'Appliance Repair Service Company', answer: 'NewTack is a leading Home Appliance Repairing Company in India. We offer expert repair and maintenance for ACs, geysers, refrigerators, TVs, and more, with years of experience and affordable pricing.' }
];

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className="shadow-lg overflow-hidden transition-all duration-300 border border-gray-200  ">
    <button
      onClick={onToggle}
      className={`w-full ${isOpen ? 'bg-orange-400' : 'bg-white'} flex items-center justify-between px-6 py-8 text-left transition duration-300 cursor-pointer`}
    >
      <span className={`text-2xl font-bold ${isOpen ? 'text-white' : 'text-gray-800'}`}>
        {faq.question}
      </span>
      <FaChevronDown
        className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : "text-gray-800"}`}
      />
    </button>

    <div
      className={`grid transition-all duration-500 ease-in-out ${
        isOpen ? "grid-rows-[1fr] opacity-100 py-8 px-8" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden text-gray-600 text-base md:text-xl">{faq.answer}</div>
    </div>
  </div>
);

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <>
      <Navbar />
      <ServiceCenterCard />
      <EnquiryForm />

      <section
        style={{
          backgroundImage: `url('https://t4.ftcdn.net/jpg/13/39/27/63/360_F_1339276324_nCmzvU4dOdgkRmkcahfo9IvuBcM5tmwb.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-gradient-to-r mt-12 from-[#f0f4ff] to-[#eaf0fc] py-16 px-[5%] flex flex-col md:flex-row items-center justify-between"
      >
        <div>
          <h1 className="text-4xl mt-10 md:text-5xl font-bold text-[#0f172a] mb-2">
            FAQ
          </h1>
          <p className="text-[#666] text-base">
            <Link href="/">Home</Link> / FAQ
          </p>
        </div>
      </section>

      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mt-12 w-4/5 mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>

      <StatsOfNumbers />
      <Footer />
    </>
  );
}
