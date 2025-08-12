import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
      <footer className="w-full text-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-16 pb-6 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-4">
                    <img alt="" className="h-11"
                        src={assets.logo} />
                </div>
                <p className="text-center text-md max-w-xl text-slate-700 font-normal leading-relaxed">
                    Empowering creators worldwide with the most advanced AI content creation tools. Transform your ideas
                    into reality.
                </p>
            </div>
            <div className="border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-5 text-center text-md font-normal">
                    Quick AI ©2025. All rights reserved.
                </div>
            </div>
        </footer>
  )
}

export default Footer