import React from 'react'

import HtmlIcon from '../../assets/icons/HTML_icon.svg'
import CSSIcon from '../../assets/icons/CSS_icon.svg'
import JSIcon from '../../assets/icons/JS_icon.svg'
import GitIcon from '../../assets/icons/Git_icon.svg'
import GithubIcon from '../../assets/icons/Github_icon.svg'
import VSCodeIcon from '../../assets/icons/VSCode_icon.svg'
import ReactIcon from '../../assets/icons/React_icon.svg'
import ExpressIcon from '../../assets/icons/Express_icon.svg'
import NodeIcon from '../../assets/icons/Node_icon.svg'
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
            { id: 4, techName: 'TypeScript', icon: 'https://d3sxshmncs10te.cloudfront.net/icon/free/svg/1175078.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTczMDkxNzc3MSwicSI6bnVsbCwiaWF0IjoxNzMwNjU4NTcxfQ__.443971d2fcd76ac4dcfa931c39c0430c6fd42e3d0f4b639fb7ea370773c00cda' },
            { id: 5, techName: 'Python', icon: 'https://d3sxshmncs10te.cloudfront.net/icon/free/svg/2945099.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTczMDkxNzY2OCwicSI6bnVsbCwiaWF0IjoxNzMwNjU4NDY4fQ__.92d03872ae9d8f2c97e637476c0c44ab52b56c75de6eca4a8c01535f374fd562' },
            { id: 6, techName: 'Java', icon: 'https://d3sxshmncs10te.cloudfront.net/icon/free/svg/1174952.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTczMDkxNzUzNCwicSI6bnVsbCwiaWF0IjoxNzMwNjU4MzM0fQ__.da99ce2aaf68b1fbe0e10fdb695e34b9d402a12cdcdb77f982d71deb8dd2b789' },
            { id: 7, techName: 'C++', icon: 'https://d3sxshmncs10te.cloudfront.net/icon/free/svg/226082.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTczMDkxNzYyNCwicSI6bnVsbCwiaWF0IjoxNzMwNjU4NDI0fQ__.3f90e4e3f1c706050a854a02a6651da62f42059b898bef7ec2c40afaba6c5731' },
            { id: 8, techName: 'C', icon: 'https://d3sxshmncs10te.cloudfront.net/icon/free/svg/1175191.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTczMDkxNzU4OCwicSI6bnVsbCwiaWF0IjoxNzMwNjU4Mzg4fQ__.67b051b80fbf9383d826c4d4fa9be4a35034761f4982868ec8fd240490fe06ce' },
            { id: 9, techName: 'Sass', icon: 'https://d3sxshmncs10te.cloudfront.net/icon/free/svg/1175092.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTczMDkxNzg1NywicSI6bnVsbCwiaWF0IjoxNzMwNjU4NjU3fQ__.6aae120e4ce147cb89ac6bc7711be90c6c99273e336b45c0a658ce3547cf140d' },
          ]}
        />
        <SkillsType skillType='Libraries & Frameworks'
          techType={[
            { id: 1, techName: 'Reactjs', icon: ReactIcon },
            { id: 2, techName: 'Tailwind CSS', icon: 'https://d3sxshmncs10te.cloudfront.net/icon/free/svg/4406745.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTczMDkxNzkxMSwicSI6bnVsbCwiaWF0IjoxNzMwNjU4NzExfQ__.dc1a48c267286ef2deb9cc61bacd1f55c6e2432d3ed411d82dfb0af52d2832df' }
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
            { id: 1, techName: 'MongoDB', icon: 'https://d3sxshmncs10te.cloudfront.net/icon/free/svg/1175139.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTczMDkxODAyNywicSI6bnVsbCwiaWF0IjoxNzMwNjU4ODI3fQ__.bb844d6bc4a5280aa3529d587ee93e37cdbccb1e4434cd2627355306aa5888a2' },
            { id: 2, techName: 'MySQL', icon: 'https://d3sxshmncs10te.cloudfront.net/icon/free/svg/2945040.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTczMDkxNzQ1NiwicSI6bnVsbCwiaWF0IjoxNzMwNjU4MjU2fQ__.9bcc7b32c989eb30a08e5355273b0b7b2e938d79a2c89f98e2df274a2244861b' }
          ]}
        />
        <SkillsType skillType='Tools & Technologies'
          techType={[
            { id: 1, techName: 'Git', icon: GitIcon },
            { id: 2, techName: 'Github', icon: GithubIcon },
            { id: 3, techName: 'Postman', icon: 'https://d3sxshmncs10te.cloudfront.net/icon/free/svg/2945092.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTczMDkxNzI4NiwicSI6bnVsbCwiaWF0IjoxNzMwNjU4MDg2fQ__.cf8e0175b37497888a9bfb372150b684806f9900cda1ceb0958e9e306922d078' },
            { id: 4, techName: 'VSCode', icon: VSCodeIcon }
          ]}
        />
      </div>
    </section>
  )
}

export default HomeSkills