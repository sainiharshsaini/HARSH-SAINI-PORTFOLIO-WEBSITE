import React from 'react'

import TechType from './TechType'

const SkillsType = ({ skillType, techType }) => {
    return (
        <section className='my-5'>
            <span className='text-sm font-semibold text-foreground'>{skillType}</span>
            <div className='mt-2 flex flex-wrap gap-4 text-xl'>
                {
                    techType.map(e => <TechType key={e.id} tech={e.techName} techIcon={e.icon}/>)
                }
            </div>
        </section>
    )
}

export default SkillsType