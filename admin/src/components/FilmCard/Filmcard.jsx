import React from 'react'
import './filmcard.scss'
import EditIcon from '@mui/icons-material/Edit';

const Filmcard = () => {
  return (
    <div className="filmCard">
         <div className="movie_card" id="bright">
                    <div className="blur_back bright_back">
                        <img src="https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg" alt="" />
                    </div>
                    <div className="info_section">
                        <div className="movie_header">
                            <img className="locandina" src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg" alt=""/>
                            <h1>Bright</h1>
                            <h4>2017, David Ayer</h4>
                            <span className="minutes">117 min</span>
                            <span className="limit">18 +</span>
                            <p className="type">Action, Crime, Fantasy</p>
                        </div>
                        <div class="movie_desc">
                            <p className="text">
                                Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for. 
                            </p>
                            <p className="best_quote">
                              <span>Best Quote:</span>  A Jack of all trades is a Master of none. But oftentimes Better than a Master of One.
                            </p>
                        </div>
                        <div class="movie_tabs">
                            <button className="left">
                                Watch Trailer
                            </button>
                            <button className="right"><EditIcon /></button>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default Filmcard