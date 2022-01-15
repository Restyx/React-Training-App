import { useState } from 'react';
import Header from './Page-header'
import BigButton from './Big-button';
import image1 from '../1.png';
import image2 from '../2.png';
import image3 from '../3.png';
import image4 from '../4.png';

const PortfolioPage = () => {
    const [Filter, setFilter] = useState('All');

    const element = [{
        name: 'Isometric Perspective Mock-Up',
        image: image1,
        class: 'App'
    },
    {
        name: 'Time Zone App UI',
        image: image2,
        class: 'App'
    },
    {
        name: 'Viro Media Players UI',
        image: image3,
        class: 'Web'
    },
    {
        name: 'Blog / Magazine Flat UI Kit',
        image: image4,
        class: 'Icons'
        },];
    
    function changeFilter(value) {
        console.log(value)
    }


    return (
        <div className='page portfolio'>
            <Header title='OUR PORTFOLIO' text='Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam' />
            <div className='options'>
                <input type="radio" id="All" name="prject-type" value="All"></input>
                <label htmlFor="All" >ALL</label>
                <input type="radio" id="Web" name="prject-type" value="Web"></input>
                <label htmlFor="Web">WEB</label>
                <input type="radio" id="Apps" name="prject-type" value="Apps"></input>
                <label htmlFor="Apps">APPS</label>
                <input type="radio" id="Icons" name="prject-type" value="Icons"></input>
                <label htmlFor="Icons">ICONS</label>
            </div>
            <div className='list'>
                {
                    
                }
            </div>
            <BigButton text='LOAD MORE PROJECTS' background='#17c2a4'/>
        </div>
    )
}

export default PortfolioPage
