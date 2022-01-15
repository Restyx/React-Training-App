import Header from './Page-header'
import Member from './Team-member-card'
import image from '../solid-dark-grey-background.jpg'

const Team = () => {
    const members = [
        {
            image: '',
            name: 'Anne Hathaway',
            positions: ['CEO', 'Marketing Guru'],
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
            socials: [{
                name: 'facebook',
                link: 'https://www.facebook.com/'
            },
            {
                name: 'twitter',
                link: 'https://twitter.com/?lang=en'
            },
            {
                name: 'linkedin',
                link: 'https://www.linkedin.com/'
            },
            {
                name: 'gmail',
                link: 'https://mail.google.com/'
            }
            ]
        },
        {
            image: '',
            name: 'Kate Upton',
            positions: ['Creative Director'],
            description: 'Duis aute irure dolor in in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat non diam proident.',
            socials: [
            {
                name: 'twitter',
                link: 'https://twitter.com/?lang=en'
            },
            {
                name: 'linkedin',
                link: 'https://www.linkedin.com/'
            },
            {
                name: 'gmail',
                link: 'https://mail.google.com/'
            }
            ]
        },
        {
            image: '',
            name: 'Olivia Wilde',
            positions: ['Lead Designer'],
            description: 'Nemo enim ipsam voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem nesciunt.',
            socials: [{
                name: 'facebook',
                link: 'https://www.facebook.com/'
            },
            {
                name: 'twitter',
                link: 'https://twitter.com/?lang=en'
            },
            {
                name: 'linkedin',
                link: 'https://www.linkedin.com/'
            },
            {
                name: 'gmail',
                link: 'https://mail.google.com/'
            }
            ]
        },
        {
            image: '',
            name: 'Ashley Greene',
            positions: ['SEO', 'Developer'],
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
            socials: [{
                name: 'facebook',
                link: 'https://www.facebook.com/'
            },
            {
                name: 'twitter',
                link: 'https://twitter.com/?lang=en'
            },
            {
                name: 'gmail',
                link: 'https://mail.google.com/'
            }
            ]
        },
    ];

    return (
        <div className='page team'>
            <Header title='MEET OUR BEAUTIFUL TEAM' text='We are a small team of designers and developers, who help brands with big ideas.' />
            <div className='list'>
                {
                    members.map(member => 
                    <Member
                        img={image}
                        name={member.name}
                        positions={member.positions}
                        text={member.description}
                        socials={member.socials}
                        key={member.name}
                        />
                    )}
            </div>
        </div>
    )
}

export default Team
