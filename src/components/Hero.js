import React from 'react'
import { Col,Row, Container, Jumbotron } from 'react-bootstrap'

function Hero(props){
    let prop = props.info
    return [
    <Jumbotron className="bg-transparent jumbotron-fluid">
        <Container>
            <Row>
                <Col>
                    <h1>{prop.title}</h1>
                    {prop.subtitle ? <h2>{prop.subtitle}</h2>: ''}
                    {prop.text ? <h3>{prop.text}</h3>: ''}

                </Col>
            </Row>
        </Container>
    </Jumbotron>
    ];
}

export default Hero;