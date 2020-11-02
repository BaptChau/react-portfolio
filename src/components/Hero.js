import React from 'react'
import { Col,Row, Container, Jumbotron } from 'react-bootstrap'

function Hero(props, Children){
    let prop = props.info
    return [
    <Jumbotron className="bg-transparent jumbotron-fluid text-center">
        <Container>
            <Row>
                <Col>
                    <h1>{prop.title}</h1>
                    {prop.subtitle ? <cite>{prop.subtitle}</cite>: ''}
                    {prop.text ? <h5>{prop.text}</h5>: ''}
                </Col>
            </Row>
        </Container>
    </Jumbotron>
    ];
}

export default Hero;