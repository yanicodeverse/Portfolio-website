import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-black text-white'>

            <div className='flex flex-col w-full h-full p-5 justify-center max-w-screen-lg mx-auto'>

                <div className='pb-8'>
                    <p className='text-5xl font-semibold font-signature'><span className='text-red-700 capitalize'>c</span>ontact</p>
                    <p className=' py-6 font-second text-2xl capitalize'>Submit the form below to get in <span className='text-red-700'>t</span>ouch</p>
                </div>



                <div className='flex justify-center items-center'>

                    <form action="https://getform.io/f/3b47eafb-4f75-47c5-9873-443dc0d643f5" method="POST" className='flex flex-col w-full md:w-1/2'>
                        <input
                            type="text"
                            name='name'
                            placeholder='Enter Your Name'
                            className='p-2 bg-transparent border-2 rounded-md text-white font-second focus:outline-none'
                        />

                        <input
                            type="email"
                            name='email'
                            placeholder='Enter Your Email'
                            className=' my-5 p-2 bg-transparent border-2 rounded-md text-white font-second focus:outline-none'
                        />

                        <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white font-second focus:outline-none'></textarea>

                        <button className='text-stone-300 font-signature w-fit px-6 py-4 flex items-center rounded-md bg-gradient-to-r mx-auto my-8 from-blue-900 to-purple-900 hover:scale-105 duration-200 hover:text-white hover:bg-gradient-to-r hover:from-blue-900 hover:via-black hover:to-purple-900 cursor-pointer'>Let's Talk</button>
                    </form>

                </div>

                <div className='flex justify-center items-center text-stone-400'>


                    <a href="https://github.com/yanicodeverse" target='_blank' rel="noreferrer" className='duration-200 hover:scale-105 hover:shadow-md hover:shadow-red-700 hover:text-white rounded-md'><FaGithub size={40} /></a>


                    <a href="https://www.linkedin.com/in/parinay-pandey-588a6223a/" target='_blank' rel="noreferrer" className='mx-6 duration-200 hover:scale-105 hover:shadow-md hover:shadow-blue-500 hover:text-white rounded-md'><FaLinkedinIn size={40} /></a>


                    <a href="https://www.instagram.com/code__verse/" target='_blank' rel="noreferrer" className='duration-200 hover:scale-105 hover:shadow-md hover:shadow-yellow-300 hover:text-white rounded-md'><FaInstagram size={40} /></a>


                </div>

            </div>
        </div >
    )
}

export default Contact
