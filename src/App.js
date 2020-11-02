import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import { Nav, Navbar } from 'react-bootstrap';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'Baptiste Chaudron',
      header_link: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/a-propos'},
        {title: 'Contact', path: '/contact'},
      ],
      home:{
        title: 'Soyer implacable',
        subtitle: 'Les projets font la différence',
        text:'Jetez un oeil à mes projets'
      },
      about:{
        title: 'À propos de moi'
      }
      ,
      contact:{
        title: 'Parlons !'
      }
    }
  }

  render(){
    return [
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="md">
            <Navbar.Brand>Baptiste Chaudron</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav>
                <Link className="nav-link" to="/">Accueil</Link>
                <Link className="nav-link" to="/a-propos">À Propos</Link>
                <Link className="nav-link" to="/contact">Contact</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>
    ]
  }
}

export default App;
