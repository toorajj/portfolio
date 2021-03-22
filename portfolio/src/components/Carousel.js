import React from 'react';

import comingSoon from '../assets/images/comingSoon.jpg'
import { Container, Row } from 'react-bootstrap';
import Card from '../components/Card';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title: 'Scroll List',
                    subTitle: 'MERN built',
                    imgSource: comingSoon,
                    link: 'https://scroll-list.netlify.app/',
                    selected: false
                },
                {
                    id:1,
                    title: 'Wayfarer',
                    subTitle: 'Python, Django, PostgreSQL',
                    imgSource: comingSoon,
                    link: 'https://project-wayfarer-sei119.herokuapp.com',
                    selected: false
                },
                {
                    id:2,
                    title: 'MediaHub',
                    subTitle: 'Node.js Powered API with Express, Mongoose & MongoDB ',
                    imgSource: comingSoon,
                    link: '',
                    selected: false
                },
                {
                    id:3,
                    title: 'Tomagotchi Project',
                    subTitle: 'JavaScript, CSS, HTML MVP Built ',
                    imgSource: comingSoon,
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

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        });
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>

            </Container>
        );
    }

}

export default Carousel;