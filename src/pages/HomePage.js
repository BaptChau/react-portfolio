import React from 'react';
import Hero from '../components/Hero';
import photo from '../assets/avatar-gratuit.png'
import { Row, Col, Container, CardDeck } from 'react-bootstrap';
import Cards from '../components/Cards';
function HomePage(props) {
    let prop = props.info
    var mjv = "Site internet complet d'un club de hand. Fait avec HTML/CSS/Bootstrap pour le front-end et PHP7/composer/MySql/PhpMyAdmin pour le backend."
    var gentle = "Site internet complet d'un club de hand. Fait avec HTML/CSS/Bootstrap pour le front-end et PHP7/composer/MySql/PhpMyAdmin pour le backend."
    var blocage = "Application interne de blocage de lots de produits au sein de l'usine du format Ms Access au format web projet en natif pur aucun framework n'as éte utilisé. Projet avec une connexion LDAP"
    
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
            <Row className="mb-5">
                <Col>
                    <CardDeck>
                        <Cards img="https://via.placeholder.com/150 " title={"Site Mj Vaubécourt"} more={mjv}>Site du club de hand de Vaubécourt. Projet disponible sur Github</Cards>
                        <Cards img="https://via.placeholder.com/150 " title={"Gentle Sport"} more={gentle}>Site d'information sportif. Projet disponible sur Github (Projet en cours)</Cards>
                        <Cards img="https://via.placeholder.com/150 " title={"Apllication de gestion des blocages"} more={blocage}>Projet de stage, convertion d'une application Ms Access vers le format web</Cards>
                    </CardDeck>
                </Col>
            </Row>
        </Container>

    ]
}

export default HomePage;