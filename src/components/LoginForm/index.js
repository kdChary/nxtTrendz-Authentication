import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', wrongUser: false, errorMsg: ''}

  submitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  loginRequested = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.submitSuccess()
    } else {
      this.setState({wrongUser: true, errorMsg: data.error_msg})
    }
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
    const {wrongUser, errorMsg} = this.state
    return (
      <form name="login" onSubmit={this.loginRequested} className="login-form">
        {this.renderUserName()}
        {this.renderPassword()}
        <button type="submit" className="login-button">
          Login
        </button>
        {wrongUser && <p className="warning-msg">{`*${errorMsg}`}</p>}
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
