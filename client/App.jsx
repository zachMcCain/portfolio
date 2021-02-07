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
    this.state = {
      projects: false,
      contact: false
    }
  }

  handleClick (e) {
    e.persist();
    console.log(e.target.value);
    // this.setState({e.target.innerHTML: })
  }

  render () {
    let contact = this.state.contact ? <Contact /> : null;
    let projects = this.state.projects ? <Projects /> : null;
    return (
      <div>
        <Header/>
        <About/>
        <span onClick={this.handleClick} value="projects">Projects</span>
        {projects}
        <span>Contact</span>
        {contact}
        {/* <Projects/> */}
        {/* <Contact/> */}
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))