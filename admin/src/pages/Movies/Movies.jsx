import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import './movies.scss'
import Filmcard from '../../components/FilmCard/Filmcard';
const Movies = () => {
  return (
    <div className="movies">
        <Sidebar />
        <div className="movieArea">
            
            <div className="title">
                <p>Movies List</p>
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

export default Movies