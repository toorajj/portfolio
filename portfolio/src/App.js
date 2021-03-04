import react from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css';

import Footer from './components/Footer'

class App extends react.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Tooraj J',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Welcome to my portfolio page',
        subTitle: 'Developing the world',
        text: 'Projects list'
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: "Let's Talk"
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-3" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="sm">
            <Navbar.Brand>Tooraj J</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <NavbarCollapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/" >Home</Link>
                <Link className="nav-link" to="/about" >About</Link>
                <Link className="nav-link" to="/contact" >Contact</Link>
              </Nav>
            </NavbarCollapse>
          </Navbar>
          <Footer>

          </Footer>
        </Container>
      </Router>
    ); 
  }

}

export default App;
