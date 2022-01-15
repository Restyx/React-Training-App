import Socials from './Team-member-social'
import Avatar from './Avatar'

const TeamMember = ({ img, name, positions, text, socials }) => {
    return (
        <div className='team-member card'>
            <Avatar img={img} name={name} size={200}/>
            <h3>{name}</h3>
            <h4>{positions.join(' / ')}</h4>
            <p>{text}</p>
            <Socials socials={socials}/>
        </div>
    )
}

export default TeamMember

