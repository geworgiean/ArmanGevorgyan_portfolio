import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const Project = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5cl font-bold text-white'>
            A small selection of recent <br /><span className='text-pink-500'>projects</span>
        </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
            <div>
                <Image 
                src="/images/p1.png" 
                alt="img" 
                width={800} 
                height={650} 
                className="rounded-lg" 
                />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                    My old Portfolio
                </h1>
                <h1 className='pt-2 font-medium text-white/80 flex space-x-4'>
                    <Link href="https://armangevorgyan.netlify.app/" target="_blank" className="text-pink-500">
                    View Project
                    </Link>
                    <Link href="https://github.com/geworgiean/portfolio" target="_blank" className="text-pink-500">
                    View Code
                    </Link>
                    
                </h1>
            </div>
            <div>
                <Image 
                src="/images/p2.png" 
                alt="img" 
                width={800} 
                height={650} 
                className="rounded-lg" 
                />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                    Restaurant GERICHT APP
                </h1>
                <h1 className='pt-2 font-medium text-white/80 flex space-x-4'>
                    <Link href="https://resturantuiux.netlify.app/" target="_blank" className="text-pink-500">
                    View Project
                    </Link>
                    <Link href="https://github.com/geworgiean/Restaurant_UI_and_UX" target="_blank" className="text-pink-500">
                    View Code
                    </Link>
                    
                </h1>
            </div>
            <div>
                <Image 
                src="/images/p3.png" 
                alt="img" 
                width={800} 
                height={650} 
                className="rounded-lg" 
                />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                    Artificial Intelligence APP
                </h1>
                <h1 className='pt-2 font-medium text-white/80 flex space-x-4'>
                    <Link href="https://modernnui.netlify.app/" target="_blank" className="text-pink-500">
                    View Project
                    </Link>
                    <Link href="https://github.com/geworgiean/AI_website_UI-UX" target="_blank" className="text-pink-500">
                    View Code
                    </Link>
                    
                </h1>
            </div>
            <div>
                <Image 
                src="/images/p4.png" 
                alt="img" 
                width={800} 
                height={650} 
                className="rounded-lg" 
                />
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                    Real Estate APP
                </h1>
                <h1 className='pt-2 font-medium text-white/80 flex space-x-4'>
                    <Link href="https://realestateeapp.netlify.app/" target="_blank" className="text-pink-500">
                    View Project
                    </Link>
                    <Link href="https://github.com/geworgiean/portfolio" target="_blank" className="text-pink-500">
                    View Code
                    </Link>
                    
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Project