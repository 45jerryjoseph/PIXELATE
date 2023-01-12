import React from 'react'
import Divider from '../SecDivider/Divider'
import './sectionInfo.scss'

const SectionInfo = () => {
  return (
    <div className='sectionInfo'>
        <div className="sectionA">
            <div className="left">
                {/* This heading below should have a transition from left to right */}
                <h2>STREAM YOUR IMAGINATION MAKE THEM REALITY</h2>
                <p>Great things unvail only after when we find the door take a chance and open it.<br/> 
                Just Sign Up then wait to be Amazed on what you discover on the other side.</p>
                <button className='signUp'>SIGN UP</button>
            </div>
            <div className="right">
              {/* <img src="https://thumbs.dreamstime.com/b/dark-black-background-sand-stone-half-transparency-effects-texture-wallpaper-many-uses-advertising-book-page-paintings-230123644.jpg" alt="" /> */}
              {/* <img src="data:image/jpeg;base64,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" alt="" /> */}
            </div>
        </div>
        <Divider/>
        <div className="sectionB">
            <div className="left">
              
            </div>
            <div className="right">
                
                <h2> <div className="starter"></div> @ MOVIES</h2>
                <p>Get to explore the latest Movie,Trending Movie.<br /> We are always here to deliver.</p>
            </div>
        </div>
        <Divider />
        <div className="sectionC">
            <div className="left">
                <h2> <div className="starter"></div> @ TV SHOWS</h2>
                <p>Our resources are limited only when you pause.<br /> But once you are back to stream we got you.</p>
            </div>
            <div className="right">
                
            </div>
        </div>
        <Divider />
        <div className="sectionD">
            <div className="left">
              
            </div>
            <div className="right">
                
                <h2> <div className="starter"></div>COMBINATION TO YOUR WATCHLIST</h2>
                <p>Let them know you have the taste.<br /> Let the Watchlist define you.</p>
            </div>
        </div>
        <Divider />
    </div>
  )
}

export default SectionInfo