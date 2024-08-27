import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      {/* The main containing the footer */}
      <div className="w-full h-[400px] mt-4 p-4 border border-amber-600 rounded-lg">
        {/* For the inner box */}
        <div className="m-4 gap-0 border w-[1200px] h-[350px] border-green-500 rounded-lg flex flex-col">
          {/* The above ones */}
          <div className="flex flex-grow">
            {/* The image */}
            <div className="w-[15%]">
              <Image
                src="/images/rafiki.png"
                alt="External Image"
                width={296}
                height={221}
              />
            </div>

            <div className="mt-4 w-[20%] space-y-14">
              <div>
                <p className="w-[170px] h-[40px] font-montserrat text-[16px] font-[600] leading-[26.82px]">
                  Get involved in improving tech education in Africa!
                </p>
              </div>
              <div>
                <button className="w-[130px] h-[30px] bg-[#264FAD] text-white gap-0 rounded-tl-[10px] rounded-tr-none rounded-bl-none rounded-br-none">
                  Support us
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="w-[15%]">
              <p className="font-montserrat text-[16px] font-[600] leading-[26.82px] text-left">
                Links
              </p>
              <div className="flex flex-col">
                <p className="font-montserrat text-[16px] font-[200] leading-[26.82px] text-left">
                  Home
                </p>
                <p className="font-montserrat text-[16px] font-[200] leading-[26.82px] text-left">
                  Success Stories
                </p>
                <p className="font-montserrat text-[16px] font-[200] leading-[26.82px] text-left">
                  About us
                </p>
                <p className="font-montserrat text-[16px] font-[200] leading-[26.82px] text-left">
                  Get involved
                </p>
              </div>
            </div>

            {/* Teams */}
            <div className="w-[15%]">
              <p className="font-montserrat text-[16px] font-[600] leading-[26.82px] text-left">
                Teams
              </p>
              <div className="flex flex-col">
                <p className="font-montserrat text-[16px] font-[200] leading-[26.82px] text-left">
                  Board Memeber
                </p>
                <p className="font-montserrat text-[16px] font-[200] leading-[26.82px] text-left">
                  Advisor/Mentors
                </p>
                <p className="font-montserrat text-[16px] font-[200] leading-[26.82px] text-left">
                  Executives
                </p>
                <p className="font-montserrat text-[16px] font-[200] leading-[26.82px] text-left">
                  Staffs
                </p>
              </div>
            </div>

            {/* Blogs */}
            <div className="w-[15%]">
              <p className="font-montserrat text-[16px] font-[600] leading-[26.82px] text-left">
                Blogs
              </p>
              <div className="flex flex-col">
                <p className="font-montserrat text-[16px] font-[200] leading-[26.82px] text-left">
                  Recent Blogs
                </p>
                <p className="font-montserrat text-[16px] font-[200] leading-[26.82px] text-left">
                  New Blog
                </p>
                {/* <p className="font-montserrat text-[16px] font-[200] leading-[26.82px] text-left">
                  About us
                </p>
                <p className="font-montserrat text-[16px] font-[200] leading-[26.82px] text-left">
                  Get involved
                </p> */}
              </div>
            </div>
          </div>

          {/* The icons */}
          <div className="flex items-end justify-between mt-auto p-4">
            <Image
              src="/images/copyright.png"
              alt="External Image"
              width={15}
              height={15}
            />
            <p className="text-xs">
              2020 Africa to Silicon Valley, Inc. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Image
                src="/images/twitter (1).png"
                alt="Twitter"
                width={25}
                height={25}
              />
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                width={25}
                height={25}
              />
              <Image
                src="/images/youtube.png"
                alt="YouTube"
                width={25}
                height={25}
              />
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                width={25}
                height={25}
              />
              <Image
                src="/images/ig.png"
                alt="Instagram"
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
