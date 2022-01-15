const BigButton = ({text, background}) => {
    return (
        <button className='big-button' style={{backgroundColor: background}}>
            <p>{text}</p>
        </button>
    )
}

export default BigButton
