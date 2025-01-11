import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Card from './Card';

export default function TopRest() {
  const [slide, setSlide] = useState(0); // Starting slide position at 0
  const [categories, setCategories] = useState([]); // State for categories

  // Fetch categories from API
  const fetchCategory = async () => {
    try {
      const response = await fetch("http://localhost:5000/top-restaurant-chains");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const nextSlide = () => {
    if (slide + 4 < categories.length) {
      setSlide(slide + 1); 
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  return (
    <>
      <div className="max-w-[1200px] mx-auto items-center">
        <div className="flex justify-between">
          <div className="p-6 ml-4 font-bold text-2xl font-serif">Top Restaurants!!</div>
          <div className="flex items-center">
            <div
              className="flex items-center justify-center w-[30px] h-[30px] bg-slate-100 rounded-full mx-2 cursor-pointer"
              onClick={prevSlide}
            >
              <FaArrowLeft />
            </div>
            <div
              className="flex items-center justify-center w-[30px] h-[30px] bg-slate-300 rounded-full mx-2 cursor-pointer"
              onClick={nextSlide}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* Card Slider Section */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${(slide * 100)}%)` }} // Adjust for 1 item per slide
          >
            {categories.map((cat, index) => (
              <div key={index} className="w-full flex justify-center">
                {/* Card Section Only */}
                <div className="flex p-8 flex-wrap gap-4 justify-center">
                  <Card key={index} image={cat.image} offer={cat.offer} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
