import React from 'react'
import Avatar from './Avatar'

const TestimonialCard = ({text, author}) => {
    return (
        <div className='card'>
            <div className='testimonial'>
                <Avatar img={author.img} name={author.name} size={100}/>
                <text>
                    “{text}”
                </text>
            </div>
            <div className="author">
                <h3>{author.name.toUpperCase()}</h3>
                <h4>{author.position}</h4>
            </div>
        </div>
    )
}

export default TestimonialCard;
