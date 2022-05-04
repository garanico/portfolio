import React from 'react'

//css files
import '../css/layout.css'
// import darkModeCSS from '../css/darkMode.css'
import grace from '../img/grace.JPG';


function About({ checked }) {
  return (
    <main id="about">

      {/* About Me Section */}
        <section className="about-me">
          <div className="about-text">
            <h1 className="font-playfair">about me</h1>
            
            <p>
              I'm a front-end developer with a background in digital marketing and project management.  My 10+ years in digital marketing has shaped how I approach programming.
            </p>

            <p>
              It's important to me that technology nurtures community, inclusivity, and knowledge.  My goal is to make beautifully designed applications that create meaningful change in people's lives.
            </p>

            <p>
              Outside of coding, you can find me spending time with my family, my pup Bruno, and exploring new skills.  My latest venture is learning how to skateboard.
            </p>
            

            <a href="https://drive.google.com/file/d/1RsI_5HCSWTqrTA7DTv2oCfuk8UaTs-Oa/view?usp=sharing" target="_blank" rel="noopener">
              <button>
                view my resume
              </button>
            </a>
          </div>

          <div className="about-photo">
            <img className="about-photo" src={grace} alt="Grace Aranico's headshot" />
          </div>
        </section>

        <section className="skills">
          <h2 className="font-playfair">Skills</h2>

          <div className="skills-icons">
            <div className="icon-container">
              <i class="fab fa-html5 skill-icon">
                <p className="skill-text font-roboto">HTML</p>
              </i>
            </div>

            <div className="icon-container">
              <i class="fab fa-css3-alt skill-icon">
                <p className="skill-text font-roboto">CSS</p>
              </i>
            </div>

            <div className="icon-container">
              <i class="fab fa-js-square skill-icon">
                <p className="skill-text font-roboto">JavaScript</p>
              </i>
            </div>

            <div className="icon-container">
              <i class="fab fa-react skill-icon">
                <p className="skill-text font-roboto">React</p>
              </i>
            </div>

            <div className="icon-container">
              <i class="fab fa-git-square skill-icon">
                <p className="skill-text font-roboto">Git</p>
              </i>
            </div>

            <div className="icon-container">
              <i class="fab fa-github skill-icon">
                <p className="skill-text font-roboto">GitHub</p>
              </i>
            </div>

            <div className="icon-container">
              <i class="far fa-chart-bar skill-icon">
                <p className="skill-text font-roboto">Google Analytics</p>
              </i>
            </div>

            <div className="icon-container">
              <i class="fas fa-search skill-icon">
                <p className="skill-text font-roboto">Google Ads</p>
              </i>
            </div>

            <div className="icon-container">
              <i class="fab fa-facebook-square skill-icon">
                <p className="skill-text font-roboto">Facebook Business Manager</p>
              </i>
            </div>

            <div className="icon-container">
              <i class="fab fa-linkedin-in skill-icon">
                <p className="skill-text font-roboto">LinkedIn Ads</p>
              </i>
            </div>

            <div className="icon-container">
              <i class="fas fa-desktop skill-icon">
                <p className="skill-text font-roboto">Programmatic Display</p>
              </i>
            </div>

          </div>
        </section>

        <section className="contact">
          <div className="contact-text">
            <p>
              If you ever want to have a fun discussion about Harry Potter or just want a quick chat, you can find me on social media or you can send me an email.  
            </p>

            <div className="contact-links">
              <div className="button">
                <button>
                  email me
                </button>
              </div>

              <div className="social-icons">
                <a href="https://github.com/garanico" target="_blank" rel="noopener">
                  <i className="fab fa-github-square"></i>
                </a>

                <a href="https://linkedin.com/in/gracearanico/" target="_blank" rel="noopener">
                  <i className="fab fa-linkedin"></i>
                </a>

                <a href="https://instagram.com/gracieissoamzin" target="_blank" rel="noopener">
                  <i className="fab fa-instagram"></i>
                </a>  
              </div>
            </div>
          </div>

        </section>



    
    </main>
  )
}

export default About