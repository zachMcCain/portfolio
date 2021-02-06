import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))