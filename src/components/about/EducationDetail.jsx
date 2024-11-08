import React from 'react'
import { Link } from 'react-router-dom'

const EducationDetail = ({ CourseName, InstituteWebsite, InstituteName, CourseTimestamp, InstituteLocation }) => {
    return (
        <li>
            <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-bold md:text-2xl'>
                    {CourseName}
                    <Link className='text-blue-700' to={InstituteWebsite} target='_blank'>
                        {InstituteName}
                    </Link>
                </h3>
                <span className='text-base md:text-lg font-medium text-lightTextSecondary dark:text-darkTextSecondary'>
                    <i className="fa-solid fa-clock"></i> {CourseTimestamp}
                </span>
                <span className='text-base md:text-lg font-medium text-lightTextSecondary dark:text-darkTextSecondary'>
                    <i className="fa-solid fa-location-dot text-red-600"></i> {InstituteLocation}
                </span>
            </div>
        </li>
    )
}

export default EducationDetail