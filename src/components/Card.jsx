import React from 'react';

const Card = ({ course }) => {
  return (
    <div className='p-4 rounded-lg shadow-custom w-full'>
      <div className='min-h-[423px]'>
        <img src={`http://localhost:1337${course.path.formats.thumbnail.url}`} alt="logo" className='rounded-lg h-[241px] w-full' />
        <h2 className='text-2xl text-black font-semibold leading-100 font-teko mt-3'>{course.title}</h2>
        <p className='font-incon text-[#232323] leading-120 mt-3 text-base font-semibold'>{course.description}</p>
      </div>
    </div>
  );
}

export default Card;