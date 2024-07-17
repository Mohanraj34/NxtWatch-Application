import {Link} from 'react-router-dom'
import {Para} from './styledComponents'
import NxtTubeContext from '../../context/NxtTubeContext'
import './index.css'

const GamingItem = props => {
  const {each} = props
  const {id, title, thumbnailUrl, viewCount} = each
  return (
    <NxtTubeContext.Consumer>
      {value => {
        const {isTheme} = value
        const color1 = isTheme ? '#ffffff' : '#1e293b'
        return (
          <Link to={`/videos/${id}`} className="link-item">
            <li className="cardDiv2">
              <img src={thumbnailUrl} className="img14" alt="video thumbnail" />
              <Para className="p3" color={color1}>
                {title}
              </Para>
              <Para className="p3" color={color1}>
                {viewCount}
              </Para>
            </li>
          </Link>
        )
      }}
    </NxtTubeContext.Consumer>
  )
}
export default GamingItem
