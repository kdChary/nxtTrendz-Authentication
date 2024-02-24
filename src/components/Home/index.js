import './index.css'
import Header from '../Header'

const Home = () => {
  const homeImageUrl =
    'https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png'
  const imageAlt = 'clothes that get you noticed'
  const homeDescription =
    'Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way.'

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-container-small-devices">
          <h1 className="home-title">Clothes That Get You Noticed</h1>
          <img src={homeImageUrl} alt={imageAlt} className="home-image" />
          <p className="home-description">{homeDescription}</p>
          <button type="button" className="home-button">
            Shop Now
          </button>
        </div>
        <img src={homeImageUrl} alt={imageAlt} className="home-image-large" />
      </div>
    </>
  )
}

export default Home
