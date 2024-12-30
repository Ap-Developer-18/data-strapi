import React from 'react'
import Card from './Card';

const data = await fetch("http://localhost:1337/api/blogs?populate=*");
const response = await data.json();

const Cards = () => {
  return (
    <div className='container'>
      <div className='flex items-start flex-wrap gap-6 justify-center'>
        {response.data && response.data.map((course) => (
          <div className='max-w-[394px] min-h-[437px]'>
            <Card key={course.id} course={course} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards