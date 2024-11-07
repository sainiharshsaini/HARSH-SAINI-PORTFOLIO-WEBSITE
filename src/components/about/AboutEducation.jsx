import React from 'react'
import EducationDetail from './EducationDetail'

const AboutEducation = () => {
    return (
        <section className='flex justify-center items-center py-10 md:pb-20 text-lightTextPrimary dark:text-darkTextPrimary'>
            <div className='flex flex-col items-center gap-16 md:gap-20 w-3/4 md:w-3/5 lg:w-1/2'>
                <h1 className='text-blue-700 text-4xl font-semibold md:text-5xl lg:text-8xl md:font-bold'>Education</h1>
                <ul className='flex flex-col gap-12 md:gap-20 md:py-10'>
                    <EducationDetail CourseName='Bachelor of Technology in Computer Science and Engineering [B.Tech CSE]' InstituteWebsite='https://coeruniversity.ac.in/' InstituteName='@COER University' CourseTimestamp='2022-2026' InstituteLocation='Roorkee, Uttarakhand' />
                    <EducationDetail CourseName='Higher Secondary Certificate [12th]' InstituteWebsite='http://www.sgrrroorkee.com/' InstituteName='@Shri Guru Ram Rai Public School' CourseTimestamp='2021-2022' InstituteLocation='Roorkee, Uttarakhand' />
                    <EducationDetail CourseName='Secondary School Certificate [10th]' InstituteWebsite='http://www.sgrrroorkee.com/' InstituteName='@Shri Guru Ram Rai Public School' CourseTimestamp='2019-2020' InstituteLocation='Roorkee, Uttarakhand' />
                </ul>
            </div>
        </section>
    )
}

export default AboutEducation