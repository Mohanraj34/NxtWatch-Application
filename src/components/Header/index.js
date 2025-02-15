import {withRouter, Link} from 'react-router-dom'
import {BsMoon} from 'react-icons/bs'
import {BiSun} from 'react-icons/bi'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {HeaderMainDiv} from './styledComponents'
import LogoutPopup from '../LogoutPopup'
import NxtTubeContext from '../../context/NxtTubeContext'
import './index.css'

const Header = props => {
  const logoutPage = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  const cancelLogout = () => {
    const {history} = props
    history.replace('/login')
  }
  return (
    <NxtTubeContext.Consumer>
      {value => {
        const {isTheme, themeIsClicked} = value

        const themeIsClickedNow = () => {
          themeIsClicked()
        }

        const websiteLogo = isTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const bgColor = isTheme ? '#212121' : '#f9f9f9'

        return (
          <HeaderMainDiv bgColor={bgColor}>
            <Link to="/">
              <img src={websiteLogo} className="img2" alt="website logo" />
            </Link>
            <div className="div5">
              <button
                data-testid="theme"
                type="button"
                className="button3"
                onClick={themeIsClickedNow}
              >
                {isTheme ? (
                  <BiSun className="quantity-controller-icon1" />
                ) : (
                  <BsMoon className="quantity-controller-icon" />
                )}
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                className="img6"
              />
              <div className="popup-container">
                <Popup
                  modal
                  trigger={
                    <button type="button" className="button1">
                      Logout
                    </button>
                  }
                >
                  <LogoutPopup
                    logoutPage={logoutPage}
                    cancelLogout={cancelLogout}
                  />
                </Popup>
              </div>
            </div>
          </HeaderMainDiv>
        )
      }}
    </NxtTubeContext.Consumer>
  )
}
export default withRouter(Header)
