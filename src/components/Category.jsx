import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Category() {
  const nextSlide = () => {
    if(slide + 7 >categories.length){ return false;}
    setSlide(slide + 3);  // Move forward by 3 items
    
  };

  const prevSlide = () => {
    setSlide(slide - 3);  // Move backward by 3 items
  };

  const [slide, setSlide] = useState(0);  // Starting slide position at 0 (or adjust as needed)

  const [categories, setCategory] = useState([]);

  const fetchCategory = async () => {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setCategory(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div>
      <div className='max-w-[1200px] mx-auto items-center'>
        <div className='flex justify-between'>
          <div className='p-2 ml-4 font-bold text-2xl'>What's for today ?</div>
          <div className='flex items-center'>
            <div
              className='flex items-center justify-center w-[30px] h-[30px] bg-slate-100 rounded-full mx-2'
              onClick={prevSlide}
            >
              <FaArrowLeft />
            </div>
            <div
              className='flex items-center justify-center w-[30px] h-[30px] bg-slate-300 rounded-full mx-2'
              onClick={nextSlide}
            >
              <FaArrowRight />
            </div>
            <div className='w-[30px]'></div>
          </div>
        </div>
      </div>

      <div className="flex border border-red-580 overflow-hidden">
        {
          categories.map((cat, index) => (
            <div
              key={index}
              style={{ transform: `translateX(-${slide * 100}%)` }}  // Fixing the style interpolation
              className='ml-6 w-[140px] flex-grow shrink-0 duration-500'
            >
              <img src={"http://localhost:5000/images/" + cat.image} alt={cat.name} />
            </div>
          ))
        }
      </div>
    </div>
  );
}
