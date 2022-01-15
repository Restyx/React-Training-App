import React from 'react'

const Service = ({icon, title, text}) => {
    return (
        <div className='card'>
            <img src={icon} alt={`icon-${title}`} />
            <h2>{title}</h2>
            <text>{text}</text>
        </div>
    )
}

export default Service
