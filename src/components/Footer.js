import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer(){
   
    return [
        <Container fluid={true} className="footer-copyright ">
            <Row className="border-top justify-content-between p-3 ">
                <Col className="p-0" md={3} sm={12}>Baptiste Chaudron</Col>
                <Col className="p-0" md={3} sm={12}>
                <Link to="/mention-legale">Mention Légale</Link>
                </Col>
                <Col className="p-0 d-flex justify-content-end" md={3} sm={12}>Réalisé par Baptiste Chaudron</Col>
            </Row>
        </Container>
    ]
}

export default Footer;