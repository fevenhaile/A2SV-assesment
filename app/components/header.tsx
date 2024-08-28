import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="relative w-full h-[60px] border border-none rounded-lg flex items-center justify-between px-4">
      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src="/images/a2sv.png" 
          alt="A2SV Logo" 
          width={167} 
          height={20} 
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <p className=" hover:underline cursor-pointer">Home</p>
        <p className="hover:underline cursor-pointer">Teams</p>
        <p className="hover:underline cursor-pointer">Success Stories</p>
        <p className="hover:underline cursor-pointer">About Us</p>
        <p className="hover:underline cursor-pointer">Blogs</p>
        <p className="hover:underline cursor-pointer">Get Involved</p>
      </div>

      {/* Login and Donate Buttons */}
      <div className="flex items-center gap-4">
        <button className="">Login</button>
        <button className="w-[130px] h-[30px] bg-[#264FAD] text-white gap-0 rounded-tl-[10px] rounded-tr-none rounded-bl-none rounded-br-none">
          Donate
        </button>
      </div>
    </div>
  );
}

export default Header;
