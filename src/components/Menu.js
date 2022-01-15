import React from 'react'
import Option from './Menu-option'

const menu = () => {
    return (
        <div className='menu'>
            <Option text='HOME' />
            <Option text='ABOUT' />
            <Option text='WORK' />
            <Option text='BLOG' />
            <Option text='CONTACT' />
        </div>
    )
}

export default menu
