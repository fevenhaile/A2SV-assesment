import React from 'react';
import Header from '@/app/components/header';
import Image from 'next/image';
import Relatedblog from '@/app/components/relatedblog';
import Footer from '@/app/components/footer';

const Description = () => {
  return (
    <div>
      <Header />

      <div className="container mx-auto px-4">
        {/* Blog Title */}
        <div className="text-center mt-8">
          <p className="text-4xl font-bold text-gray-800">The essential guide to Competitive Programming</p>
        </div>

        {/* Meta Information */}
        <div className="text-center text-gray-500 mt-4">
          <p className="uppercase tracking-wide">programming tech | 6 min read</p>
        </div>

        {/* Main Image */}
        <div className="mt-8 flex justify-center">
          <Image
            src='/path-to-image.jpg' // Replace with the correct path
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
            src='/path-to-author-image.jpg' // Replace with the author's image path
            alt='Author'
            width={48}
            height={48}
            className='object-cover'
            />
        </div>
        <div>
            <p className="font-semibold text-gray-700">Chaltu Kebede</p>
            <p className="text-gray-500">Software Engineer</p>
        </div>
        </div>


        {/* Blog Content */}
        <div className="mt-6 text-gray-800 leading-relaxed">
          <p>We know that data structure and algorithm can seem hard at first glance. And you may not be familiar with advanced algorithms, but there are simple steps you can follow to see outstanding results in a short period of time.</p>
          {/* Add more paragraphs as needed */}
        </div>

        {/* Related Blogs */}
        <div className="mt-12">
          <p className="text-2xl font-bold text-gray-800">Related Blogs</p>
          <div className='flex gap-4  '>
            <Relatedblog/>
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
