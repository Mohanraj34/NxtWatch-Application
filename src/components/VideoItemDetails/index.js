import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItemBody from '../VideoItemBody'
import NxtTubeContext from '../../context/NxtTubeContext'
import {HomeMainDiv} from './styledComponents'
import './index.css'

class Trending extends Component {
  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <NxtTubeContext.Consumer>
        {value => {
          const {isTheme} = value
          const bgColor = isTheme ? '#0f0f0f' : '#ffffff'
          const color = isTheme ? '#ffffff' : null
          return (
            <HomeMainDiv
              bgColor={bgColor}
              color={color}
              data-testid="videoItemDetails"
            >
              <Header />
              <div className="homeMainDiv">
                <SideBar />
                <div className="videoItem body-con">
                  <VideoItemBody id={id} />
                </div>
              </div>
            </HomeMainDiv>
          )
        }}
      </NxtTubeContext.Consumer>
    )
  }
}
export default Trending
