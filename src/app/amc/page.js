import React from 'react'
import Link from 'next/link'
import Navbar from '../Componets/Navbar/Navbar'
import Cards from "../Componets/Cards/Cards"
import Footer from '../Componets/Footer/Footer'
import StatsOfNumbers from '../Componets/StatsOfNumbers/StatsOfNumbers'
export default function page() {
  return (
    <div>
     <Navbar/>
     <section
          style={{
            backgroundImage: `url('https://www.shutterstock.com/image-photo/smartphone-tablet-pc-mock-on-260nw-1287357250.jpg')`, // Replace with actual image path or URL
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="bg-gradient-to-r from-[#f0f4ff] to-[#eaf0fc] py-16 px-[5%] flex flex-col md:flex-row items-center justify-between"
        >
          <div>
            <h1 className="text-4xl mt-10 md:text-5xl font-bold text-[#0f172a] mb-2">
              {" "}
              AMC
            </h1>
            <p className="text-[#666] text-base">
              <Link href="/">Home</Link> / Amc
            </p>
          </div>
        </section>



     <div className=' '>
     <Cards/>
     </div>
     <StatsOfNumbers/>
     <Footer/>
    </div>
  )
}
