import react from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

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
          <Navbar className="border-bottom">
            <Navbar.Brand>Tooraj J</Navbar.Brand>
          </Navbar>
        </Container>
      </Router>
    ); 
  }

}

export default App;
