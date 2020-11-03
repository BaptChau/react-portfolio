import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import { Nav, Navbar } from 'react-bootstrap';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MentionLegal from './pages/MentionLegale';



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
        <Container className="p-0" fluid={true}>
      <Router>
          <Navbar className="border-bottom" bg="transparent" expand="md">
            <Navbar.Brand>
              <Link className="navbar-brand" to="https://www.linkedin.com/in/baptiste-chaudron-61a118161/">Baptiste Chaudron</Link>
              </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav>
                <Link className="nav-link" to="/">Accueil</Link>
                <Link className="nav-link" to="/a-propos">À Propos</Link>
                <Link className="nav-link" to="/contact">Contact</Link>


              </Nav>
            </Navbar.Collapse>
          </Navbar>
                <Route path="/" exact render={() => <HomePage info={this.state.home}/>} />
                <Route path="/a-propos" exact render={() => <AboutPage info={this.state.about}/>} />
                <Route path="/contact" exact render={() => <ContactPage info={this.state.contact} />} />
                <Route path="/mention-legale" exact render={()=> <MentionLegal />} />
          <Footer />
      </Router>
        </Container>
    ]
  }
}

export default App;
