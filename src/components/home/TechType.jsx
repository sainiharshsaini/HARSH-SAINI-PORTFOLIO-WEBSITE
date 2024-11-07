import React from 'react'

const TechType = ({tech, techIcon}) => {
    return (
        <section className='z-20' style={{ opacity: 1, transform: 'none' }}>
            <div className='flex items-center gap-2 overflow-hidden rounded-lg ring-1 ring-blue-900 px-4 py-3 lg:px-5 lg:py-4 text-sm lg:text-base shadow-md text-lightTextSecondary dark:text-darkTextSecondary'>
                <img className='w-5' src={techIcon} alt={tech} />
                <span className='font-medium'>{tech}</span>
            </div>
        </section>
    )
}

export default TechType