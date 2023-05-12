 import React from 'react'
import { Carousel } from './Carousel'
 
 export const HomeBlog = () => {
  const images = [
    "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(16).jpg",
    "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(17).jpg",
    "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(18).jpg",
    "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(19).jpg",
    "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(20).jpg",
    "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(21).jpg",
    "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg",
  ];

   return (
     <div>
        <div className="mt-24 w-full">
        <div className="w-full flex justify-start ">
          <div className="px-6 py-1 bg-primary"></div>
        </div>
        <div className="w-8/12 flex flex-col justify-start mt-4 ">
          <h1 className="text-3xl w-9/12 font-semibold">People, Process and Technology are always in motion.</h1>
          <p className='mt-5 text-lg text-gray-500 '>Ultimately, these three interdependent elements are a key strategic component for digital operations to reach consistent efficiency, automated scaling, and achieve goals and outcomes</p>
        </div>
        </div>
        <Carousel images={images} />
     </div>
   )
 }
 