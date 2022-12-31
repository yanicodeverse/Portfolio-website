import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'

const Experience = () => {

    const technologiesarr = [
        {
            id: 1,
            image: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },

        {
            id: 2,
            image: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },

        {
            id: 3,
            image: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },

        {
            id: 4,
            image: bootstrap,
            title: 'BOOTSTRAP',
            style: 'shadow-purple-600'
        },

        {
            id: 5,
            image: tailwind,
            title: 'TAILWIND CSS',
            style: 'shadow-sky-400'
        },

        {
            id: 6,
            image: react,
            title: 'REACT',
            style: 'shadow-blue-600'
        },
    ]

    return (
        <div name='experience' className='w-full h-screen bg-gradient-to-b from-blue-900 via-black to-black'>

            <div className='max-w-screen-lg mx-auto p-5 flex flex-col justify-center w-full h-full text-white'>

                <div>

                    <p className='text-5xl font-semibold font-signature p-3'><span className='uppercase text-red-700'>e</span>xperience</p>
                    <p className='text-4xl font-second py-6 capitalize'>Technologies i <span className='uppercase text-red-700'>w</span><span className='lowercase'>orked</span> with</p>

                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {technologiesarr.map(link => {
                        const { id, image, title, style } = link
                        return (

                            <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}  text-stone-400 hover:text-white cursor-pointer`}>

                                <img src={image} alt="" className=' w-20 mx-auto' />
                                <p className='mt-4 font-signature text-xl'>{title}</p>

                            </div>
                        )
                    })}


                </div>

            </div>

        </div>
    )
}

export default Experience
