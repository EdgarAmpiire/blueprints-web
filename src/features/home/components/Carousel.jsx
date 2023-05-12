import React from 'react'
// import blue from "../../../assets/blue.png"
import {BsArrowRightShort, BsArrowLeftShort} from "react-icons/bs"

export const Carousel = ({items}) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const previousSlide = () => {
      const newSlide = currentSlide === 0 ? items.length - 1 : currentSlide - 1;
      setCurrentSlide(newSlide);
    };
  
    const nextSlide = () => {
      const newSlide = currentSlide === items.length - 1 ? 0 : currentSlide + 1;
      setCurrentSlide(newSlide);
    };
  return (
    <div>
    <div className="relative">
      <div className="carousel">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <img src={item} alt={`carousel-item-${index}`} />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 p-2 rounded-full bg-gray-500 hover:bg-gray-700 text-white cursor-pointer"
        onClick={previousSlide}
      >
        <BsArrowLeftShort className="h-6 w-6" />
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 p-2 rounded-full bg-gray-500 hover:bg-gray-700 text-white cursor-pointer"
        onClick={nextSlide}
      >
        <BsArrowRightShort className="h-6 w-6" />
      </button>
    </div>
    </div>
  )
}
