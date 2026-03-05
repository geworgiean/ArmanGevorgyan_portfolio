import React from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto flex flex-col'>
        
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-500'>
          Schedule a call with me to see if I can help
        </h1>

        <p className='text-gray-300 mt-6 text-base sm:text-lg'>
          Reach out to me today and let’s discuss how I can help you achieve your goals.
        </p>

        {/* info */}
        <div className='mt-7'>
          <div className='flex items-center space-x-3 mb-4'>
            <BiPhone className='w-9 h-9 text-pink-500' />
            <p className='text-xl font-bold text-pink-500'>
              +374 98 35 55 51
            </p>
          </div>

          <div className='flex items-center space-x-3 mb-4'>
  <BiEnvelope className='w-9 h-9 text-pink-500' />
  <a 
    href="mailto:armangevorgiean@gmail.com" 
    className='text-xl font-bold text-pink-500 hover:underline'
  >
    armangevorgiean@gmail.com
  </a>
</div>

          <div className='flex items-center space-x-3 mb-4'>
            <BiMap className='w-9 h-9 text-pink-500' />
            <p className='text-xl font-bold text-pink-500'>
              Yerevan, Armenia
            </p>
          </div>
        </div>

        {/* linkedin */}
        <div className="flex mt-8">
            <a href="https://www.linkedin.com/in/geworgiean/" target="_blank" rel="noopener noreferrer">
            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer  hover:bg-blue-900 transition-all duration-300 mr-4">
                <FaLinkedin className="text-white w-6 h-6" />
            </div>
            </a>
            <a href="https://github.com/geworgiean" target="_blank" rel="noopener noreferrer">
            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer  hover:bg-blue-900 transition-all duration-300">
                <FaGithub className="text-white w-6 h-6" />
            </div>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Contact