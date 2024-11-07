import React from 'react'

const HomeHero = () => {
  return (
    <section className='flex justify-center items-center py-20 px-8 bg-lightBackground dark:bg-darkBackground text-lightTextPrimary dark:text-darkTextPrimary'>
      <div className='flex justify-between flex-col items-center gap-16 lg:gap-24 lg:w-3/5'>
        <div className='text-5xl md:text-6xl lg:text-7xl text-center font-bold tracking-wide leading-tight'>HEY I'M <span className='text-blue-600 dark:text-blue-500'>HARSH SAINI</span></div>
        <div className='text-center text-lg lg:text-xl text-lightTextSecondary dark:text-darkTextSecondary'>A passionate web developer building modern & responsive web applications. I have a strong interest in creating scalable SaaS platforms that enhance user experience and solve real-world problems.</div>
        <div className='text-xl lg:text-2xl font-medium'><span className='text-orange-500'>WebDev</span> | <span className='text-blue-500'>DevOps</span> | <span className='text-green-500'>Web3</span></div>
      </div>
    </section>
  )
}

export default HomeHero