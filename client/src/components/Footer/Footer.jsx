import React from 'react'
import './footer.scss'
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MoodIcon from '@mui/icons-material/Mood';

const Footer = () => {
  return (
    <div className="Footer">
        <div className='footerUp'>
            <div className="company">
                <h3>Company</h3>
                <p className='pFooter'>About Us</p>
                <p className='pFooter'>Contact Us</p>
                <p className='pFooter'>Terms of use</p>
                <p className='pFooter'>Privacy Policy</p>
            </div>
            <div className="resources">
                <h3>Resources</h3>
                <p className='pFooter'>Support</p>
                <p className='pFooter'>Article</p>
                <p className='pFooter'>Forums</p>
                <p className='pFooter'>News Update</p>
                <p className='pFooter'>Help/FAQ</p>
            </div>
            <div className='center'>
                {/* When reviewing this side create an SVG or a style logoName */}
                <p className="logo">PIXELATE</p>
            </div>
            <div className="connect">
                <h3>Connect with Us</h3>
                <p className='pFooter'><TwitterIcon className='icon' style={{"color":"blue"}}/>Twitter</p>
                <p className='pFooter'><YouTubeIcon className='icon' style={{"color":"red"}}/>Youtube</p>
                <p className='pFooter'><InstagramIcon className='icon' style={{"color":"purple"}} /> Instagram</p>
                <p className='pFooter'> <LinkedInIcon className='icon' style={{"color":"blue"}} />Linkdin</p>
                <p className='pFooter'> <MoodIcon className ='icon' style={{"color":"light blue"}} />Discord</p>
            </div>
            <div className="selection">
                <h3>Watch Selection</h3>
                <p className='pFooter'>Random Pick</p>
                <p className='pFooter'>Reccomendation</p>
                <p className='pFooter'>Watchlist</p>
                
            </div>
        </div>
        <div className="footerLower">
            <p>Copyright 2023 Pixelate </p>
        </div>
    </div>
  )
}

export default Footer