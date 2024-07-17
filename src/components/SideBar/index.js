import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire, AiOutlineSave} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {SideBarMainDiv, List, P} from './styledComponents'
import NxtTubeContext from '../../context/NxtTubeContext'
import './index.css'

const SideBar = () => (
  <NxtTubeContext.Consumer>
    {value => {
      const {isTheme} = value
      const bgColor = isTheme ? '#212121' : '#f9f9f9'
      const color = isTheme ? '#ffffff' : '#1e293b'

      console.log(color)

      return (
        <SideBarMainDiv bgColor={bgColor}>
          <ul className="navDiv">
            <List key="Home" color={color}>
              <Link to="/" className="iconsDiv">
                <AiFillHome className="icons" />
                <P color={color}>Home</P>
              </Link>
            </List>
            <List key="Trending" color={color}>
              <Link to="/trending" className="iconsDiv">
                <AiFillFire className="icons" />
                <P color={color}>Trending</P>
              </Link>
            </List>
            <List key="Gaming" color={color}>
              <Link to="/gaming" className="iconsDiv">
                <SiYoutubegaming className="icons" />
                <P color={color}>Gaming</P>
              </Link>
            </List>
            <List key="Saved Videos" color={color}>
              <Link to="/saved-videos" className="iconsDiv">
                <AiOutlineSave className="icons" />
                <P color={color}>Saved Videos</P>
              </Link>
            </List>
          </ul>
          <div className="bottom-con">
            <p className="h4">CONTACT US</p>
            <div className="socialMediaDiv">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
                className="img7"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
                className="img7"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
                className="img7"
              />
            </div>
            <p className="p2">
              Enjoy! Now to see your channels and recommendations!
            </p>
          </div>
        </SideBarMainDiv>
      )
    }}
  </NxtTubeContext.Consumer>
)

export default SideBar
