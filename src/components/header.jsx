import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdOutlineLogin } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  const[toggle, setToggle] =useState(false);
  const showSideMenu =()=>{
    console.log('clicked');
    setToggle(true);
  }
  return (
    <>
    <div className='black-overlay w-full h-full fixed duration-500' style={{
      opacity: toggle? 1:0,
      visibility: toggle ?"visible":"hidden"}}> 
    </div>
    <div className="w-[500px] bg-white h-full absolute" style={{
      left:toggle? '0%':'-100%'
    }}></div>
    {/* for creating the header file */}
    <header className = "p-[8px] shadow-xl">
      {/* shadow is created  */}
        <div className='max-w-[1200px] mx-auto flex items-center'>
      
              <div className='w-[100px]'>
                <img src ="images/logo_foodie.png" className='w-full' alt=''></img>
                </div>
                <div className='p-[10px]'>
                  <span className='font-bold border-b-[3px] inline'>Palaj, </span>
                   Gujarat, India <RxCaretDown className='inline cursor-pointer' onClick={showSideMenu}/>
                </div>
                <div className=''></div>
                <nav className='flex items-center list-none gap-5 ml-auto p-[6px] font-semibold text-[18px]'>
                  {/* ml --> margin left  flex--> used for putting in one line and adjust as per the window size*/}
                  <li className='flex items-center gap-1'>
                    <IoSearch />
                    Search
                  </li>
                  <li className="flex items-center gap-1">
                  <RiDiscountPercentLine />
                    Offers
                  </li>
                  <li className="flex items-center gap-1">
                  <IoMdHelpCircleOutline />
                    Help
                  </li>
                  <li className="flex items-center gap-1">
                    <MdOutlineLogin />
                    Sign In
                  </li>
                  <li className="flex items-center gap-1">
                  <AiOutlineShoppingCart />
                    Cart
                  </li>
                </nav>
              </div>
              
    </header>
    </>
    
  )
}
