import React from 'react'
// import bg from "../../../assets/bg.png"

export const Hero = () => {
  return (
    <div className="container mx-auto">
			<div className="md:min-h-screen">
				<div
					className="hero h-100 bg-container bg-center bg-blend-overlay bg-primaryColor"
					style={{ backgroundImage: `url(/images/bg.png)` }}>
					<div className="heading-container absolute flex flex-col justify-center items-center w-full">
						<h1 className="font-bold text-3xl text-black ">How can we help?</h1>
						<p className="text-lg text-black mt-5">
							Use specific terms for the most relevant results
						</p> 
						
					</div>
				</div>
</div>
</div>
  )
}
