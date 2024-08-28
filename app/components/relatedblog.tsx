import React from 'react';
import Image from 'next/image';

const Relatedblog = () => {
  // Dummy data
  const blogData = {
    "_id": "64dfe9dd50d83607285ffa10",
    "image": "https://res.cloudinary.com/djtkzulun/image/upload/v1692395995/A2sv/c6fnsnngdrjrrvxv8xos.jpg",
    "title": "Mastering the Art of Code Refactoring 2",
    "author": {
      "_id": "64dfe6fb50961c55ce93e7de",
      "name": "Bruk Mekonen",
      "email": "bruk@gmail.com",
      "image": "https://res.cloudinary.com/djtkzulun/image/upload/v1684307248/Portfolio/dgxjqlgpys1imwnw2bhq.png",
      "role": "user"
    },
    "createdAt": "2023-08-18T21:59:57.206Z",
    "tags": [
      "Programming",
      "Code"
    ],
    "likes": 0
  };

  return (
    <div className="p-4 w-[350px]"> {/* Ensure the component has a defined width */}
      <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        
        {/* Image section */}
        <div className='w-full h-[200px] relative'>
          <Image
            src={blogData.image}
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
            {blogData.title}
          </p>

          {/* Author Info */}
          <div className='flex items-center mb-4'>
            <div className='w-6 h-6 border border-gray-300 rounded-full overflow-hidden mr-2'>
              <Image
                src={blogData.author.image}
                alt='Author'
                width={28}
                height={28}
                className="object-cover"
              />
            </div>
            <p className="text-gray-600 text-sm">
              by <span className="font-semibold">{blogData.author.name}</span> • {new Date(blogData.createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* Tags */}
          <div className="flex space-x-2 mb-4">
            {blogData.tags.map((tag, index) => (
              <button key={index} className="px-4 py-1 bg-gray-100 rounded-full text-[14px] border border-gray-300">
                <p className="text-gray-600">{tag}</p>
              </button>
            ))}
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
              <p className="text-gray-600 text-sm">{blogData.likes} Likes</p>
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
