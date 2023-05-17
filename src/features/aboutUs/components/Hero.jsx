import React from 'react'

export const Hero = () => {
  return (
    <di className="">
        <div class="w-full bg-cover bg-center object-cover" style={{height: "32rem", backgroundImage: `url(/images/bg.png)`}}>
        <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
                <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">Build Your new <span class="underline text-blue-400">Saas</span></h1>
                <button class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
            </div>
        </div>
    </div>
    </di>
  )
}
