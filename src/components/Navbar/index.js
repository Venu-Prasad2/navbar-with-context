import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isBlack, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const themeImage = isBlack
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const logoImage = isBlack
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const navBgColorClass = isBlack ? 'nav-bg-dark' : 'nav-bg-light'
      const navItemClass = isBlack
        ? 'list-text-dark-theme'
        : 'list-text-light-theme'

      return (
        <div className={`navbar ${navBgColorClass}`}>
          <div className="nav-content">
            <img src={logoImage} className="website-logo" alt="website logo" />
            <ul className="list-items">
              <li className="each-item">
                <Link to="/" className={`link ${navItemClass}`}>
                  Home
                </Link>
              </li>
              <li className="each-item">
                <Link to="/about" className={`link ${navItemClass}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              className="theme-button"
              data-testid="theme"
              type="button"
              onClick={onToggleTheme}
            >
              <img src={themeImage} className="theme-image" alt="theme" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
