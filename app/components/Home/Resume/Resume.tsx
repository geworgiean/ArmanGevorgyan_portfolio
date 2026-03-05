import React from 'react'
import ResumeCard from './ResumeCard'
import { FaReact } from 'react-icons/fa'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
            {/* WORK PART */}
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                    My Work<span className='text-pink-500'> Experience</span>
                </h1>
                <div className='mt-10'>
                    <ResumeCard Icon={FaReact} role="Front-End Developer" />
                </div>
            </div>
            <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                    My <span className='text-pink-500'> Education</span>
                </h1>
                <div className='mt-10'>
                    <ResumeCard Icon={BiBadge} role="Yerevan State college of Informatics" 
                    date="Sep 2022 - Jun 2025"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume