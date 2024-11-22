import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isBlack} = value

      const aboutBgClassName = isBlack ? 'about-bg-dark' : 'about-bg-light'

      const aboutImage = isBlack
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutText = isBlack ? 'light-text' : 'dark-text'
      return (
        <div className={`about-background ${aboutBgClassName}`}>
          <Navbar />
          <div className="about-bg-container">
            <div className="about-container">
              <img src={aboutImage} className="about-image" alt="about" />
              <h1 className={`about-heading ${aboutText}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
