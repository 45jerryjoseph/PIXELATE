import React from 'react'
import './register.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppleIcon from '@mui/icons-material/Apple';
const Register = () => {
  return (
    <div className="registerModal">
        <div className="register">
            <h2>Create an Account </h2>
            <p>Sign Up with:</p>
            <div className="icons">
                <FacebookIcon  className='icon'/>
                <GoogleIcon className='icon' />
                <TwitterIcon className='icon' />
                <GitHubIcon className='icon' />
                <AppleIcon className='icon' />

            </div>
            <div className="separator">
                <span>or</span>
            </div>
            <p>Continue with Email/Password:</p>
            <div className="form">
                <div className="names">
                    <input type="text" name="fName" id="" placeholder='First Name' />
                    <input type="text" name="LName" id="" placeholder='Last Name' />
                </div>
                <input type="email" name="email" id="" placeholder='Email Address'/>
                <br />
                <input type="password" name="password" id="" placeholder='password'/>
            </div>
            <button className="signUp">
                <p>SIGN UP</p>
            </button>
            <input type="checkbox" name="policy" id="" className='checkbox' />
            <label htmlFor="policy">I have read and understood pixelate Privacy Policy and i accept pixelate Terms  and Conditions.</label>
            <p>Already having an Account? <span className='span'>Sign In</span></p>
        </div>
    </div>
  )
}

export default Register