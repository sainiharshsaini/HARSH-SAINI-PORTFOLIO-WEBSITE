import React from 'react'
import { Link } from 'react-router-dom'
import HarshProfile from "../assets/HarshProfile.jpg"

const Footer = () => {
  return (
    <footer className='border-t border-slate-300 dark:border-slate-800 py-8 lg:pt-12 px-10 text-lightTextPrimary dark:text-darkTextPrimary'>
      <div className='flex flex-col gap-8 lg:gap-12 lg:px-10 lg:pt-5'>
        <div className='flex flex-col-reverse gap-10 lg:flex-row lg:justify-evenly'>
          <div className=' flex flex-col justify-between items-center gap-6'>
            <Link>
              <img className='size-28 rounded-full' src={HarshProfile} alt="HarshProfile" />
            </Link>
            <h1 className='text-2xl font-semibold tracking-widest'>HARSH SAINI</h1>
            <p className='text-center text-base'>Coding the future: personalized Web development services.</p>
            <div className='px-8 py-1 text-white text-center text-base rounded-full bg-gradient-to-b from-blue-400 to-blue-800 lg:px-12 cursor-pointer transition ease-in-out delay-50 hover:translate-y-1 hover:scale-110 duration-300'>
              <Link to="mailto: singhharshsaini7@gmail.com"><i className="fa-regular fa-envelope"></i> : singhharshsaini7@gmail.com</Link>
            </div>
          </div>
          <div className='flex flex-col justify-between items-center lg:items-start p-5 lg:py-0'>
            <div>
              <p className='py-4 text-2xl leading-10'>Get in touch with me via <span className='text-blue-600 dark:text-blue-500 font-semibold'>Social Media</span>.</p>
              <ul className='flex justify-start items-center py-4 gap-6 md:gap-8 text-3xl'>
                <li>
                  <Link to="https://www.linkedin.com/in/harsh-saini-158709238"><i className="fa-brands fa-linkedin-in hover:text-blue-500"></i></Link>
                </li>
                <li>
                  <Link to="https://x.com/harshsaini_18?t=_zx6F5EH11KJBifgNn7TxA&s=09"><i className="fa-brands fa-twitter hover:text-blue-700"></i></Link>
                </li>
                <li>
                  <Link to="https://github.com/sainiharshsaini"><i className="fa-brands fa-github hover:text-gray-600"></i></Link>
                </li>
                <li>
                  <Link to="https://wa.me/qr/4AD67ER2Z2ZRD1"><i className="fa-brands fa-whatsapp hover:text-green-500"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center text-center gap-1 pt-8 border-t text-sm border-blue-600'>
          <p>© Copyright 2024 . Made by</p>
          <Link className='font-semibold' rel="noreferrer" target="_blank" to="https://harshsaini.tech">Harsh Saini</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer