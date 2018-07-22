import React, { Component } from 'react';
import TxtType from './typewriter';
import './App.css';

class App extends Component {

  
  componentDidMount() {
    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i+=1) {
      const toRotate = elements[i].getAttribute('data-type');
      const period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="section-white-banner border-bottom-blue" />
        <section className = "section-header text-center">
          <div className="header-img">
            <img alt="profile" className="home-photo-img" src="./profile.jpg" />
          </div>
          <div className="header-content">
            <div className="header-greating padding-right border-right"> Hello <span className="highlight-word"> !!! </span> </div>
            <div className="padding-left">
                <div className="header-name">  I'm Avinash Sivaraman </div>
                <div className="header-status">I'm a Full Stack Developer</div>
                <div className="header-hobby"> I  <span role="img">💜 </span> <div className="typewrite highlight" data-period="2000" data-type='[ "Creative Works ‍💻", "To Design ✏️ ", "To Develop 💻 ", "Working on Web Perf 👌" ]' />
                </div>
            </div>
          </div>
          <div className="header-contact">
            <a className="remove-default header-contact-icon" href="https://www.linkedin.com/in/avinash-sivaraman-a456a56b/"><i className="home-icons fab fa-linkedin"></i></a>
            <a className="remove-default header-contact-icon" href="https://twitter.com/AvinashSivaram"><i className="home-icons fab fa-twitter-square"></i></a>
            <a className="remove-default header-contact-icon" href="https://github.com/avinashsivaraman"><i className="home-icons fab fa-github-square"></i></a>
            <a className="section-download-btn" href='Resume.pdf' download='Avinash-Resume'>
            <span className='mobile-hide'>Download</span>  Resume<i className="fas fa-download"></i></a>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
