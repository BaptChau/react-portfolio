import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import Cards from '../components/Cards';
import Hero from '../components/Hero';
import { GrDocumentPdf, GrGithub, GrLinkedin } from "react-icons/gr";


class AboutPage extends React.Component {
    constructor(props) {
        super(props)
        const prop = props.info
        this.state = {
            info: prop
        }
    }

    since(d1) {
        var today = new Date().getMonth()
        var from = new Date(d1).getMonth()

        var month = today - from
        return "Depuis " + month + " mois"
    }


    render() {
        return [
            <Container className="mb-5">
                <Hero info={this.state.info} />
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <h3>Diplômes</h3>
                                <Cards title={"DUT Informatique"}>
                                    <Card.Subtitle>2017-2019</Card.Subtitle>
                                </Cards>
                                <Cards title={"Baccalauréat STI2D"}>
                                    <Card.Subtitle>2015-2017</Card.Subtitle>
                                </Cards>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <h3>Expériences</h3>
                                <Cards title={"Opérateur Machine - JST France"}>
                                    <Card.Subtitle>Depuis Septembre 2020 : {this.since('08/31/2020')}</Card.Subtitle>
                                </Cards>
                                <Cards title={"Développeur fullstack - Albéa Tubes France"}>
                                    <Card.Subtitle>Avril 2019 - Juin 2019 : 3 mois </Card.Subtitle>
                                </Cards>
                                <Cards title={"Ouvrier Agricole Polyvalent - SCEA Des Busards"}>
                                    <Card.Subtitle>Juin - Août : 3 mois </Card.Subtitle>
                                </Cards>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <h3>Loisir</h3>
                                <Cards title={"Handball"}>
                                    <Card.Subtitle>Joueur - Arbitre</Card.Subtitle>
                                </Cards>
                                <Cards title={"Cinéma"}>

                                </Cards>
                                <Cards title={"Sport américain"}></Cards>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="border-top mt-3" />
                <p className="text-center"><h1>Documents {"&"} Contact</h1></p>
                <Row>
                    <Col>
                        <h4>Mon CV : <a href="/cv-baptiste"><GrDocumentPdf /></a></h4>
                    </Col>
                    <Col>
                        <h4>Me trouver sur LinkedIn : <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/baptiste-chaudron-61a118161/"><GrLinkedin /></a></h4>
                    </Col>
                    <Col>
                        <h4>Me trouver sur GitHub : <a target="_blank" rel="noreferrer" href="https://github.com/BaptChau"> <GrGithub /></a></h4>
                    </Col>
                </Row>

            </Container>
        ]
    }
}

export default AboutPage;