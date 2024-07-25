import React, { useState, useEffect } from "react";

const carouselItems = [
  "src/assets/First.png",
  "src/assets/Second.png",
  "src/assets/Three.png",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <main className="flex flex-col items-center justify-center gap-3 h-[89vh] px-3">
      {/* Carousel */}
      <div className="max-w-96 max- mx-auto overflow-hidden rounded-lg mb-3">
        <img
          src={carouselItems[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full "
        />
        {/* Navigation Dots */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div> */}
      </div>
      {/* texts */}
      <div className=" text-center ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
          Connect and Collaborate
        </h1>
        <p className="text-gray-600 text-sm md:text-md lg:text-lg">
          Professional Online Meeting Platform
        </p>
      </div>
      {/* buttons */}
      <div className="flex items-center justify-between mt-3 flex-col md:flex-row">
        <button className="border border-blue-700 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-3 rounded flex items-center gap-2">
          <svg
            className="w-6 h-6 inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          New Meeting
        </button>
        <div className="flex items-center gap-2 font-bold py-3 px-3 rounded ">
          {/* <svg
            className="w-6 h-6 inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg> */}
          <input
            type="text"
            placeholder="Enter a code or link"
            className="border border-slate-400 px-3 py-3 rounded"
          />

          <button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-3 rounded">
            Join
          </button>
        </div>
      </div>
    </main>
  );
}
