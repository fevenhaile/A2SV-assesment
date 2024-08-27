import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Card from '../components/card';

const Blogs = () => {
  return (
    <div>
      <div className='h-[4%] w-full'>
        <Header />
      </div>

      <div className='w-full border border-green-400 py-4 px-8'>
        <div className='flex items-center justify-between'>
          {/* Blogs title */}
          <p className='text-[24px] font-bold'>Blogs</p>

          {/* Search bar */}
          <div className='flex items-center space-x-2'>
            <input
              type='text'
              placeholder='Search...'
              className='border rounded-full px-4 py-2 text-[16px]'
            />
            <button className="w-[130px] h-[30px] bg-[#264FAD] text-white rounded-full">
              + New Blog
            </button>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center h-[58%] w-full'>
        <Card />
        <Card />
        <Card />
      </div>

      <div className='h-[22%] w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
