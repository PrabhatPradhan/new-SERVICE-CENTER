'use client';
import { useEffect, useState } from 'react';
import { FaCheckCircle, FaSmile, FaTrophy } from 'react-icons/fa';

export default function StatsOfNumbers() {
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [awardCount, setAwardCount] = useState(0);

  useEffect(() => {
    const animateValue = (setFn, end, duration = 1500) => {
      let start = 0;
      const increment = end / (duration / 30);

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          setFn(end);
          clearInterval(interval);
        } else {
          setFn(Math.floor(start));
        }
      }, 30);
    };

    animateValue(setProjectCount, 17000);
    animateValue(setClientCount, 49);
    animateValue(setAwardCount, 2000);
  }, []);

  return (
    <div className="overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center mt-20 border-t border-gray-200 pt-16 bg-white">
      <div className="transition-transform duration-500 hover:scale-105">
        <div className="flex items-center justify-center gap-3 text-5xl md:text-6xl font-extrabold text-gray-900 animate-bounce">
          <FaCheckCircle className="text-red-500 text-4xl" />
          {projectCount.toLocaleString()}
        </div>
        <p className="text-sm text-red-600 mt-2 font-medium">
          Completed Project
        </p>
      </div>

      <div className="transition-transform duration-500 hover:scale-105">
        <div className="flex items-center justify-center gap-3 text-5xl md:text-6xl font-extrabold text-gray-900 animate-pulse">
          <FaSmile className="text-red-500 text-4xl" />
          {clientCount}+
        </div>
        <p className="text-sm text-red-600 mt-2 font-medium">Satisfied Clients</p>
      </div>

      <div className="transition-transform duration-500 hover:scale-105">
        <div className="flex items-center justify-center gap-3 text-5xl md:text-6xl font-extrabold text-gray-900 animate-bounce">
          <FaTrophy className="text-red-500 text-4xl" />
          {awardCount.toLocaleString()}
        </div>
        <p className="text-sm text-red-600 mt-2 font-medium">Awards Winner</p>
      </div>
    </div>
  );
}
