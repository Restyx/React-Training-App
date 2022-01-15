import ProgressBar from './Skill-card-progress-bar';

const SkillCard = ({ title, progress, color }) => {
    return (
        <div className='card'>
            <ProgressBar 
                progress={progress}
                color={color}
                size={80}
            />
            <text>{ title.toUpperCase() }</text>
        </div>
    )
}

export default SkillCard
