import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  const imageUrls = {
    navCart:
      'https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png',
    navHome:
      'https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png',
    navLogout:
      'https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png',
    navProducts:
      'https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png',
    webLogo: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png',
  }

  return (
    <nav className="navbar">
      <div className="small-devices-nav-header">
        <img
          src={imageUrls.webLogo}
          alt="website logo"
          className="navbar-web-logo"
        />
        <ul className="nav-options-large">
          <Link to="/" className="navbar-option-link">
            <li>
              <p className="nav-option">Home</p>
            </li>
          </Link>
          <Link to="/products" className="navbar-option-link">
            <li>
              <p className="nav-option">Products</p>
            </li>
          </Link>
          <Link to="/cart" className="navbar-option-link">
            <li>
              <p className="nav-option">Cart</p>
            </li>
          </Link>
          <Link to="/login" className="navbar-option-link">
            <li>
              <button className="logout-button" type="button">
                Logout
              </button>
            </li>
          </Link>
        </ul>
        <Link to="/login" className="navbar-logout-link">
          <img
            src={imageUrls.navLogout}
            alt="nav logout"
            className="nav-logo"
          />
        </Link>
      </div>
      <ul className="small-devices-nav-footer">
        <Link to="/" className="navbar-link">
          <li>
            <img src={imageUrls.navHome} alt="nav home" className="nav-logo" />
          </li>
        </Link>
        <Link to="/products" className="navbar-link">
          <li>
            <img
              src={imageUrls.navProducts}
              alt="nav products"
              className="nav-logo"
            />
          </li>
        </Link>
        <Link to="/cart" className="navbar-link">
          <li>
            <img src={imageUrls.navCart} alt="nav cart" className="nav-logo" />
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Header
