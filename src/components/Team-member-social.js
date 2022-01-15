
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const getSocialIcon = (iconName) => {

    switch (iconName) {
        case 'facebook': return (<FaFacebookF className='social-icon' />);
        case 'twitter': return (<FaTwitter className='social-icon' />);
        case 'linkedin': return (<FaLinkedinIn className='social-icon' />);
        case 'gmail': return (<GrMail className='social-icon' />);
    }
}

const TeamMemberSocial = ({ socials }) => {

    return (
        <div className='list socials'>
            {socials.map(social => (
                <div>
                    <a href={social.link} target='_blank'>
                        { getSocialIcon(social.name) }
                    </a>
                </div>
            ))}
        </div>
    )
}

export default TeamMemberSocial
