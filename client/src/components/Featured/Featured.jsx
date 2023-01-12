import React from 'react'
import './featured.scss'

const Featured = () => {
  return (
    <div className="featured">
        <div className="bigImage">
          <img src="https://m.media-amazon.com/images/M/MV5BMWQ0ODdkOGMtZjYxZC00NjE2LTg3ZWUtNjY3YmQ5ZWI1ZDM2XkEyXkFqcGdeQWFsZWxvZw@@._V1_.jpg" alt="" />
        </div>
        <div className="title">
            <p>Justice League</p>
        </div>
    </div>
  )
}

export default Featured