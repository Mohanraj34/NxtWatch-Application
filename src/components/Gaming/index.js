import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import GamingBody from '../GamingBody'
import NxtTubeContext from '../../context/NxtTubeContext'
import {HomeMainDiv} from './styledComponents'
import './index.css'

class Gaming extends Component {
  render() {
    return (
      <NxtTubeContext.Consumer>
        {value => {
          const {isTheme} = value
          const bgColor = isTheme ? '#0f0f0f' : '#ffffff'
          const color = isTheme ? '#ffffff' : null

          return (
            <HomeMainDiv bgColor={bgColor} color={color} data-testid="gaming">
              <Header />
              <div className="homeMainDiv">
                <SideBar />
                <div className="body-con">
                  <GamingBody />
                </div>
              </div>
            </HomeMainDiv>
          )
        }}
      </NxtTubeContext.Consumer>
    )
  }
}
export default Gaming
