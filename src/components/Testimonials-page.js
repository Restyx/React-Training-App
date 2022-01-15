import Header from './Page-header';
import TestimonialCard from './Testimonial-card';
import img from '../solid-dark-grey-background.jpg';

const TestimonialsPage = () => {
    const textimonials = [{
        text: 'Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.',
        author: {
            img: img,
            name: 'Chanel Iman',
            position: 'CEO of Pinterest'
        }
    }]

    return (
        <div className='page testimonials'>
            <Header title='WHAT POEPLE SAY ABOUT US' text='Our clients love us!' />
            <div className='list'>
                <TestimonialCard
                    text={textimonials[0].text}
                    author={textimonials[0].author}
                />
                <TestimonialCard
                    text={textimonials[0].text}
                    author={textimonials[0].author}
                />
                <TestimonialCard
                    text={textimonials[0].text}
                    author={textimonials[0].author}
                />
            </div>
        </div>
    )
}

export default TestimonialsPage
