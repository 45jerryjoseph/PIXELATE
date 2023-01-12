import React, { useState } from 'react'
import "./navbar.scss"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import MovieFilterTwoToneIcon from '@mui/icons-material/MovieFilterTwoTone';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import ProfileAccount from '../ProfileAccount/ProfileAccount';
const Navbar = ({user}) => {

    
    const [MovieModal , setMovieModal] = useState(false)
    const [SeriesModal , setSeriesModal] = useState(false)
    const [Profile, setProfile] = useState(false)
  return (
    <>
   
        <div className='navbarContainer'>
            <div className='navLeft'>
                {/* When reviewing this side create an SVG or a style logoName */}
                <p className="logo">PIXELATE</p>
            </div>
            {user? (
                <>
                    <div className="navcenter">
                        <button className="moviesTab" onClick={() => setMovieModal(!MovieModal)}>
                            <MovieFilterTwoToneIcon className='centerIcon' />
                            <span>MOVIES</span>
                        </button>
                        <button className="tvshowsTab" onClick={() => setSeriesModal(!SeriesModal)}>
                            <LiveTvTwoToneIcon className='centerIcon'/>
                            <span>TV SHOWS </span>
                        </button>
                    </div>
                    <div className="navend">
                        <div className="searchTab">
                            <input type="search" name="" id="" placeholder='Search here' />
                            <SearchOutlinedIcon className='searchIcon'/>
                        </div>
                        <div className="profile" onClick={() => setProfile (!Profile)} >
                            <AccountCircleOutlinedIcon className='accountIcon'/>
                        </div>
                    </div>
                </>
            ):(
            <div className="navRight">
                <div className="pageColor">
                    <div className="light">
                        {/* Here we are going to place the Sun icon  */}
                        <LightModeIcon/>
                    </div>
                    <div className="switch">

                    </div>
                    <div className="dark">
                        {/* Here we are going to place the moon Icon */}
                        <DarkModeRoundedIcon />
                    </div>
                </div>
                <button className="signUp">
                    <p>SIGN UP</p>
                </button>
                <button className="signIn">
                    <p>SIGN IN</p>
                </button>
            </div>
            )}
        </div>
        {
            MovieModal && (

                <div className="movieModal">
                    <div className="genreList">
                        <ul>
                            <li>Action </li>
                            <li>Adventure</li>
                            <li>Comedy</li>
                            <li>Crime</li>
                            <li>Drama</li>
                            <li>Fantasy</li>
                            <li>History</li>
                            <li>Horror</li>
                            <li>Musical</li>
                            <li>Mystery</li>
                            <li>Romance</li>
                            <li>Sci-fi</li>
                            <li>War</li>
                        </ul>
                    </div>
                    <CancelIcon  className='cancelIcon'/>

                </div>
        )}

        {
            SeriesModal && (

                <div className="seriesModal">
                    <div className="genreList">
                        <ul>
                            <li>Action </li>
                            <li>Anime</li>
                            <li>Asian</li>
                            <li>British</li>
                            <li>Comedies</li>
                            <li>Crime</li>
                            <li>Docuseries</li>
                            <li>Dramas</li>
                            <li>European</li>
                            <li>Holidays</li>
                            <li>Horror</li>
                            <li>Kids</li>
                            <li>Reality & Talk</li>
                            <li>Romance</li>
                            <li>Sci-Fi</li>
                            <li>Thriller</li>
                            <li>African</li>
                            <li>Us</li>
                            <li>Reality</li>
                            <li>Teen</li>
                            <li>Telenovela</li>
                            <li>Game Shows</li>


                        </ul>
                    </div>
                    <CancelIcon  className='cancelIcon'/>

                </div>
        )}
        { Profile && (
            <ProfileAccount />
        )}
    </>
  )
}

export default Navbar