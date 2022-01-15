import Header from './Page-header'
import SkillCard from './Skill-card'

const SkillsPage = () => {
    return (
        <div className='page skills'>
            <Header
                title='WE GOT SKILLS!'
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            />
            <div className='list'>
                <SkillCard
                    progress={90}
                    color='#30bae7'
                    title='web design'
                />
                <SkillCard
                    progress={75}
                    color='#d74680'
                    title='html / css'
                />
                <SkillCard
                    progress={70}
                    color='#15c7a8'
                    title='graphic design'
                />
                <SkillCard
                    progress={85}
                    color='#eb7d4c'
                    title='ui / ux'
                />
            </div>
        </div>
    )
}

export default SkillsPage
