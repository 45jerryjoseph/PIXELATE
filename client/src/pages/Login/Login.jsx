import React from 'react'
import './login.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppleIcon from '@mui/icons-material/Apple';
import EmailIcon from '@mui/icons-material/Email';
const Login = () => {
  return (
    <div className="loginModal">
        <div className="login">
            <h2>Sign In :</h2>
            <div className="icons">
              <button className='buttonIcon'>
                <AppleIcon className='icon' />
                <span>Sign in with Apple</span>
              </button>
              <button className="buttonIcon">
                <FacebookIcon  className='icon'/>
                <span>Sign In with Facebook</span>
              </button>
              <button className="buttonIcon">
                <GoogleIcon className='icon' />
                <span>Sign In with Google</span>
              </button>
              <button className="buttonIcon">
                <TwitterIcon className='icon' />
                <span>Sign In with Twitter</span>
              </button>
              <button className="buttonIcon">
                <GitHubIcon className='icon' />
                <span>Sign In with Github</span>

              </button>
              <button className="buttonIcon">
                <EmailIcon className='icon' />
                <span>Sign In with Email</span>

              </button>

            </div>
        </div>
        <div className='emailModal'>
          <p>Sign In with Email</p>
          <label htmlFor="email">Email:</label> <br />
          <input type="email" name="email" id=""  placeholder='Email Address'/>
          <div className="buttons">
            <button className="cancel">
              <p>Cancel</p>
            </button>
            <button className="next">
              <p>Next</p>
            </button>
          </div>
        </div>
        <div className='passwordModal'>
          <p>Sign In with Email</p>
          <label htmlFor="password">Password:</label> <br />
          <input type="password" name="password" id=""  placeholder='Password'/>
          <div className="buttons">
            <button className="cancel">
              <p>Cancel</p>
            </button>
            <button className="next">
              <p>Finish</p>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Login