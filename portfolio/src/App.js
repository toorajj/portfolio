import react from 'react';
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

      },
      
    }
  }
  render() {
    return (
      <div> hello </div>
    ); 
  }

}

export default App;
