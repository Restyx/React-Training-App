import Header from './Page-header'
import BigButton from './Big-button'
import Footer from './Footer'

const ContactPage = () => {
    return (
        <div className='page contact'>
            <Header title='GET IN TOUCH' text='1600 Pennsylvania Ave NW, Washington, DC 20500, United States of America. Tel: (202) 456-1111' />
            <form action="" className='contact-form'>
                <div className='credentials'>
                    <input type="text" name="" id="" placeholder="Your Name" />
                    <input type="email" name="" id="" placeholder="Your Email" />
                </div>
                <textarea placeholder="" placeholder="Your Message"></textarea>
                <BigButton text='SEND MESSAGE' background='#30bae7' />
            </form>
            <Footer />
        </div>
    )
}

export default ContactPage
