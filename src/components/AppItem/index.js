// Write your code h
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl, category} = appDetails

  return (
    <>
      <li className="app-item-conatiner">
        <div className="app-details-container ">
          <img src={imageUrl} alt={appName} className="app-item-image" />
          <p className="app-item-title">{appName}</p>
        </div>
      </li>
    </>
  )
}
export default AppItem
