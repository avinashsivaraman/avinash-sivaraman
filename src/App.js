import React, { useEffect } from 'react';
import { randomlySetStyle } from './constant'
import TxtType from './typewriter';
import Banner from './Banner';
import './App.css';

const App = () => {

  useEffect(() => {
    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i+=1) {
      const toRotate = elements[i].getAttribute('data-type');
      const period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    const cells = Array.from(document.querySelectorAll('.cell'))
    const heart = document.querySelector('#heart')
    const highlight = document.querySelector('.highlight')

    randomlySetStyle(cells, heart, highlight)
    window.onclick = () => randomlySetStyle(cells, heart, highlight)
    window.onmousewheel = () => randomlySetStyle(cells, heart, highlight)
  }, [])

  return (
      <div className="App">
        <Banner />
        {/* <div className="section-white-banner border-bottom-blue" /> */}
        <section className = "section-header text-center">
          <div className="header-content">
            <div className="header-img padding-right">
              <img alt="profile" className="home-photo-img" src="./profile.jpg" />
            </div>
            <div className="header">
                <div className="header-name">  I'm <span className="cursive">Avinash Sivaraman</span> </div>
                <div className="header-status">I'm a Full Stack Developer</div>
                <div className="header-hobby"> I  <i className="fas fa-heart" id="heart"></i> <div className="typewrite highlight" data-period="2000" data-type='[ "Creative Works ", "To Design  ", "To Develop ", "Working on Web Perf " ]' />
                </div>
            </div>
          </div>
          <div className="header-contact">
            <a className="remove-default header-contact-icon" href="https://www.linkedin.com/in/avinash-sivaraman/"><i className="home-icons fab fa-linkedin"></i></a>
            <a className="remove-default header-contact-icon" href="https://twitter.com/AvinashSivaram"><i className="home-icons fab fa-twitter-square"></i></a>
            <a className="remove-default header-contact-icon" href="https://github.com/avinashsivaraman"><i className="home-icons fab fa-github-square"></i></a>
            <button className="section-download-btn remove-default" href='Resume.pdf' download='Avinash-Resume'>
            <span className='mobile-hide'>Download</span>  Resume <i className="fas fa-download"></i></button>
          </div>
        </section>
      </div>
    );
}

export default App;
