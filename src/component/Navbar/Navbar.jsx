import React, { useState } from "react";
import logo from "../../assets/logo.png";
import {AiOutlineBars} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'


const Navbar = () => {
  const[show, setShow] = useState(false)
  const handleClick = () =>{
   setShow(!show)
  }
  
  
  return (
    <>
      <div className="bg-primary py-[27px]">
        <div className="max-w-container mx-auto">
          <div className="flex items-center justify-between">
            <div className="w-1/5">
              <img src={logo} alt="" />
            </div>
            <div className="flex">
            <div onClick={handleClick} className='md:hidden'>
              {
                show == true ? <RxCross2/> : <AiOutlineBars/>
              }
              {/* <p>bar</p> */}
            </div>
            
            
            
            <div className="w-4/5">
                <ul className={`md:flex gap-x-[47px] md:static w-[100%] absolute bg-green-500 top-[-18px] left-0 ${show ? 'top-0' : 'top-[-18px]'}`}>
                
                <li><a href="" className="font-poppins font-semibold text-base text-white">Home</a></li>
                <li><a href="" className="font-poppins font-semibold text-base text-white">About</a></li>
                <li><a href="" className="font-poppins font-semibold text-base text-white">Services</a></li>
                <li><a href="" className="font-poppins font-semibold text-base text-white">Gallery</a></li>
                <li><a href="" className="font-poppins font-semibold text-base text-white">Blog</a></li>
                <li><a href="" className="font-poppins font-semibold text-base text-white border-2">CONTACT</a></li>
              </ul>
            </div>
            </div>
          </div>
        </div>
        </div>
        
    
    </>
  );
};

export default Navbar;
