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
                <Route path="/" exact render={() => <HomePage info={this.state.home}/>} />
                <Route path="/a-propos" exact render={() => <AboutPage info={this.state.about}/>} />
                <Route path="/contact" exact render={() => <ContactPage info={this.state.contact} />} />
                <Route path="/mention-legale" exact render={()=> <MentionLegal />} />

          
          <Footer />
        </Container>
      </Router>
    ]
  }
}

export default App;
