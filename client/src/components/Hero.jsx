import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {
    const navigate = useNavigate()
  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>
        <div className='text-center mb-6'>
            <h1 className='text-3xl sm:text-5xl text-gray-800 md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]'>Create amazing content <br/> <span className='text-primary'> with AI tools </span> </h1>
            <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600'>Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow.</p>
        </div>
        
        <div className='flex flex-wrap justify-center gap-4 text-md max-sm:text-xs'>
            <button onClick={()=> navigate('/ai')} className='bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer'>Start creating now</button>
        </div>
        
    </div>
  )
}

export default Hero