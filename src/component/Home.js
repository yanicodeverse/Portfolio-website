import React from 'react'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-blue-900'>


            <div className='  max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row'>


                <div className='flex justify-center items-start h-full flex-col'>


                    <h2 className='text-4xl sm:text-7xl text-white font-signature mb-2  font-semibold'>Parinay Pandey</h2>

                    <h3 className='text-3xl sm:text-5xl text-stone-400 font-signature py-6'>Front-end <span className='text-red-700'>Dev</span>eloper</h3>

                    <p className='font-second text-stone-300 leading-8 py-8'>I Code to Replicate my Imagination into Reality. Currently, I love to work on web applications using technologies like ReactJs and Tailwind CSS.</p>

                    <div>
                        <Link to='portfolio' smooth duration={500} className='text-stone-300 font-signature w-fit px-6 py-4 flex items-center rounded-md bg-gradient-to-r from-blue-900 to-purple-900 hover:scale-105 duration-200 hover:text-white hover:bg-gradient-to-r hover:from-blue-900 hover:via-black hover:to-purple-900 cursor-pointer'>
                            Portfolio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
