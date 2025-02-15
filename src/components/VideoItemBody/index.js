import {Component} from 'react'
import {BiLike, BiDislike, BiSave} from 'react-icons/bi'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {Button} from './styledComponents'
import NxtTubeContext from '../../context/NxtTubeContext'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemBody extends Component {
  state = {
    videos: [],
    apiStatus: apiStatusConstants.initial,
    like: false,
    disLike: false,
  }

  componentDidMount() {
    this.makingApiCall()
  }

  renderLoadingView = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  makingApiCall = async () => {
    const {id} = this.props
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
      like: false,
      disLike: false,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = {
        videoUrl: fetchedData.video_details.video_url,
        title: fetchedData.video_details.title,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        id: fetchedData.video_details.id,
        name: fetchedData.video_details.channel.name,
        profileImageUrl: fetchedData.video_details.channel.profile_image_url,
        subscriberCount: fetchedData.video_details.channel.subscriber_count,
        viewCount: fetchedData.video_details.view_count,
      }
      this.setState({
        videos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  likeClick = () => {
    this.setState({like: true, disLike: false})
  }

  dislikeClick = () => {
    this.setState({like: false, disLike: true})
  }

  clickingRetry = () => this.makingApiCall()

  renderVideos = () => (
    <NxtTubeContext.Consumer>
      {value => {
        const {savedItems, addSaveItems} = value
        const {videos, like, disLike} = this.state
        const {
          videoUrl,
          title,
          publishedAt,
          description,
          name,
          profileImageUrl,
          subscriberCount,
          viewCount,
        } = videos

        let saving

        const index = savedItems.findIndex(e => e.id === videos.id)
        if (index === -1) {
          saving = false
        } else {
          saving = true
        }

        const likeing = like ? '#2563eb' : '#64748b'
        const disLikeing = disLike ? '#2563eb' : '#64748b'
        const savingItem = saving ? 'button22' : 'button20'
        const savingItemText = saving ? 'Saved' : 'Save'
        const onClickAddToSave = () => {
          addSaveItems(videos)
        }

        return (
          <div className="video-container">
            <div className="responsive-container">
              <ReactPlayer
                url={videoUrl}
                controls
                className="video-container1"
              />
            </div>
            <p>{title}</p>
            <div className="videoDiv1">
              <div className="videoDiv2">
                <p>{viewCount}</p>
                <p>. {publishedAt}</p>
              </div>
              <div className="videoDiv6">
                <div className="videoDiv3">
                  <Button
                    type="button"
                    color={likeing}
                    onClick={this.likeClick}
                  >
                    <BiLike className="icon12" />
                    Like
                  </Button>
                </div>
                <div className="videoDiv3">
                  <Button
                    type="button"
                    color={disLikeing}
                    onClick={this.dislikeClick}
                  >
                    <BiDislike className="icon12" /> Dislike
                  </Button>
                </div>
                <div className="videoDiv3">
                  <button
                    type="button"
                    className={savingItem}
                    onClick={onClickAddToSave}
                  >
                    <BiSave className="icon12" /> {savingItemText}
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="videoDiv10">
              <img src={profileImageUrl} alt="channel logo" className="img12" />
              <div>
                <p>{name}</p>
                <p>{subscriberCount} subscriber</p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        )
      }}
    </NxtTubeContext.Consumer>
  )

  renderVideosFailureView = () => (
    <div className="videosDiv1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="img10"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble to complete your request. Please try again.
      </p>
      <button type="button" className="button6" onClick={this.clickingRetry}>
        Retry
      </button>
    </div>
  )

  functionRendering = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideos()
      case apiStatusConstants.failure:
        return this.renderVideosFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  clickingInput = () => {
    this.makingApiCall()
  }

  render() {
    return <div> {this.functionRendering()}</div>
  }
}
export default VideoItemBody
