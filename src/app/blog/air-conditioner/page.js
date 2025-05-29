"use client";
import Link from "next/link";

export default function AirConditionerCards() {
  const cards = [
    {
      title: "How to Service Your AC at Home",
      slug: "ac-service-at-home",
      image: "https://www.skservicesvadodara.in/wp-content/uploads/2022/03/ac-repair-1.png",
      description:
        "Learn how to clean and maintain your air conditioner at home. This step-by-step guide helps you avoid costly repairs and improve your AC's efficiency all summer long.",
    },
    {
      title: "Top 5 Signs Your AC Needs Repair",
      slug: "signs-ac-needs-repair",
      image: "https://chillsairconditioning.com/wp-content/uploads/2024/06/5-Signs-Your-AC-Needs-Repair-A-Comprehensive-Guide-for-Home-and-Business-Owners-1.jpg",
      description:
        "Is your AC making noise or not cooling enough? Discover the most common signs that your air conditioner needs immediate attention from a technician.",
    },
    {
      title: "Best Energy-Efficient Air Conditioners 2025",
      slug: "energy-efficient-ac-2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXIrZX3hptHkN3Oah21pvCiZvg9Dum4TFyvQ&s",
      description:
        "Explore top-rated energy-efficient ACs for 2025. We compare models, power usage, features, and give recommendations for different budgets and room sizes.",
    },
    {
      title: "Why Regular AC Maintenance Matters",
      slug: "importance-of-ac-maintenance",
      image: "https://ctairtemp.com/wp-content/uploads/2025/02/iStock-157427739.jpg",
      description:
        "Neglecting AC maintenance can reduce performance and lifespan. Understand the benefits of scheduling seasonal checkups and how it saves you money long-term.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Air Conditioner Guides</h1>
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
