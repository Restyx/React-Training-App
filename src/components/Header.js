import Menu from './Menu'
import Logo from './Logo'

const header = () => {
    return (
        <div className='header'>
            <Logo />
            <Menu/>
        </div>
    )
}

export default header
