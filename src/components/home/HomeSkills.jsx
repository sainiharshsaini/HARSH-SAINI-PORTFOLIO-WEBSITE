import React from 'react'

import HtmlIcon from '../../assets/icons/icons8-html-48.png'
import CSSIcon from '../../assets/icons/icons8-css-48.png'
import JSIcon from '../../assets/icons/icons8-javascript-48.png'
import ReactIcon from '../../assets/icons/icons8-react-js-48.png'
import GitIcon from '../../assets/icons/icons8-git-48.png'
import GithubIcon from '../../assets/icons/icons8-github-48.png'
import VSCodeIcon from '../../assets/icons/icons8-vs-code-48.png'
import ExpressIcon from '../../assets/icons/icons8-express-js-40.png'
import NodeIcon from '../../assets/icons/icons8-node-js-48.png'
import MongoDBIcon from '../../assets/icons/icons8-mongodb-48.png'
import TypescriptIcon from '../../assets/icons/icons8-typescript-48.png'
import TailwindCSSIcon from '../../assets/icons/icons8-tailwind-css-48.png'
import PostmanIcon from '../../assets/icons/icons8-postman-api-64.png'
import SassIcon from '../../assets/icons/icons8-sass-48.png'
import MySQLIcon from '../../assets/icons/icons8-mysql-48.png'
import JupyterIcon from '../../assets/icons/icons8-project-jupyter-48.png'
import PythonIcon from '../../assets/icons/icons8-python-48.png'
import CIcon from '../../assets/icons/icons8-c-programming-48.png'
import CppIcon from '../../assets/icons/icons8-c++-48.png'
import JavaIcon from '../../assets/icons/icons8-java-48.png'

import SkillsType from './SkillsType'

const HomeSkills = () => {
  return (
    <section className='flex flex-col justify-center px-8 lg:px-40 bg-lightBackground dark:bg-darkBackground text-lightTextPrimary dark:text-darkTextPrimary'>
      <h2 className='text-3xl md:text-5xl lg:text-7xl lg:py-12 font-semibold md:font-bold text-center text-accent text-blue-600 dark:text-blue-500'>Skills</h2>
      <div className='py-8 md:py-12'>
        <SkillsType skillType='Languages'
          techType={[
            { id: 1, techName: 'HTML', icon: HtmlIcon },
            { id: 2, techName: 'CSS', icon: CSSIcon },
            { id: 3, techName: 'JavaScript', icon: JSIcon },
            { id: 4, techName: 'TypeScript', icon: TypescriptIcon },
            { id: 5, techName: 'Python', icon: PythonIcon },
            { id: 6, techName: 'Java', icon: JavaIcon },
            { id: 7, techName: 'C++', icon: CppIcon },
            { id: 8, techName: 'C', icon: CIcon },
            { id: 9, techName: 'Sass', icon: SassIcon },
          ]}
        />
        <SkillsType skillType='Libraries & Frameworks'
          techType={[
            { id: 1, techName: 'Reactjs', icon: ReactIcon },
            { id: 2, techName: 'Tailwind CSS', icon: TailwindCSSIcon }
          ]}
        />
        <SkillsType skillType='Backend'
          techType={[
            { id: 1, techName: 'Nodejs', icon: NodeIcon },
            { id: 2, techName: 'Express', icon: ExpressIcon }
          ]}
        />
        <SkillsType skillType='Databases & ORMs'
          techType={[
            { id: 1, techName: 'MongoDB', icon: MongoDBIcon },
            { id: 2, techName: 'MySQL', icon: MySQLIcon }
          ]}
        />
        <SkillsType skillType='Tools & Technologies'
          techType={[
            { id: 1, techName: 'Git', icon: GitIcon },
            { id: 2, techName: 'Github', icon: GithubIcon },
            { id: 3, techName: 'Postman', icon: PostmanIcon },
            { id: 4, techName: 'VSCode', icon: VSCodeIcon },
            { id: 5, techName: 'Jupyter Notebook', icon: JupyterIcon }
          ]}
        />
      </div>
    </section>
  )
}

export default HomeSkills