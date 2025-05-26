import {
  FaFacebookF,
  FaInstagram,
  FaTimes,
  FaLinkedinIn,
  FaBehance,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b1c3f] text-white px-6 mt-8 py-12 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Contact */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <img
              src="https://newtackserviceplatform.com/public/front/images//flogo.webp"
              alt="Fixhero Logo"
              className="w-40 h-10"
            />
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            <a href="tel:+16845550102" className="block">
              <div className="hover:bg-orange-500 bg-[#1e3057] rounded-md p-4 flex items-start gap-4 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative cursor-pointer">
                <FaPhoneAlt className="text-xl mt-1 text-white" />
                <div>
                  <p className="text-sm text-gray-300">Call Us</p>
                  <p className="font-bold text-lg text-white">
                    (+684) 555-0102
                  </p>
                </div>
              </div>
            </a>

            <a href="mailto:info@example.com" className="block">
              <div className="hover:bg-orange-500 bg-[#1e3057] rounded-md p-4 flex items-start gap-4 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative cursor-pointer">
                <FaEnvelope className="text-xl mt-1 text-white" />
                <div>
                  <p className="text-sm text-gray-300">Email Us</p>
                  <p className="font-bold text-lg text-white">
                    info@example.com
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://www.google.com/maps?q=2972+Westheimer+96+Rd"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="hover:bg-orange-500 bg-[#1e3057] rounded-md p-4 flex items-start gap-4 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative cursor-pointer">
                <FaMapMarkerAlt className="text-xl mt-1 text-white" />
                <div>
                  <p className="text-sm text-gray-300">Address</p>
                  <p className="font-bold text-lg text-white">
                    2972 Westheimer 96 Rd.
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:shadow-2xl hover:bg-orange-500 hover:scale-[1.03] hover:-translate-y-1 w-10 h-10 bg-[#1e3057] flex items-center justify-center rounded-full text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:shadow-2xl hover:bg-orange-500 hover:scale-[1.03] hover:-translate-y-1 w-10 h-10 bg-[#1e3057] flex items-center justify-center rounded-full text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/"
              className="hover:shadow-2xl hover:bg-orange-500 hover:scale-[1.03] hover:-translate-y-1 w-10 h-10 bg-[#1e3057] flex items-center justify-center rounded-full text-white"
            >
              <FaTimes />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:shadow-2xl hover:bg-orange-500 hover:scale-[1.03] hover:-translate-y-1 w-10 h-10 bg-[#1e3057] flex items-center justify-center rounded-full text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:shadow-2xl hover:bg-orange-500 hover:scale-[1.03] hover:-translate-y-1 w-10 h-10 bg-[#1e3057] flex items-center justify-center rounded-full text-white"
            >
              <FaBehance />
            </a>
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h3 className="text-lg font-bold border-l-4 border-orange-400 pl-2 mb-4">
            About Company
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/company-history"
                className="hover:text-white transition"
              >
                Company History
              </Link>
            </li>
            <li>
              <Link href="/our-team" className="hover:text-white transition">
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="/our-projects"
                className="hover:text-white transition"
              >
                Our Projects
              </Link>
            </li>
            <li>
              <Link
                href="/work-process"
                className="hover:text-white transition"
              >
                Work Process
              </Link>
            </li>
            <li>
              <Link
                href="/pricing-plan"
                className="hover:text-white transition"
              >
                Pricing Plan
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold border-l-4 border-orange-400 pl-2 mb-4">
            Useful Information
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link
                href="/contact"
                className="hover:text-white transition"
              >
                Contact Us
              </Link></li>
            <li>Our Team</li>
            <li>Cost Calculator</li>
            <li>Testimonials</li>
            <li>Pricing Plan</li>
            <li>
              <Link
                href="/faq"
                className="hover:text-white transition"
              >
                Faq
              </Link>
            </li>
            <li>
              <Link  href="/privacyPolicyPage"
                className="hover:text-white transition">PrivacyPolicy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold border-l-4 border-orange-400 pl-2 mb-4">
            Additional Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>Latest News</li>
            <li>Our Services</li>
            <li>General Repairs</li>
            <li>Our Projects</li>
            <li>Work Process</li>
            <li>Service Area</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      {/* <div className="mt-12 bg-[#1e3057] px-6 py-6 rounded-md flex flex-col md:flex-row items-center justify-between">
          <p className="text-white text-lg font-semibold">
            Get Free Estimate. <span className="text-gray-300 font-normal">Our online scheduling and payment system is safe</span>
          </p>
          <button className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-bold">
            REQUEST WITH ONLINE FORM
          </button>
        </div> */}

      {/* Bottom */}
      <div className="text-gray-400 text-sm mt-8 text-center md:text-left md:flex md:justify-between">
        <p>© 2025 Fixhero. Designed By RSTheme.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <span>Sitemap</span>
          <span>•</span>
          <span><Link  href="/privacyPolicyPage"
                className="hover:text-white transition">PrivacyPolicy</Link></span>
          <span>•</span>
          <span>Terms of use</span>
        </div>
      </div>
    </footer>
  );
}
