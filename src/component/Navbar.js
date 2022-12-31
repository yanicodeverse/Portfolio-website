import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { HiCodeBracket } from 'react-icons/hi2'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
        },

        {
            id: 2,
            link: 'about'
        },

        {
            id: 3,
            link: 'portfolio'
        },

        {
            id: 4,
            link: 'experience'
        },

        {
            id: 5,
            link: 'contact'
        },
    ]

    return (

        // DESKTOP 

        <div className='flex justify-between w-full h-16 bg-black items-center text-white ' id='nav-div '>
            <div className='px-7 text-2xl' id='nav-wrapper-logo'>
                <div className='flex justify-between items-center' id='nav-logo-item-wrapper' >
                    <div className='flex flex-col justify-between items-start' id='nav-logo-icon-div'>
                        <HiCodeBracket className='mr-2' />
                    </div>
                    <h1>CODE<span className='text-red-700 font-signature'>V</span>ERSE.</h1>
                </div>
            </div>

            <ul className="hidden md:flex relative">
                {links.map(links => {
                    const { id, link } = links
                    return (
                        <li key={id} className='px-5 mr-3 uppercase text-stone-400 hover:scale-105 hover:text-white duration-200 cursor-pointer after:content[``] after:absolute after:bg-rose-600 after:h-[3px] after:w-[0%] after:duration-200 after:left-5 after:bottom-[1px] after:rounded-xl  hover:after:w-[45%] font-signature '>


                            <Link to={link} smooth duration={500}>
                                {link}
                            </Link>


                        </li>

                    )
                })}
            </ul>

            {/* MOBILE  */}

            <div onClick={() => setNav(!nav)} className='pr-7 text-stone-400 cursor-pointer z-10 md:hidden '>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav &&
                <ul className='flex flex-col justify-center items-center top absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black to-blue-900'>
                    {links.map(({ id, link }) => {
                        return (
                            <li key={id} className='px-4 cursor-pointer uppercase py-6 text-4xl text-stone-400 hover:scale-105 hover:text-white duration-200 after:content[``] after:absolute after:bg-rose-600 after:h-[3px] after:w-[0%] after:duration-200 after:left-5 after:bottom-[1px] after:rounded-xl  hover:after:w-[50%] font-signature'>
                                <Link to={link} smooth duration={500}>
                                    {link}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            }

        </div >
    )
}

export default Navbar
