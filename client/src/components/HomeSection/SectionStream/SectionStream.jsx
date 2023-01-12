import React from 'react'
import './sectionStream.scss'
import TvIcon from '@mui/icons-material/Tv';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletIcon from '@mui/icons-material/Tablet';
import LanguageIcon from '@mui/icons-material/Language';

const SectionStream = () => {
  return (
    <div className="streamPlatforms">
        <h2>STREAMING AT YOUR COMFORT</h2>
        <div className="lower">
            <div className="left">
                <button className="pdevice"> <div className="iconContainer"><TvIcon className='icon' /></div> Connected Tv</button>
                <button className="pdevice"> <div className="iconContainer"><PhoneIphoneIcon className='icon' /></div>Mobile</button>
                <button className="pdevice"><div className="iconContainer"><TabletIcon className='icon' /></div> Tablet</button>
                <button className="pdevice"><div className="iconContainer"><LanguageIcon className='icon' /></div> Web</button>
            </div>
            <div className="right">

            </div>
        </div>
    </div>
  )
}

export default SectionStream