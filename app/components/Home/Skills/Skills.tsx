'use client';
import React from 'react'
import { SiFigma, SiGithub, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'

const skills = [
    {
        name: "JavaScript",
        icon: <SiJavascript/>,
    },
    {
        name: "React JS",
        icon: <SiReact/>,
    },
    {
        name: "Next JS",
        icon: <SiNextdotjs/>,
    
    },
    {
        name: "GitHub",
        icon: <SiGithub/>,
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss/>,
    },
    {
        name: "Figma",
        icon: <SiFigma/>,
    }
]


const Skills = () => {
  return (
    <div className='text-white pt-16 pb-16'>
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
            My <span className='text-pink-500'>Skills</span>
        </h1>
        <div className='flex flex-wrap justify-center gap-6 mt-16'>
            {skills.map((skil) => {
                return <Tilt key={skil.name} scale={1.5} transitionSpeed={400}>
                            <div className="bg-[#14134145] w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
                                <div className="text-5xl mb-4 text-gray-300">
                                    {skil.icon}
                                </div>
                                <p className="text-pink-500 font-medium">
                                    {skil.name}
                                </p>
                            </div>
                    </Tilt>
            })}
        </div>
    </div>
  )
}

export default Skills