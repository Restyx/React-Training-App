import React from 'react'

const PageHeader = ({ title, text }) => {
    return (
        <div className='page-title'>
            <h1>{ title.toUpperCase() }</h1>
            <p>{ text }</p>
        </div>
    )
}

export default PageHeader
