import React from 'react';
import Hero from '../components/Hero';
import photo from '../assets/avatar-gratuit.png'
import { Row, Col, Container } from 'react-bootstrap';
function HomePage(props) {
    let prop = props.info
    return [
        <Container className="mt-5">
            <Row>
                <Col>
                    <Hero info={prop} />
                </Col>
                <Col>
                    <img src={photo} alt="moi" width="250" height="250" />
                </Col>
            </Row>

        </Container>

    ]
}

export default HomePage;