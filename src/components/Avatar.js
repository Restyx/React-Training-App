const Avatar = ({ img, name, size }) => {
    const style = {
        borderRadius: '50%',
        width: `${size}px`,
        height: `${size}px`
    }
    return (
        <div className='avatar'>
            <img src={img} alt={`${name} - Avatar`} style={style}/>
        </div>
    )
}

export default Avatar
