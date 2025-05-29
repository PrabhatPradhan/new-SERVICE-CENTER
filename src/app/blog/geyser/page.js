"use client";
import Link from "next/link";

export default function CardsPage() {
  const cards = [
    {
      title: "Refrigerator Repair Guide",
      slug: "refrigerator-repair-guide",
      image: "https://starappliancerepaircc.com/wp-content/uploads/2024/03/The-Essential-Guide-to-Appliance-Repair-Troubleshooting-Maintenance-and-Hiring-Professionals.jpg",
      description:
        "A comprehensive guide to diagnosing and fixing common issues with household refrigerators. From faulty thermostats to broken door seals, this guide covers all the basics you need to get your fridge running efficiently again.",
    },
    {
      title: "Air Conditioner Maintenance Tips",
      slug: "air-conditioner-maintenance-tips",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.asap-appliance-repair.com/wp-content/uploads/2019/06/DIshwasher.jpg",
      description:
        "Keep your AC running like new with our expert maintenance tips. Learn how to clean filters, check refrigerant levels, and avoid common issues that reduce performance and raise electricity bills.",
    },
    {
      title: "Washing Machine Troubleshooting",
      slug: "washing-machine-troubleshooting",
      image: "https://img.freepik.com/premium-photo/young-handsome-repairman-worker-suit-with-professional-tools-box-is-fixing-washing-machine-bathroom_283617-2848.jpg?w=360",
      description:
        "Understand why your washing machine won’t start, spin, or drain. This guide provides step-by-step fixes for common washer issues and helps you decide when it's time to call a professional.",
    },
    {
      title: "Microwave Oven Safety Practices",
      slug: "microwave-oven-safety-practices",
      image: "https://www.liljegrenlaw.com/wp-content/uploads/2019/07/llg-jul-microwave.jpg",
      description:
        "Avoid microwave hazards with our safety checklist. We explain the do's and don'ts of microwave use and share tips to extend its lifespan and avoid unnecessary repairs.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Our Repair Guides</h1>
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
                 href=''
                className="inline-block mt-auto bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
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
