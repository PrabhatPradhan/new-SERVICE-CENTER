import { FaTruck, FaBoxOpen, FaTools } from "react-icons/fa";
import "../../Componets/WhyWeAreBest/WhyWeAreBest.css";
import Link from "next/link";
import InfiniteSlider from "../../Componets/InfiniteSlider/InfiniteSlider"
export default function WhyWeAreBest() {
  return (
    <>
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
      <section className="bg-gradient-to-br mt-2 from-[#ff7e3f] to-[#ff5602] text-white px-6 py-16 md:px-20 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div>
            <p className="uppercase tracking-widest text-sm font-semibold mb-2">
              ✨ Exceptional Service ✨
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Why We Are Best
              <br />
              From Others
            </h2>
            <button className="relative overflow-hidden text-white font-bold py-3 px-6 rounded-full shadow-md group">
              <span className="absolute inset-0 bg-gradient-to-t from-orange-500 to-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
              <span className="relative z-10"><Link href='/contact'>GET A SCHEDULE</Link></span>
            </button>
          </div>

          {/* Right Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            <div className="bg-white text-orange-800 p-6 rounded-xl shadow-lg   hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative">
              <div className="bg-orange-100 w-12 h-12 flex items-center justify-center rounded-md mb-4">
                <FaTruck className="text-2xl text-orange-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">Fast Service</h3>
              <p className="text-sm text-orange-700">
                I cant thank Stada enough for saving my computer! Their team
                worked tirelessly to recover my files and fix the software.
              </p>
            </div>
            <div className="bg-white text-orange-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative">
              <div className="bg-orange-100 w-12 h-12 flex items-center justify-center rounded-md mb-4">
                <FaBoxOpen className="text-2xl text-orange-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">Free Diagnostics</h3>
              <p className="text-sm text-orange-700">
                I cant thank Stada enough for saving my computer! Their team
                worked tirelessly to recover my files and fix the software.
              </p>
            </div>
            <div className="bg-white   text-orange-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 ease-in-out relative">
              <div className="bg-orange-100 w-12 h-12 flex items-center justify-center rounded-md mb-4">
                <FaTools className="text-2xl text-orange-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">Quick Repair Process</h3>
              <p className="text-sm text-orange-700">
                I cant thank Stada enough for saving my computer! Their team
                worked tirelessly to recover my files and fix the software.
              </p>
            </div>
          </div>
        </div>

        {/* Dotted Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/dotted-bg.png')] opacity-20 z-0"></div>
      </section>

      {/* Section: Partners */}
      <section className="py-16 bg-white text-center">
        <div className="mb-4 text-orange-600 font-semibold tracking-wide uppercase">
          ✦ Partners ✦
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Proudly Backed By Years of <br className="hidden md:block" />
          Trusted Service
        </h2>

        {/*slider */}

        <InfiniteSlider />
      </section>
    </>
  );
}
