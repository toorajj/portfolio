import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Row, Col } from 'react-bootstrap'

function Hero () {

    return(
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                    this works
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;