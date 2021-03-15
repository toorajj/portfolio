import { render } from '@testing-library/react';
import React from 'react';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title: 'Scroll List',
                    subTitle: 'MERN built',
                    imgSource: '',
                    link: 'https://scroll-list.netlify.app/',
                    selected: false
                },
                {
                    id:1,
                    title: 'Wayfarer',
                    subTitle: 'Python, Django, PostgreSQL',
                    imgSource: '',
                    link: 'https://project-wayfarer-sei119.herokuapp.com',
                    selected: false
                },
                {
                    id:2,
                    title: 'MediaHub',
                    subTitle: 'Node.js Powered API with Express, Mongoose & MongoDB ',
                    imgSource: '',
                    link: '',
                    selected: false
                },
                {
                    id:3,
                    title: 'Tomagotchi Project',
                    subTitle: 'JavaScript, CSS, HTML MVP Built ',
                    imgSource: '',
                    link: '',
                    selected: false
                }
            ]


        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = [id].selected ? false : true;
    
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
    
    }

    render() {
        return(
            <p> carousel works</p>
        );
    }

}

export default Carousel;