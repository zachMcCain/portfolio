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
      about: false,
      projects: false,
      contact: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.persist();
    let name = e.target.attributes.name.value;
    // console.log(this.state[name])
    this.setState({[name]: !this.state[name]})

  }

  render () {
    let about = this.state.about ? <About /> : null;
    let contact = this.state.contact ? <Contact /> : null;
    let projects = this.state.projects ? <Projects /> : null;
    return (
      <div>
        <Header/>
        <div className="collapseContainer">
          <div name="about" onClick={this.handleClick}>About</div>
          {about}
          <div name="projects" onClick={this.handleClick}>Projects</div>
          {projects}
          <span name="contact" onClick={this.handleClick}>Contact</span>
          {contact}
          {/* <Projects/> */}
          {/* <Contact/> */}
        </div>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))