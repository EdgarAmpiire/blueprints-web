import React from 'react'
import {BsArrowRightShort, BsArrowLeftShort} from "react-icons/bs"
// import { Carousel } from "tw-elements"
// import "./Carousel.scss"

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

	const data = [
		{
			id: "1",
			icon: "./assets/mobile.png",
			title: "Web Design",
			desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
			img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
		},
		{
			id: "2",
			icon: "./assets/globe.png",
			title: "Mobile Application",
			desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
		},
		{
			id: "3",
			icon: "./assets/writing.png",
			title: "Branding",
			desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
		},
	];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
            setCurrentSlide(currentSlide<data.length -1 ? currentSlide+1 : 0)
    }
  return (
    <div>
      <div className="flex items-center justify-center relative" id="works">
			<div
				className="slider"
				style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
				{data.map((d) => (
					<div className="container">
						<div className="item">
							<div className="left">
								<div className="leftContainer">
									<div className="imgContainer">
										<img src={d.icon} alt="" />
									</div>
									<h2>{d.title}</h2>
									<p>{d.desc}</p>
									<span>Projects</span>
								</div>
							</div>
							<div className="right">
								<img
									src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
									alt=""
								/>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* <img
				src="assets/arrow.png"
				className="arrow left"
				alt=""
				onClick={() => handleClick("left")}
			/> */}
			{/* <div className='absolute flex item-center justify-center p-3 bg-primary'> */}

			<BsArrowLeftShort className='absolute cursor-pointer text-4xl inset-y-0 left-0  '  onClick={() => handleClick("")} />
			
			<BsArrowRightShort className='absolute cursor-pointer text-4xl inset-y-0 right-0  ' onClick={() => handleClick("left")} />
			{/* <img
				src="assets/arrow.png"
				className="arrow right"
				alt=""
				onClick={() => handleClick("")}
			/> */}
		</div>
    </div>
  )
}


