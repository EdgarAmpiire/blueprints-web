import React from 'react'
import {BsArrowRightShort, BsArrowLeftShort} from "react-icons/bs"
import blue from "../../../assets/blue.png"

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
    <div >
      <div className="flex items-center justify-center relative" id="works">
			<div
				className="h-fit flex absolute l-0 transition delay-150 duration-100  ease-out"
				style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
				{/* {data.map((d) => (
					<div className="w-full bg-primary flex items-center justify-center">
						<div className="w-[700px] h-full rouned-md flex items-center justify-center bg-primary">
							 <div className="flex-4 h-10/12 flex items-center justify-center ">
								<div className="w-11/12 h-10/12 flex flex-col justify-between">
									<div className="w-32 h-32 rounded-full bg-blue-200 flex items-center justify-center ">
										<img src={d.icon} alt="" />
									</div>
									<h2>{d.title}</h2>
									<p>{d.desc}</p>
									<span>Projects</span>
								</div>
							</div> 
							 <div className=" h-full flex items-center justify-center overflow-hidden">
								<img
									src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
									alt=""
									className='w-[400px]'
								/>
							</div> 
						</div>
					</div>
				))} */}
				
			</div>

			
			<BsArrowLeftShort className='absolute cursor-pointer text-4xl inset-y-0 left-0  '  onClick={() => handleClick("")} />
			
			<BsArrowRightShort className='absolute cursor-pointer text-4xl inset-y-0 right-0  ' onClick={() => handleClick("left")} />
			
		</div>
    </div>
  )
}


