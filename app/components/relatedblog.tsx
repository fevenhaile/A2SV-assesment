import React from 'react';
import Image from 'next/image';

const Relatedblog = () => {
  return (
    <div className="p-4 w-[350px]"> {/* Ensure the component has a defined width */}
      <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        
        {/* Image section */}
        <div className='w-full h-[200px] relative'>
          <Image
            src='/path-to-your-image.jpg' // Replace with the correct image path
            alt='Blog Thumbnail'
            layout='fill'
            objectFit='cover'
            className="rounded-t-lg"
          />
        </div>

        {/* Content section */}
        <div className='p-4'>
          
          {/* Blog Title */}
          <p className="font-montserrat text-[20px] font-medium leading-[30px] text-left mb-2">
            Design Liberalized Exchange Rate Management
          </p>

          {/* Author Info */}
          <div className='flex items-center mb-4'>
            <div className='w-6 h-6 border border-gray-300 rounded-full overflow-hidden mr-2'>
              <Image
                src='/path-to-author-image.jpg' // Replace with the author's image path
                alt='Author'
                width={28}
                height={28}
                className="object-cover"
              />
            </div>
            <p className="text-gray-600 text-sm">by <span className="font-semibold">Fred Boone</span> • Jan 10, 2020</p>
          </div>

          {/* Tags */}
          <div className="flex space-x-2 mb-4">
            <button className="px-4 py-1 bg-gray-100 rounded-full text-[14px] border border-gray-300">
              <p className="text-gray-600">UI/UX</p>
            </button>
            <button className="px-4 py-1 bg-gray-100 rounded-full text-[14px] border border-gray-300">
              <p className="text-gray-600">Development</p>
            </button>
          </div>

          {/* Likes and Read More */}
          <div className="flex justify-between items-center border-t border-gray-200 pt-2 mt-4">
            {/* Likes */}
            <div className="flex items-center space-x-1">
              <Image
                src='/images/likes.png' // Replace with the correct like icon path
                alt='Like'
                width={20}
                height={20}
              />
              <p className="text-gray-600 text-sm">2.3k Likes</p>
            </div>
            
            {/* Read More */}
            <a href='#' className="text-blue-500 text-sm font-semibold">Read More</a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Relatedblog;
