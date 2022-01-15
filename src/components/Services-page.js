import PageHeader from './Page-header';
import Service from './Service-card';
import icon1 from '../flag-icon.png';
import icon2 from '../pen-icon.png';
import icon3 from '../gears-icon.png';
import icon4 from '../rocket-icon.png';

const Services = () => {
    return (
        <div className='page services'>
            <PageHeader
                title='SERVICES WE PROVIDE'
                text='We are working with both individuals and businesses from all over the globe to create awesome websites and applications.'
            />
            <div className='list'>
                <Service
                    icon={icon1}
                    title='BRANDING'
                    text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.'
                />
                <Service
                    icon={icon2}
                    title='DESIGN'
                    text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
                />
                <Service
                    icon={icon3}
                    title='DEVELOPMENT'
                    text='At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium.'
                />
                <Service
                    icon={icon4}
                    title='ROCKET SCIENCE'
                    text='Et harum quidem rerum est et expedita distinctio. Nam libero tempore.'
                />
            </div>
        </div>
    )
}

export default Services
