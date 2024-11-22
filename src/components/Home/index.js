import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isBlack} = value

      const homeBgClassName = isBlack ? 'home-bg-dark' : 'home-bg-light'

      const homeImage = isBlack
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const homeText = isBlack ? 'light-text' : 'dark-text'
      return (
        <div className={`home-background ${homeBgClassName}`}>
          <Navbar />
          <div className="home-bg-container">
            <div className="home-container">
              <img src={homeImage} className="home-image" alt="home" />
              <h1 className={`home-heading ${homeText}`}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
