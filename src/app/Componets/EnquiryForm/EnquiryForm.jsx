"use client";
import React, { useState, useEffect } from "react";
import { MdEmojiPeople, MdStars, MdThumbUp } from "react-icons/md";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaTimes } from "react-icons/fa";

export default function EnquiryForm() {
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
    }
  }, [show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone, email, comment });

    setName("");
    setPhone("");
    setEmail("");
    setComment("");
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setShow(false);
    }, 2000);
  };

  return (
    <>
      {/* Enquiry Button */}
      <button
        onClick={() => setShow(true)}
        className="hidden md:block fixed top-1/2 left-[1rem] transform -translate-y-1/2 rotate-[-90deg] origin-left bg-orange-500 text-white font-semibold py-2 px-4 rounded-tr-lg rounded-br-lg shadow-lg z-50"
      >
        Enquiry Form
      </button>

      {/* Popup Modal */}
      {show && (
        <div className="fixed inset-0   z-40 flex items-center justify-center">
          <div
            className={`relative rounded-xl w-[54rem] max-w-6xl max-h-[90vh] mx-4 md:mx-10 p-6 md:p-10 grid md:grid-cols-2   transform transition-all duration-500 ease-out ${
              animate
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }
            "}
            `}
          >
            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-10 right-10 text-black hover:text-red-500 text-xl"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            {/* Right - Form Section */}
            <form
              onSubmit={handleSubmit}
              className="bg-orange-400 text-white p-6 space-y-4"
            >
              <h2 className="text-xl font-bold mb-2">Get in touch with us</h2>
              <input
                type="text"
                placeholder="Enter Full Name *"
                className="w-full p-3 rounded text-black bg-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Enter Phone No. *"
                className="w-full p-3 rounded text-black bg-white"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Enter Email Id *"
                className="w-full p-3 rounded text-black bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Leave a comment here"
                className="w-full p-3 rounded text-black bg-white"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="bg-orange-800 hover:bg-orange-600 text-white px-6 py-2 rounded w-full"
              >
                Submit Enquiry
              </button>
              <p className="flex items-center text-white font-medium mt-2">
                <FaWhatsapp className="mr-2 text-green-400" /> Get itinerary on
                Whatsapp
              </p>
            </form>

            {/* Left Content */}
            <div className="space-y-6 bg-orange-100">
              <div className="overflow-hidden">
                <img
                  src="https://files.yappe.in/place/full/authorised-samsung-service-center-sai-telecom-2791212.webp"
                  alt="Char Dham Yatra"
                  className="rounded-xl p-2"
                />
              </div>

              <div className="grid grid-cols-3 text-center border-b pb-6">
                <div>
                  <MdEmojiPeople className="text-4xl text-orange-500 mx-auto" />
                  <p className="text-xl font-bold mt-2">25k</p>
                  <p className="text-sm">Happy Traveler</p>
                </div>
                <div>
                  <MdStars className="text-4xl text-orange-500 mx-auto" />
                  <p className="text-xl font-bold mt-2">45k</p>
                  <p className="text-sm">Tours Success</p>
                </div>
                <div>
                  <MdThumbUp className="text-4xl text-orange-500 mx-auto" />
                  <p className="text-xl font-bold mt-2">30k</p>
                  <p className="text-sm">Positive Reviews</p>
                </div>
              </div>

              <div className="pt-4 text-sm pl-4">
                <p className="font-bold text-orange-500">
                  Excellent!{" "}
                  <span className="inline-block text-orange-600">
                    ⬤ ⬤ ⬤ ⬤ ◯
                  </span>{" "}
                  4.5 Rating Out of 5.0
                </p>
                <p>Based on 526 reviews</p>
              </div>

              <div className="pt-4 pb-2 pl-4 text-sm">
                <p className="flex items-center text-black font-semibold">
                  <FaPhoneAlt className="mr-2" /> Call Us:{" "}
                  <span className="ml-1 font-bold">8800542270</span>
                </p>
                <p className="flex items-center text-black font-semibold mt-1">
                  <FaEnvelope className="mr-2" /> Send Us Mail:{" "}
                  <span className="ml-1 font-bold">info@mintoholidays.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Submission Popup */}
      {submitted && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
          ! Enquiry submitted successfully
        </div>
      )}
    </>
  );
}
