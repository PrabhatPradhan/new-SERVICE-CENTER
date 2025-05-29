import { FaTruck, FaBoxOpen, FaTools } from "react-icons/fa";
import "../../Componets/WhyWeAreBest/WhyWeAreBest.css";
import Link from "next/link";
import InfiniteSlider from "../../Componets/InfiniteSlider/InfiniteSlider";
import { FiPhoneCall } from "react-icons/fi";
export default function WhyWeAreBest() {
  return (
    <>
      <div className="  flex items-center justify-center px-4 mt-0 md:mt-4">
        <div className="bg-[#0e0034] rounded-2xl px-6 sm:px-8 py-10 sm:py-12 w-full max-w-6xl text-center text-white relative overflow-hidden shadow-lg">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <div className="absolute left-6 top-1/3 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-radial from-purple-400/40 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute right-6 top-10 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-radial from-yellow-300/30 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute left-6 bottom-6 text-purple-200 text-5xl sm:text-6xl animate-spin [animation-duration:12s]">
              ✦
            </div>
            <div className="absolute right-6 top-6 text-yellow-300 text-4xl sm:text-5xl animate-spin [animation-duration:12s]">
              ✶
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-8 sm:mb-10">
            We Repair, You Relax. Click Below <br className="hidden sm:block" />
            and Let’s Fix Your Devices!
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {/* Call Button */}
            <a href="tel:+1234567898" className="block w-full md:w-auto">
              <div className="relative overflow-hidden font-bold py-3 px-5 sm:px-6 rounded-full shadow-md group hover:scale-105 transition-transform duration-300 cursor-pointer text-center">
                <span className="absolute inset-0 bg-gradient-to-t from-orange-500 to-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
                <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-white">
                  <div className="bg-white bg-opacity-20 p-2 rounded-full">
                    <FiPhoneCall className="text-base sm:text-lg" />
                  </div>
                  <span className="text-white text-base sm:text-lg font-bold">
                    +123 456-7898
                  </span>
                </div>
              </div>
            </a>

            <span className="text-white/70 font-semibold hidden md:block">
              OR
            </span>

            {/* Schedule Button */}
            <Link href="/contact" className="w-full md:w-auto">
              <div className="relative overflow-hidden text-white font-bold py-3 px-5 sm:px-6 rounded-full shadow-md group hover:scale-105 transition-transform duration-300 text-center">
                <span className="absolute inset-0 bg-gradient-to-t from-orange-500 to-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
                <span className="relative z-10 block">GET A SCHEDULE</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Section: Why Choose Us */}
      <section className="py-20 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h3 className="text-orange-500 font-semibold text-sm mb-3">
              ✦ WHY CHOOSE US ✦
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-snug">
              Experience Seamless Repairs:
              <br />
              <span className="text-indigo-950">
                Your Devices Deserve the Best
              </span>
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="text-orange-500 text-xl mt-1">✔</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Exceptional Expertise
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Our skilled technicians bring years of experience and
                    specialized knowledge to ensure precise, reliable repairs
                    for your devices.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-orange-500 text-xl mt-1">✔</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Customer-Centric Approach
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Our skilled technicians bring years of experience and
                    specialized knowledge to ensure precise, reliable repairs
                    for your devices.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-orange-500 text-xl mt-1">✔</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Quality Guaranteed
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Our skilled technicians bring years of experience and
                    specialized knowledge to ensure precise, reliable repairs
                    for your devices.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-orange-500 text-xl mt-1">✔</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Passionate Team
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Our skilled technicians bring years of experience and
                    specialized knowledge to ensure precise, reliable repairs
                    for your devices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Stats */}
          <div className="flex-1 flex flex-col lg:flex-row items-center gap-8">
            <img
              src="https://www.ciccomputech.com/wp-content/uploads/2022/01/SmilyTech-500x773-1.png"
              alt="Repair Illustration"
              className="w-full max-w-sm md:max-w-xs lg:max-w-md h-auto"
            />
          </div>
          <div className="space-y-6 text-center">
            <div className="hover:shadow-2xl hover:scale-[1.05] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative bg-indigo-100 text-orange-500 font-bold rounded-2xl py-5 px-10 shadow-md text-5xl">
              15+
              <span className="block text-base text-indigo-950 font-normal">
                Years Of Experience
              </span>
            </div>
            <div className="hover:shadow-2xl hover:scale-[1.05] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative bg-indigo-100 text-orange-500 font-bold rounded-2xl py-5 px-10 shadow-md text-5xl">
              56303+
              <span className="block text-base text-indigo-950 font-normal">
                Devices Repaired
              </span>
            </div>
            <div className="hover:shadow-2xl hover:scale-[1.05] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative bg-indigo-100 text-orange-500 font-bold rounded-2xl py-5 px-10 shadow-md text-5xl">
              100%
              <span className="block text-base text-indigo-950 font-normal">
                Customer Satisfaction
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Why We Are Best */}

      <section
        id="why-section"
        className="bg-gradient-to-br mt-2 from-[#ff7e3f] to-[#ff5602] text-white px-6 py-16 gap-4 md:px-20 relative overflow-hidden"
      >
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Text Content */}
          <div>
            <p className="uppercase tracking-widest text-sm font-semibold mb-2">
              ✨ Exceptional Service ✨
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Why We Are Best <br /> From Others
            </h2>
            <button className="relative overflow-hidden text-white font-bold py-3 px-6 rounded-full shadow-md group">
              <span className="absolute inset-0 bg-gradient-to-t from-orange-500 to-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
              <span className="relative z-10">
                <Link href="/contact">GET A SCHEDULE</Link>
              </span>
            </button>
          </div>

          {/* Right Features */}
          {/* Right Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10 mt-10 md:mt-0">
            <div
              id="card"
              className="bg-white text-orange-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transform transition-all duration-300 ease-in-out"
            >
              <div className="bg-orange-100 w-14 h-14 flex items-center justify-center rounded-md mb-4">
                <FaTruck className="text-2xl text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Service</h3>
              <p className="text-sm text-orange-700">
                I can't thank Stada enough for saving my computer!
              </p>
            </div>

            <div
              id="card"
              className="bg-white text-orange-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transform transition-all duration-300 ease-in-out"
            >
              <div className="bg-orange-100 w-14 h-14 flex items-center justify-center rounded-md mb-4">
                <FaBoxOpen className="text-2xl text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Diagnostics</h3>
              <p className="text-sm text-orange-700">
                Their team worked tirelessly to recover my files.
              </p>
            </div>

            <div
              id="card"
              className="bg-white text-orange-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transform transition-all duration-300 ease-in-out"
            >
              <div className="bg-orange-100 w-14 h-14 flex items-center justify-center rounded-md mb-4">
                <FaTools className="text-2xl text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Repair Process</h3>
              <p className="text-sm text-orange-700">
                They fixed the software with amazing speed!
              </p>
            </div>
          </div>
        </div>

        {/* Dotted Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/dotted-bg.png')] opacity-20 z-0"></div>
      </section>

      {/* Section: Partners */}
      <section className=" pt-8 bg-white text-center">
        <div className="pb-6 text-orange-600 font-semibold tracking-wide uppercase">
          ✦ Partners ✦
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
          Proudly Backed By Years of <br className="hidden md:block" />
          Trusted Service
        </h2>

        {/*slider */}
      </section>
      <InfiniteSlider />
    </>
  );
}
