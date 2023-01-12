import React from 'react'
import './genrecard.scss'
import TheatersIcon from '@mui/icons-material/Theaters';

const Genrecard = () => {
  return (
    <div className="genrecard">
        <div className="iconPoint">
            <TheatersIcon className='icon' />
        </div>
        <div className="info">
            <p className="genre">Action</p>
            <p className="percentage">20%</p>
        </div>
    </div>
  )
}

export default Genrecard