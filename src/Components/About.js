import React from 'react'
import '../css/App.css'
import grace from '../img/grace.JPG';


function About() {

  const sendEmail = () => {
    let mailto = `mailto:grace.aranico@gmail.com`
    window.open(mailto);
  }
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
            

            <a href="https://drive.google.com/file/d/1A2iXGhzl5e_zhKXYGQa70EbrqobxErkF/view?usp=sharing" target="_blank" rel="noreferrer">
              <div className="button">
                <button>
                  <p className="font-roboto">view my resume</p>
                </button>
              </div>
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
              <i className="fab fa-html5 skill-icon">
                <p className="skill-text font-roboto">HTML</p>
              </i>
            </div>

            <div className="icon-container">
              <i className="fab fa-css3-alt skill-icon">
                <p className="skill-text font-roboto">CSS</p>
              </i>
            </div>

            <div className="icon-container">
              <i className="fab fa-js-square skill-icon">
                <p className="skill-text font-roboto">JavaScript</p>
              </i>
            </div>

            <div className="icon-container">
              <i className="fab fa-react skill-icon">
                <p className="skill-text font-roboto">React</p>
              </i>
            </div>

            <div className="icon-container">
              <i className="fab fa-git-square skill-icon">
                <p className="skill-text font-roboto">Git</p>
              </i>
            </div>

            <div className="icon-container">
              <i className="fab fa-github skill-icon">
                <p className="skill-text font-roboto">GitHub</p>
              </i>
            </div>

            <div className="icon-container">
              <i className="far fa-chart-bar skill-icon">
                <p className="skill-text font-roboto">Google Analytics</p>
              </i>
            </div>

            <div className="icon-container">
              <i className="fas fa-search skill-icon">
                <p className="skill-text font-roboto">Google Ads</p>
              </i>
            </div>

            <div className="icon-container">
              <i className="fab fa-facebook-square skill-icon">
                <p className="skill-text font-roboto">Facebook Business Manager</p>
              </i>
            </div>

            <div className="icon-container">
              <i className="fab fa-linkedin-in skill-icon">
                <p className="skill-text font-roboto">LinkedIn Ads</p>
              </i>
            </div>

            <div className="icon-container">
              <i className="fas fa-desktop skill-icon">
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
                <button onClick={sendEmail}>
                  <p className="font-roboto">email me</p>
                </button>
              </div>

              <div className="social-icons">
                <a href="https://github.com/garanico" target="_blank" rel="noreferrer">
                  <i className="fab fa-github-square"></i>
                </a>

                <a href="https://linkedin.com/in/gracearanico/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>

                <a href="https://instagram.com/gracieissoamzin" target="_blank" rel="noreferrer">
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