import React from "react";

export const Footer = () => {
  return (
    <div className="">
      <div className="mt-20 bg-black py-6 px-5">
       
       <div>
        <h1 className="text-white">HEY....WAIT!</h1>
        <p className="text-white">Subscribe to our newsletters </p>
       </div>
       <div>

<form>
    <div className="flex">
        <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50   border border-gray-300  focus:outline-none " placeholder="Your email address" required />
            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#0055BA]  border border-[#0055BA]  focus:outline-none ">SUBSCRIBE</button>
        </div>
    </div>
</form>

       </div>
      </div>
    </div>
  );
};
