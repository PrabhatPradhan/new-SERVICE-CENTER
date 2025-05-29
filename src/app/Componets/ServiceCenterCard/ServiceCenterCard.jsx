'use client';
import { useEffect, useState } from 'react';

export default function ServiceCenterCard() {
  const [isVisible, setIsVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Start animation after it's visible
      setTimeout(() => setAnimateIn(true), 50);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setAnimateIn(false);
      setTimeout(() => setIsVisible(false), 300); // Let exit animation finish
    }, 2000);
  };

  const handleClose = () => {
    setAnimateIn(false);
    setTimeout(() => setIsVisible(false), 300); // Exit animation delay
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Modal Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
        <div
          className={`bg-orange-500 w-full max-w-md max-h-[90vh] overflow-y-auto p-6 text-black rounded-xl shadow-lg relative 
          transition-all duration-500 ease-out transform ${
            animateIn
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-4'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-3 text-xl font-bold"
          >
            ×
          </button>

          {/* Title */}
          <h2 className="text-center text-white text-2xl font-bold mb-4">
            SERVICE CENTER
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex gap-2 flex-col sm:flex-row">
              <input
                type="text"
                required
                placeholder="Full Name*"
                className="sm:w-1/2 w-full p-2 rounded bg-white"
              />
              <input
                type="text"
                required
                placeholder="Mobile Number*"
                className="sm:w-1/2 w-full p-2 rounded bg-white"
              />
            </div>

            <input
              type="email"
              placeholder="Email ID"
              className="w-full p-2 rounded bg-white"
            />

            <input
              type="text"
              required
              placeholder="Full Address*"
              className="w-full p-2 rounded bg-white"
            />

            <select
              required
              className="w-full p-2 rounded bg-white text-black"
            >
              <option value="">Choose Your Appliance</option>
              <option>TV</option>
              <option>Refrigerator</option>
              <option>Washing Machine</option>
            </select>

            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-2 rounded hover:bg-gray-200"
            >
              SUBMIT
            </button>
          </form>

          <p className="text-center text-white mt-4 font-bold">Call Now : 18001201514</p>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 transition-opacity duration-500">
          Your form is submitted
        </div>
      )}
    </>
  );
}
