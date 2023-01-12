import React from 'react'
import './profileAccount.scss';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ProfileCard from '../ProfileCard/ProfileCard';
const ProfileAccount = () => {
  return (
    <div className="profileAccount">
        <div className="account">
            <h2><PersonIcon /> Profile/Account</h2>
            <hr />
            <div className="frame">
                <ProfileCard />
            </div>
            <button className="edit"><EditIcon className='editIcon' />Edit</button>
        </div>
        <hr />
        <div className="lower">
            <p><SettingsIcon className='pIcon'/> My Watchlist <ArrowRightIcon className='arrowIcon' /></p><hr />
            <p><PlaylistAddCheckIcon className='pIcon'/> App Setting <ArrowRightIcon className='arrowIcon' /></p><hr />
            <p><DownloadIcon className='pIcon'/> Downloads <ArrowRightIcon className='arrowIcon' /></p><hr />
            <button className="signOut">Sign Out </button>
        </div>
        <hr />
        <div className="conditions">
            <div className="left">
                <p>Terms of Service</p>
            </div>
            <div className="right">
                <p>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileAccount