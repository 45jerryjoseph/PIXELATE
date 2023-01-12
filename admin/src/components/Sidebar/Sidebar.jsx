import React from 'react'
import './sidebar.scss'
import GridViewIcon from '@mui/icons-material/GridView';
import GroupIcon from '@mui/icons-material/Group';
import TheatersIcon from '@mui/icons-material/Theaters';
import MovieFilterTwoToneIcon from '@mui/icons-material/MovieFilterTwoTone';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logoName">
          <p className="logo">PIXELATE</p>
        </div>
        <div className="dehaze">
          <DehazeOutlinedIcon className='dehazeIcon'/>
        </div>
      </div>
      <div className="center">
        <ul>
          <li><GridViewIcon  className='icon' /> <span>DASHBOARD</span></li>
          <li><GroupIcon  className='icon'/> <span>USERS</span></li>
          <li><TheatersIcon  className='icon'/> <span>CATALOG</span></li>
          <li><MovieFilterTwoToneIcon  className='icon'/> <span>MOVIES</span></li>
          <li><LiveTvTwoToneIcon className='icon' /> <span>TV SHOWS</span></li>
          <li><CommentOutlinedIcon  className='icon'/> <span>COMMENTS</span></li>
          <li className='new'><AddCircleOutlineOutlinedIcon  className='icon'/> <span>NEW</span></li>
            <div className="newTab">
              <ul>
                <li><PersonAddAlt1OutlinedIcon  className='icon'/> <span>CREATE USER</span></li>
                <li><AddCircleOutlineOutlinedIcon  className='icon'/> <span>CREATE FILM</span></li>
              </ul>
            </div>
        </ul>
      </div>
      <div className="bottom">
        <div className="adImage">
          <AccountCircleSharpIcon className='accountIcon'/>
        </div>
        <div className="adDetails">
          <p className="role">Admin</p>
          <p className="name">Jerry Obora</p>
        </div>
        <button className="logout">
          <LogoutOutlinedIcon className='logoutIcon' />
        </button>

      </div>
    </div>
  )
}

export default Sidebar