import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import HarshProfile from "../assets/HarshProfile.jpg"
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='sticky mx-auto wrapper top-0 z-50 flex items-center gap-2 p-5 w-full lg:px-20 text-lightTextPrimary dark:text-darkTextPrimary'>
      <div className='flex flex-col w-full shadow-lg ring-1 ring-slate-200 dark:ring-slate-800 p-5 gap-5 rounded-2xl md:px-10 backdrop-blur-md' style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
        <div className='flex w-full justify-between mx-auto'>
          <Link className='flex items-center gap-2 cursor-pointer' to="/">
            <img className='size-14 rounded-full' style={{ color: 'transparent' }} loading='lazy' decoding='async' width={300} height={200} src={HarshProfile} alt="HarshProfile" />
          </Link>

          {/* Desktop Menu */}
          <ul className='hidden justify-between items-center gap-6 lg:gap-12 text-sm font-medium md:flex px-10 '>
            <li className='my-2 transition-transform duration-100 hover:scale-[1.1]'>
              <NavLink className={({ isActive }) => isActive ? 'text-base bg-gradient-to-b from-blue-400 to-blue-700 rounded-full py-2 px-4 text-white' : 'text-base rounded-full py-2 px-4 hover:text-blue-500'} to="/">
                Home
              </NavLink>
            </li>
            <li className='my-2 transition-transform duration-100 hover:scale-[1.1]'>
              <NavLink className={({ isActive }) => isActive ? 'text-base bg-gradient-to-b from-blue-400 to-blue-700 rounded-full py-2 px-4 text-white' : 'text-base rounded-full py-2 px-4 hover:text-blue-500'} to="about">
                About
              </NavLink>
            </li>
            <li className='my-2 transition-transform duration-100 hover:scale-[1.1]'>
              <NavLink className={({ isActive }) => isActive ? 'text-base bg-gradient-to-b from-blue-400 to-blue-700 rounded-full py-2 px-4 text-white' : 'text-base rounded-full py-2 px-4 hover:text-blue-500'} to="projects">
                Projects
              </NavLink>
            </li>
            <li className='my-2 transition-transform duration-100 hover:scale-[1.1]'>
              <NavLink className={({ isActive }) => isActive ? 'text-base bg-gradient-to-b from-blue-400 to-blue-700 rounded-full py-2 px-4 text-white' : 'text-base rounded-full py-2 px-4 hover:text-blue-500'} to="contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <div className='flex gap-6'>
            <ThemeToggle />
            {/* Mobile Menu Toggle Icon */}
            <button className='text-blue-600 md:hidden' onClick={toggleMenuHandler}>
              {isMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (<ul className='flex justify-between pb-2 pt-5 px-1 gap-3 text-sm font-medium md:hidden' onClick={() => setIsMenuOpen(false)}>
          <li className='my-2 transition-transform duration-100 hover:scale-[1.1]' onClick={(e) => console.log(e)
          }>
            <NavLink className={({ isActive }) => isActive ? 'text-base pb-1 border-b-2 border-b-blue-500' : 'text-base pb-1 hover:text-blue-500'} to="/">
              Home
            </NavLink>
          </li>
          <li className='my-2 transition-transform duration-100 hover:scale-[1.1]'>
            <NavLink className={({ isActive }) => isActive ? 'text-base pb-1 border-b-2 border-b-blue-500' : 'text-base pb-1 hover:text-blue-500'} to="about">
              About
            </NavLink>
          </li>
          <li className='my-2 transition-transform duration-100 hover:scale-[1.1]'>
            <NavLink className={({ isActive }) => isActive ? 'text-base pb-1 border-b-2 border-b-blue-500' : 'text-base pb-1 hover:text-blue-500'} to="projects">
              Projects
            </NavLink>
          </li>
          <li className='my-2 transition-transform duration-100 hover:scale-[1.1]'>
            <NavLink className={({ isActive }) => isActive ? 'text-base pb-1 border-b-2 border-b-blue-500' : 'text-base pb-1 hover:text-blue-500'} to="contact">
              Contact
            </NavLink>
          </li>
        </ul>

        )}

      </div>
    </header>
  )
}

export default Header