import React from 'react'
import { Link } from 'react-router-dom'

const ContactLinks = () => {
    return (
        <section className='text-lightTextPrimary dark:text-darkTextPrimary'>
            <div className='flex justify-center items-center pb-20'>
                <ul className='grid grid-cols-1 md:grid-cols-2 md:gap-4 text-xl font-semibold w-3/4 lg:w-3/5'>
                    <li className='p-4 text-green-500'>
                        <Link className='ring-1 py-4 rounded-full ring-blue-600 dark:ring-blue-900 flex justify-center items-center gap-2 shadow-md hover:bg-gradient-to-b hover:from-blue-400 hover:to-blue-800 hover:ring-0 hover:text-white' to="https://wa.me/qr/4AD67ER2Z2ZRD1" target='_blank'><i className="fa-brands fa-whatsapp text-2xl"></i> WhatsApp</Link>
                    </li>
                    <li className='p-4 text-blue-500'>
                        <Link className='ring-1 py-4 rounded-full ring-blue-600 dark:ring-blue-900 flex justify-center items-center gap-2 shadow-md hover:bg-gradient-to-b hover:from-blue-400 hover:to-blue-800 hover:ring-0 hover:text-white' to="https://www.linkedin.com/in/harsh-saini-158709238" target='_blank'><i className="fa-brands fa-linkedin-in text-2xl"></i> Linkedin</Link>
                    </li>
                    <li className='p-4 text-blue-600'>
                        <Link className='ring-1 py-4 rounded-full ring-blue-600 dark:ring-blue-900 flex justify-center items-center gap-2 shadow-md hover:bg-gradient-to-b hover:from-blue-400 hover:to-blue-800 hover:ring-0 hover:text-white' to="https://x.com/harshsaini_18?t=_zx6F5EH11KJBifgNn7TxA&s=09" target='_blank'><i className="fa-brands fa-twitter text-2xl"></i> Twitter</Link>
                    </li>
                    <li className='p-4 text-gray-600'>
                        <Link className='ring-1 py-4 rounded-full ring-blue-600 dark:ring-blue-900 flex justify-center items-center gap-2 shadow-md hover:bg-gradient-to-b hover:from-blue-400 hover:to-blue-800 hover:ring-0 hover:text-white' to="https://github.com/sainiharshsaini" target='_blank'><i className="fa-brands fa-github text-2xl"></i> Github</Link>
                    </li>
                    <li className='p-4 text-violet-800'>
                        <Link className='ring-1 py-4 rounded-full ring-blue-600 dark:ring-blue-900 flex justify-center items-center gap-2 shadow-md hover:bg-gradient-to-b hover:from-blue-400 hover:to-blue-800 hover:ring-0 hover:text-white' to="https://discordapp.com/users/1198107407360991372" target='_blank'><i className="fa-brands fa-discord text-2xl"></i> Discord</Link>
                    </li>
                    <li className='p-4 text-blue-400'>
                        <Link className='ring-1 py-4 rounded-full ring-blue-600 dark:ring-blue-900 flex justify-center items-center gap-2 shadow-md hover:bg-gradient-to-b hover:from-blue-400 hover:to-blue-800 hover:ring-0 hover:text-white' to="https://t.me/harshsaini18" target='_blank'><i className="fa-brands fa-telegram text-2xl"></i> Telegram</Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default ContactLinks