"use client";
import Link from "next/link";

export default function WashingMachineCards() {
  const cards = [
    {
      title: "Front Load Washing Machine Maintenance",
      slug: "front-load-maintenance",
      image: "https://trustworthyhomeservices.in/wp-content/uploads/2024/01/trustworthy-blog7.jpg",
      description:
        "Discover essential maintenance tips for front-load washing machines. Learn how to prevent mold, improve washing efficiency, and keep your appliance running longer with proper care routines.",
    },
    {
      title: "Top 5 Washing Machine Issues and Fixes",
      slug: "top-issues-and-fixes",
      image: "https://sunairtampa.com/wp-content/uploads/2021/05/man-repair-cleaning-air-conditioner-worker-home.jpg",
      description:
        "From drainage problems to spinning failures, this guide helps you identify and fix the most common washing machine issues without needing a technician.",
    },
    {
      title: "Energy-Efficient Washing Machines in 2025",
      slug: "energy-efficient-washers-2025",
      image: "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2024/01/0504140022-09-Front-Loading-Washing-Machine-Repair-Professional.jpg",
      description:
        "Explore the most energy-efficient washing machines of 2025. We cover features, pros, cons, and tips to save electricity and water with smart laundry choices.",
    },
    {
      title: "Washing Machine Buying Guide",
      slug: "washing-machine-buying-guide",
      image: "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2024/01/0504140022-09-Front-Loading-Washing-Machine-Repair-Professional.jpg",
      description:
        "Not sure which washing machine to buy? This detailed guide compares top brands, types (top-load vs front-load), capacities, and features to help you make the right choice.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Washing Machine Guides</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-semibold mb-3">{card.title}</h2>
                <p className="text-gray-700 mb-4">{card.description}</p>
              </div>
              <Link
                href={`/blog/${card.slug}`}
                className="inline-block mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
