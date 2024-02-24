import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', wrongUser: false}

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserName = () => (
    <>
      <label htmlFor="userName" className="label">
        USERNAME
      </label>
      <input
        type="text"
        id="userName"
        placeholder="Username"
        className="input"
        onChange={this.onChangeUserName}
      />
    </>
  )

  renderPassword = () => (
    <>
      <label htmlFor="password" className="label">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        className="input"
        onChange={this.onChangePassword}
      />
    </>
  )

  renderLoginForm = () => {
    const {wrongUser} = this.state
    return (
      <form name="login" onSubmit="loginRequested" className="login-form">
        {this.renderUserName()}
        {this.renderPassword()}
        <button type="submit" className="login-button">
          Login
        </button>
        {wrongUser && <p className="warning-msg">*Username is not found</p>}
      </form>
    )
  }

  render() {
    const images = {
      logo: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png',
      loginImg:
        'https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png',
    }
    return (
      <div className="login-route-container">
        <img
          src={images.logo}
          alt="website logo"
          className="login-web-logo-small"
        />
        <img
          src={images.loginImg}
          alt="website login"
          className="login-image"
        />
        <div className="login-form-card">
          <img
            src={images.logo}
            alt="website logo"
            className="login-web-logo-large"
          />
          {this.renderLoginForm()}
        </div>
      </div>
    )
  }
}

export default LoginForm
