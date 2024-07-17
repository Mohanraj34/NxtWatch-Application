import {Component} from 'react'
import HomeBody from '../HomeBody'

import Header from '../Header'
import SideBar from '../SideBar'
import Banner from '../Banner'
import {HomeMainDiv} from './styledComponents'
import NxtTubeContext from '../../context/NxtTubeContext'
import './index.css'

class Home extends Component {
  state = {isBanner: true}

  findJobButton = () => {
    const {history} = this.props
    return history.replace('/jobs')
  }

  bannerClicks = () => {
    this.setState({isBanner: false})
  }

  render() {
    const {isBanner} = this.state

    return (
      <NxtTubeContext.Consumer>
        {value => {
          const {isTheme} = value
          const bgColor = isTheme ? '#181818' : '#f1f1f1'
          const color = isTheme ? '#ffffff' : null

          return (
            <HomeMainDiv bgColor={bgColor} color={color} data-testid="home">
              <Header />
              <div className="homeMainDiv">
                <SideBar />
                <div className="body-con">
                  {isBanner ? (
                    <Banner
                      className="banDiv"
                      bannerClicks={this.bannerClicks}
                    />
                  ) : null}
                  <HomeBody />
                </div>
              </div>
            </HomeMainDiv>
          )
        }}
      </NxtTubeContext.Consumer>
    )
  }
}
export default Home
