import React from 'react'
// import {BsArrowRightShort, BsArrowLeftShort} from "react-icons/bs"
import blue from "../../../assets/blue.png"

export const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = React.useState(0);
//   const [currentSlide, setCurrentSlide] = React.useState(0);


	// const data = [
	// 	{
	// 		id: "1",
	// 		icon: "./assets/mobile.png",
	// 		title: "Web Design",
	// 		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
	// 		img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
	// 	},
	// 	{
	// 		id: "2",
	// 		icon: "./assets/globe.png",
	// 		title: "Mobile Application",
	// 		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
	// 		img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
	// 	},
	// 	{
	// 		id: "3",
	// 		icon: "./assets/writing.png",
	// 		title: "Branding",
	// 		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
	// 		img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
	// 	},
	// ];

	const slides = [
		{
			url: blue
		},
		{
		url : "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
	},
	{
		url : "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(16).webp"
	},
	{
		url : "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(17).webp"
	},
	{
		url : "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(18).webp"
	},
	{
		url : "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
	},
	{
		url : "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(20).webp"
	},
]

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative' >
      <div style={{backgroundImage: `url(${slides[1].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '> </div>
    </div>
  )
}


