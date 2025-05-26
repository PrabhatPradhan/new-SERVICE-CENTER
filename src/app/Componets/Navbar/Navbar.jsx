"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaRegComments } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-red-100">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-bold text-gradient bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Authorised
            </h1>
            <span className="text-sm font-semibold text-black">
              Customer Service
            </span>
          </div>
          <span className="text-orange-400 text-5xl animate-spin [animation-duration:12s]">
            ✶
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-orange-600 focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold text-black">
          <Link href="/" className="hover:text-orange-600 font-bold">HOME</Link>
          <Link href="/about" className="hover:text-orange-600">ABOUT US</Link>
          <Link href="/amc" className="hover:text-orange-600">AMC</Link>
          <Link href="/appointment" className="hover:text-orange-600">APPOINTMENT</Link>
          <Link href="/gallery" className="hover:text-orange-600">GALLERY</Link>
          <Link href="/contact" className="hover:text-orange-600">CONTACT US</Link>
          <Link href="/feedback" className="hover:text-orange-600">FEEDBACK</Link>
          <Link href="/blog" className="hover:text-orange-600">BLOG ARTICLES</Link>
        </nav>

        {/* Desktop Contact */}
        <div className="hidden md:flex items-center space-x-2">
          <FaRegComments className="text-orange-500 text-xl" />
          <div className="text-sm leading-tight">
            <p className="font-bold text-gray-800">Have any Questions?</p>
            <p className="text-blue-900 font-semibold text-sm">+0 123 888 555</p>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-In */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Area Overlay */}
        <div
          className="fixed inset-0 bg-orange-600 opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
        

        {/* Mobile Menu Content */}
        <div className="relative z-50 p-4 pt-6 space-y-4 text-sm font-semibold text-black">
        <div className="flex items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-bold text-gradient bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Authorised
            </h1>
            <span className="text-sm font-semibold text-black">
              Customer Service
            </span>
          </div>
          <span className="text-orange-400 text-5xl animate-spin [animation-duration:12s]">
            ✶
          </span>
        </div>
          <Link href="/" className="block hover:text-orange-600 border-b border-gray-900 pb-2">HOME</Link>
          <Link href="/about" className="block hover:text-orange-600 border-b border-gray-900 pb-2">ABOUT US</Link>
          <Link href="/amc" className="block hover:text-orange-600 border-b border-gray-900 pb-2">AMC</Link>
          <Link href="/appointment" className="block hover:text-orange-600 border-b border-gray-900 pb-2">APPOINTMENT</Link>
          <Link href="/gallery" className="block hover:text-orange-600 border-b border-gray-900 pb-2">GALLERY</Link>
          <Link href="/contact" className="block hover:text-orange-600 border-b border-gray-900 pb-2">CONTACT US</Link>
          <Link href="/feedback" className="block hover:text-orange-600 border-b border-gray-900 pb-2">FEEDBACK</Link>
          <Link href="/blog" className="block hover:text-orange-600 border-b border-gray-900 pb-2">BLOG ARTICLES</Link>

          {/* Contact Section */}
          <div className="flex items-start space-x-2 pt-4 border-t border-gray-200 cursor-pointer hover:bg-gray-50 p-2 rounded">
            <a
              href="https://wa.me/7505973391"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <FaRegComments className="text-orange-500 text-xl mt-1" />
            </a>
            <div className="text-sm leading-tight">
              <p className="font-bold text-gray-800">Have any Questions?</p>
              <p className="text-blue-900 font-semibold text-sm">+0 123 888 555</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
