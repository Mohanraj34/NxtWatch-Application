import {Link} from 'react-router-dom'
import {Para, Para1} from './styledComponents'
import NxtTubeContext from '../../context/NxtTubeContext'
import './index.css'

const VideoItem = props => {
  const {each} = props
  const {
    id,
    publishedAt,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
  } = each
  return (
    <NxtTubeContext.Consumer>
      {value => {
        const {isTheme} = value
        const color1 = isTheme ? '#ffffff' : '#1e293b'
        const color2 = isTheme ? '#e2e8f0' : '#475569'
        return (
          <li className="cardDiv">
            <Link to={`/videos/${id}`} className="link-item">
              <img src={thumbnailUrl} className="img8" alt="video thumbnail" />
              <div className="cardDiv5v">
                <img
                  src={profileImageUrl}
                  className="img9"
                  alt="channel logo"
                />
                <div className="cardDiv3v">
                  <Para className="p3" color={color1}>
                    {title}
                  </Para>
                  <Para1 className="p3" color={color2}>
                    {name}
                  </Para1>
                  <div className="cardDiv4v">
                    <Para1 className="p4" color={color2}>
                      {viewCount}
                    </Para1>
                    <Para1 className="p4" color={color2}>
                      . {publishedAt}
                    </Para1>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        )
      }}
    </NxtTubeContext.Consumer>
  )
}
export default VideoItem
