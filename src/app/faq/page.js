'use client';
import Link from "next/link";
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Navbar from '../Componets/Navbar/Navbar';
import Footer from '../Componets/Footer/Footer';
import EnquiryForm from "../Componets/EnquiryForm/EnquiryForm";
import StatsOfNumbers from "../Componets/StatsOfNumbers/StatsOfNumbers";
import ServiceCenterCard from "../Componets/ServiceCenterCard/ServiceCenterCard";
const faqs = [
  {
    question: 'Get Service In Time',
    answer: 'Yes.Get service within 45 Minutes'
  },
  {
    question: ' Genuine Spare Parts',
    answer: ' Yes.Get Genuine and Fixed price for all spare parts'
  },
  {
    question: 'Get Reliable Services',
    answer: 'Yes.You can rely on our services which tested by 50000+ Customers'
  },
  {
    question: 'Trained Professional',
    answer: 'Yes.Service Provided by Certified Trained Professional.'
  },
  {
    question: 'Service Guarantee',
    answer: 'Yes.Get 90 Days service guarantee in all Appliance Repair'
  },
  {
    question: 'Brands Support',
    answer: 'Yes.We Repair all Brand Appliances and Provide Customer Support'
  },
  {
    question: 'Our Best Services Provide NewTack Company',
    answer: 'Air Conditioners, Microwave Oven, Refrigerator, Washing Machine, Tv, Geyser, RO Water Purifier, Kitchen Chimney and more.'
  },
  {
    question: 'Our All Brand Repair & Service Provide NewTack Company',
    answer: 'Samsung, LG, Whirlpool, Godrej, IFB, Bosch, Hitachi, Voltas, Carrier, Blue star, Daikin, O General, Ken star, Panasonic, Haier, Onida, Electrolux, Mitsubishi, Bajaj, Videocon, BPL, Sharp, Toshiba, Sansui, ETC.'
  },
  {
    question: 'Do we have any skilled technicians?',
    answer: 'Our technicians are Certified Trained Professional and endure frequent skill up-gradation curriculums to keep up with the technological improvements.'
  },
  {
    question: 'Do you provide material and/or service warranty?',
    answer: 'Warranty or guarantee on parts is offered as described on the material s bill. Please insist on a material bill from the service provider, in case of external material charges. Regarding service, there is a 30 days warranty, such that if a problem of the same nature reoccurs, our services will be free of cost.'
  },
  {
    question: 'What is Newtack Service Platform',
    answer: 'Newtack Service platform is the authorized appliance repair service for everyday products. We have accomplished hundreds of appliance repairs on Air Conditioners, Microwave Oven, Refrigerator Washing Machine and more.Newtack Service Platform is on of the best and authorized appliance repair service. We repair most of the major appliance brands like Onida, Whirlpool, BPL, Samsung, LG, Bajaj, Panasonic, Electrolux, Videocon, IFB, king star models, no matter where you bought them. Our goal is to provide quality repair to help you extend the useful life of your domestic appliances.'
  },
  {
    question: 'Appliance Repair Service Company',
    answer: 'If you are looking for the best Home Appliance Repairing Company in india as well as Kolkata then NewTack Service Platform is the leading company which provides complete repairing and maintenance service like Air Conditioner Repairing, Geyser Repair, Refrigerator Repairing, Washing Machine Repairing, LED TV Repairing, and microwave Oven Repairing in Kolkata at the most affordable rates. With the latest advancement in the home appliance and electronics goods sector in recent times you need the experts in the field to stay up to date with the latest technology and provide the best repairing and maintenance services. We have been in the field of home appliance repairing since long. The rich experience we have provides us with a distict edge over our competitor in the field.'
  } 
   
];

const FAQItem = ({ faq }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-orange-400 flex items-center justify-between px-6 py-4 text-left transition duration-400 cursor-pointer"
      >
        <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
        <FaChevronDown
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100 py-4 px-8" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-gray-600">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return (
   <>
   <Navbar/>
   <ServiceCenterCard />
      <EnquiryForm />
   <section
        style={{
          backgroundImage: `url('https://t4.ftcdn.net/jpg/13/39/27/63/360_F_1339276324_nCmzvU4dOdgkRmkcahfo9IvuBcM5tmwb.jpg')`, // Replace with actual image path or URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-gradient-to-r mt from-[#f0f4ff] to-[#eaf0fc] py-16 px-[5%] flex flex-col md:flex-row items-center justify-between"
      >
        <div>
          <h1 className="text-4xl mt-10 md:text-5xl font-bold text-[#0f172a] mb-2">
            {" "}
            FAQ
          </h1>
          <p className="text-[#666] text-base">
            <Link href="/">Home</Link> / FAQ
          </p>
        </div>
      </section>
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      
      <div className="mt-12 w-4/5   mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </div>
    <StatsOfNumbers />
<Footer/>
   </>
  );
}
