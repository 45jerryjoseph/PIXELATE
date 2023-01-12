import React, { useState } from 'react'
import './listItem.scss'
import InfoIcon from '@mui/icons-material/Info';
const ListItem = () => {
  const [IsHovered, setIsHovered] = useState(false);
  return (
    <> 
        <div className="listItem" onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)}>
            {/* <img src=" */}
            <img src="https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/the-big-4-2022/large_the-big-4-movie-poster-2022.jpg" alt="" />

            {IsHovered && (
              <>
              <div className="isHovered">

                <div className="movieName">
                  <p>The Big 4</p>
                </div>
                <div className="progressBar">
                  *************************
                </div>
                <div className="details">
                  <p className="genre">Action,Comedy</p>
                  <p className="duration"> 1hr 20min</p>
                  <p className="limit"> GE </p>
                </div>
                <div className="description">
                  <p>The reunite of a Family when one of them (Dina) is in danger due to the past of the father.Therefore they come together to eliminate the threat </p>
                </div>
                <button className="moreDetails"><InfoIcon  className='infoIcon'/> More Details</button>
              </div>
              </>
            )}
        </div>
    </>
  )
}

export default ListItem