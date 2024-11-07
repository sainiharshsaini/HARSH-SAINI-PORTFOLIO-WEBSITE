import React from 'react'
import { Link } from 'react-router-dom'
import ProjectData from '../.././PortfolioData'

const Projects = () => {
  return (
    <section className='flex justify-between items-center flex-col py-20 px-5 gap-20 md:px-10 md:gap-28 text-lightTextPrimary dark:text-darkTextPrimary'>
      { 
        ProjectData.map(({ id, projectImg, projectName, aboutProject, techUsed, deployLink, githubLink }) => (
          <div className='p-4 rounded-md bg-slate-300 dark:bg-slate-900 border-t-4 border-t-blue-600 dark:border-t-blue-500 border-r-2 border-b-2 border-slate-400 dark:border-slate-600 shadow-sm lg:w-3/4' key={id}>
            <div className='flex flex-col justify-between gap-8 md:flex-row '>
              <img className='md:w-1/2' src={projectImg} alt={projectImg} />
              <div className='flex flex-col justify-between lg:justify-evenly gap-6 md:w-1/2'>
                <h3 className='text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-500'>{projectName}</h3>
                <p className='text-base'>{aboutProject}</p>
                <div className='flex items-center gap-4'>
                  {
                    techUsed.map(({ id, icon }) => (
                      <img className='w-6' src={icon} key={id} />
                    ))
                  }
                </div>
                <div className='flex justify-between items-center gap-4'>
                  <Link className='py-1 px-4 w-2/4 text-sm text-center bg-gradient-to-b from-blue-400 to-blue-700 hover:from-slate-400 hover:to-slate-700 rounded-sm text-white font-medium' to={githubLink}><i className="fa-brands fa-github"></i> SOURCE CODE</Link>
                  <Link className='py-1 px-4 w-2/4 text-sm text-center bg-gradient-to-b from-blue-400 to-blue-700 hover:from-slate-400 hover:to-slate-700 rounded-sm text-white font-medium' to={deployLink}><i className="fa-solid fa-eye"></i>  VIEW PROJECT</Link>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Projects