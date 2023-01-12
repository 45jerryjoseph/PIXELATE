import React from 'react'
import Filmcard from '../../components/FilmCard/Filmcard'
import Sidebar from '../../components/Sidebar/Sidebar'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './tvshows.scss'

const Tvshows = () => {
  return (
    <div className="tvShows">
         <Sidebar />
        <div className="tvShowsArea">
            
            <div className="title">
                <p>Tv Shows List</p>
                <div className="searchTab">
                    <input type="search" name="" id="" placeholder='Search here' />
                    <SearchOutlinedIcon className='searchIcon'/>
                </div>
            </div>

           <div className="lower">
            {/* This is another div container below  */}
                <Filmcard />
                <Filmcard />
                <Filmcard />
                <Filmcard />
                <Filmcard />
                <Filmcard />


               
           </div>

        </div>
    </div>
  )
}

export default Tvshows