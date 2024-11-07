import React from 'react'
import { Link } from 'react-router-dom'
import HarshResume from '../../assets/HarshResume.png' 

const AboutIntro = () => {
    return (
        <section className='flex justify-center items-center px-8 py-12 md:py-20 text-lightTextPrimary dark:text-darkTextPrimary'>
            <div className='flex flex-col justify-between items-center gap-12 md:gap-20'>
                <h1 className='text-3xl font-medium text-blue-700 md:text-5xl lg:text-8xl lg:font-bold'>ABOUT ME</h1>
                <p className='text-base md:w-3/4 lg:text-lg pl-2'>
                    As a Passionate <b>Full Stack Web Developer</b>, I thrive on building intuitive, efficient, and scalable <b>Web Applications</b> that make a real impact. With expertise in both <span className='text-blue-600'>frontend</span> and <span className='text-blue-600'>backend</span> development, I bring ideas to life using modern technologies. Whether it's creating seamless user interfaces or designing robust server-side logic.
                    <br /><br />
                    I also like sharing content related to the stuff that I have learned over the years in <b>Web Development</b> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <Link className='text-blue-600' rel="noreferrer" to="https://www.linkedin.com/in/harsh-saini-158709238" target="_blank">Linkedin</Link> and <Link className='text-blue-700' rel="noreferrer" to="https://x.com/harshsaini_18?t=_zx6F5EH11KJBifgNn7TxA&s=09" target="_blank">Twitter</Link> where I post useful content related to <b>Web Development and Programming</b>.
                    <br /><br />
                    I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                    <br /><br />
                    Let’s build something amazing together!
                </p>
                <div className='flex justify-between items-center gap-8 md:gap-12 mt-4 w-full md:w-3/5 lg:w-2/5'>
                    <Link className='bg-gradient-to-b from-blue-400 to-blue-800 w-1/2 text-center text-white rounded-md py-4 px-8 text-base md:text-lg md:font-medium transition ease-in-out hover:-translate-x-0.5 hover:scale-110 duration-300' to={HarshResume} target="_blank" download>Resume <i className="fa-solid fa-download"></i></Link>
                    <Link className='bg-gradient-to-b from-blue-400 to-blue-800 w-1/2 text-center text-white rounded-md py-4 px-8 text-base md:text-lg md:font-medium transition ease-in-out hover:-translate-x-0.5 hover:scale-110 duration-300' to="/contact">Contact me!</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutIntro