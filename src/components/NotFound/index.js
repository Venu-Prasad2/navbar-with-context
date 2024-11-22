import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isBlack} = value
      const notFoundBgClass = isBlack
        ? 'not-found-bg-dark'
        : 'not-found-bg-light'
      const notFoundHeading = isBlack
        ? 'not-found-heading-light'
        : 'not-found-heading-dark'
      const notFoundPara = isBlack
        ? 'not-found-para-light'
        : 'not-found-para-dark'
      return (
        <div className={`bg ${notFoundBgClass}`}>
          <Navbar />
          <div className="not-found-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="not-found-img"
              alt="not found"
            />
            <div className="text">
              <h1 className={`heading ${notFoundHeading}`}>Lost Your Way?</h1>
              <p className={`para ${notFoundPara}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
