import React from 'react'
import mainfirst from '../assets/mainfirst.jpg'
import mainsec from '../assets/mainsec.jpg'
import mainthird from '../assets/mainthird.jpg'

const Portfolio = () => {

    const portfolioarr = [
        {
            id: 1,
            image: mainfirst,
            code: 'https://github.com/yanicodeverse/Chrome-dino',
            demo: 'https://github.com/yanicodeverse/Chrome-dino/'
        },

        {
            id: 2,
            image: mainsec,
            code: 'https://github.com/yanicodeverse/sticky-space-react',
            demo: 'https://stickyspace.netlify.app'
        },

        {
            id: 3,
            image: mainthird,
            code: 'https://github.com/yanicodeverse/piano',
            demo: 'https://yanicodeverse.github.io/piano/'
        }
    ]

    return (
        <div name='portfolio' className='w-full md:h-screen bg-gradient-to-b from-black via-black to-blue-900 text-white'>

            <div className='max-w-screen-lg p-5 mx-auto h-full w-full flex flex-col justify-center'>

                <div className='pb-8 '>

                    <p className='font-signature text-5xl font-semibold  '>
                        <span className='text-red-700'>P</span>ortfolio
                    </p>

                    <p className='py-6 capitalize font-second text-4xl'>
                        check out my <span className='text-red-700'>w</span><span>ork</span>
                    </p>

                </div>


                <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8  px-12 sm:px-0'>

                    {portfolioarr.map(({ id, image, code, demo }) => {
                        return (

                            <div key={id} className='shadow-md shadow-blue-900 hover:shadow-red-700 rounded-lg duration-200 hover:scale-105'>

                                <img src={image} alt="" className='rounded-md ' />
                                <div className='flex justify-center items-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-stone-400 hover:text-white font-signature font-light cursor-pointer after:content[``] after:absolute after:bg-cyan-500 after:h-[3px] after:w-[0%] after:duration-200 after:left-8 after:bottom-[1px] after:rounded-xl  hover:after:w-[45%] text-xl'><a href={code} target='_blank' rel='noreferrer'>Code</a></button>

                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-stone-400 hover:text-white font-signature font-light cursor-pointer after:content[``] after:absolute after:bg-rose-600 after:h-[3px] after:w-[0%] after:duration-200 after:left-8 after:bottom-[1px] after:rounded-xl  hover:after:w-[45%] text-xl'><a href={demo} target='_blank' rel='noreferrer'>Demo</a></button>
                                </div>

                            </div>
                        )
                    })}


                </div>

            </div>

        </div>
    )
}

export default Portfolio
