import React from 'react'

const ProjectsIntro = () => {
  return (
    <section className='flex justify-center items-center px-6 py-16 md:p-20 text-lightTextPrimary dark:text-darkTextPrimary bg-slate-200 dark:bg-slate-950'>
      <div className="flex justify-between flex-col items-center gap-8 md:gap-10 lg:gap-12">
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600'>MY PROJECTS</h1>
        <h2 className='text-lg md:text-xl lg:text-2xl'>A Blend of <span className='text-blue-500 font-medium tracking-wide'>Creativity</span> and <span className='text-blue-500 font-medium tracking-wide'>Code</span></h2>
        <p className='text-center text-base lg:w-3/4 leading-7 md:tracking-wide'>Explore a selection of my recent projects, each one representing a unique challenge and a testament to my skills in web development. From concept to completion, I am dedicated to delivering work that exceeds expectations, drives results, and tells a story. Every project is an opportunity to learn, grow, and push my craft further.</p>
      </div>
    </section >
  )
}

export default ProjectsIntro