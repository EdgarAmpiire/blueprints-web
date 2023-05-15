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
		url : "https://images.unsplash.com/photo-1683085809775-d9ac53fcbe21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
	},
	{
		url : "https://images.unsplash.com/photo-1683539808348-f80e4dd0feaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1197&q=80"
	},
	{
		url : "https://images.unsplash.com/photo-1683247367884-36427f44ea39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
	},
	{
		url : "https://images.unsplash.com/photo-1683554426429-d88777a2ce0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
	},
	{
		url : "https://images.unsplash.com/photo-1683464423979-2b2e3f5d61f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
	},
	{
		url : "https://images.unsplash.com/photo-1682174579821-cd31db30a9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
	},
]

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative' >
      <div style={{backgroundImage: `url(${slides[1].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '> </div>
    </div>
  )
}


