import React from 'react';
import Header from '@/app/components/header';
import Image from 'next/image';
import Relatedblog from '@/app/components/relatedblog';
import Footer from '@/app/components/footer';

const Description = () => {
  // Dummy data
  const blogData = {
    "_id": "64dfe9dd50d83607285ffa10",
    "image": "https://res.cloudinary.com/djtkzulun/image/upload/v1692395995/A2sv/c6fnsnngdrjrrvxv8xos.jpg",
    "title": "Mastering the Art of Code Refactoring 2",
    "description": "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
    "author": {
      "_id": "64dfe6fb50961c55ce93e7de",
      "name": "Bruk Mekonen",
      "email": "bruk@gmail.com",
      "image": "https://res.cloudinary.com/djtkzulun/image/upload/v1684307248/Portfolio/dgxjqlgpys1imwnw2bhq.png",
      "role": "user"
    },
    "isPending": true,
    "tags": [
      "Programming",
      "Code"
    ],
    "likes": 0,
    "relatedBlogs": [],
    "skills": [
      "Web Development",
      "Mobile"
    ],
    "createdAt": "2023-08-18T21:59:57.206Z",
    "updatedAt": "2023-08-18T21:59:57.206Z",
    "__v": 0
  };

  return (
    <div>
      <Header />

      <div className="container mx-auto px-4">
        {/* Blog Title */}
        <div className="text-center mt-8">
          <p className="text-4xl font-bold text-gray-800">{blogData.title}</p>
        </div>

        {/* Meta Information */}
        <div className="text-center text-gray-500 mt-4">
          <p className="uppercase tracking-wide">programming tech | 6 min read</p>
        </div>

        {/* Main Image */}
        <div className="mt-8 flex justify-center">
          <Image
            src={blogData.image}
            alt='Description Image'
            width={900}
            height={500}
            className='rounded-lg shadow-lg object-cover'
          />
        </div>

        {/* Author Section */}
        <div className="flex items-center justify-center mt-6 space-x-4 mx-auto">
          <div className='w-12 h-12 border border-gray-300 rounded-full overflow-hidden'>
            <Image
              src={blogData.author.image}
              alt='Author'
              width={48}
              height={48}
              className='object-cover'
            />
          </div>
          <div>
            <p className="font-semibold text-gray-700">{blogData.author.name}</p>
            <p className="text-gray-500">{blogData.author.role}</p>
          </div>
        </div>

        {/* Blog Content */}
        <div className="mt-6 text-gray-800 leading-relaxed">
          <p>{blogData.description}</p>
        </div>

        {/* Related Blogs */}
        <div className="mt-12">
          <p className="text-2xl font-bold text-gray-800">Related Blogs</p>
          <div className='flex gap-4'>
            <Relatedblog />
            <Relatedblog />
            <Relatedblog />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Description;
