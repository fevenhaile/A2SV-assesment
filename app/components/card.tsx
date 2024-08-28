'use client';

import React from 'react';
import Image from 'next/image';

const Card = () => {
  // Example blog data
  const blogData = {
    "_id": "64dfe77d50961c55ce93e7e0",
    "image": "https://res.cloudinary.com/djtkzulun/image/upload/v1692395388/A2sv/vmjzxwgp3mdvtwn2tlrw.jpg",
    "title": "Mastering the Art of Code Refactoring",
    "description": "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
    "author": null,
    "isPending": true,
    "tags": [
      "Programming",
      "Code"
    ],
    "likes": 0,
    "relatedBlogs": [],
    "skills": [],
    "createdAt": "2023-08-18T21:49:49.752Z",
    "updatedAt": "2023-08-18T21:49:49.752Z",
    "__v": 0
  };

  return (
    <div className="w-[900px] h-[270px] border border-none rounded-lg p-4">
      <div className="flex h-full">
        {/* The left side */}
        <div className="w-[65%] h-full flex flex-col justify-between">
          {/* First section - Profile */}
          <div className="flex mb-2">
            <div className="w-14 h-14 border border-red-400 bg-black rounded-full overflow-hidden mr-4">
              <Image
                src={blogData.author?.image || '/default-profile.png'} // Use a default image if author image is missing
                alt={blogData.author?.name || 'Author'}
                width={56}
                height={56}
                className="object-cover"
              />
            </div>

            <div>
              <p className="font-montserrat text-[16.43px] font-semibold leading-[24.43px] text-left">
                {blogData.author?.name || 'Anonymous'}
              </p>
              <p className="text-[16px] text-gray-500">
                Software Engineer • {new Date(blogData.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Second section - Titles */}
          <div className="mb-1">
            <p className="font-montserrat text-[22.21px] font-[800] leading-[34.21px] text-left">
              {blogData.title}
            </p>
          </div>

          {/* Third section - Description */}
          <div className="font-montserrat text-[14.43px] font-light leading-[20px] text-left text-gray-700 mb-4">
            {blogData.description}
          </div>

          {/* Fourth section - Buttons */}
          <div className="flex items-center space-x-2">
            {blogData.tags.map((tag, index) => (
              <button
                key={index}
                className="px-4 py-1 bg-gray-100 rounded-full text-[14px] border border-gray-300"
              >
                <p className="text-gray-400">{tag}</p>
              </button>
            ))}
          </div>
        </div>

        {/* The right side with the image */}
        <div className="w-[35%] flex justify-end items-center">
          <Image
            src={blogData.image}
            alt={blogData.title}
            width={150}
            height={150}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
