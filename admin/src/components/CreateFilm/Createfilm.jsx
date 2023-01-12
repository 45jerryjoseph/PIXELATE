import React from 'react'
import './createfilm.scss'
import DownloadingIcon from '@mui/icons-material/Downloading';
import CollectionsIcon from '@mui/icons-material/Collections';
const Createfilm = () => {
  return (
    <div className="createFilm">
        <div className="title">
          <p>Add User</p>
        </div>

        <div className="filmArea">
            <div className="largeImg">
                <input type="file" name="" id="" />
                <DownloadingIcon className='downloadIcon' />
            </div>
            <div className="secondDetails">
                <div className="left">
                    <input type="text" name="title" id="" placeholder='Title' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Description'></textarea>
                </div>
                <div className="right_smallImg">
                    <input type="file" name="" id="" />
                    <CollectionsIcon className='collectionsIcon' />
                </div>
            </div>
            <div className="listArea">
                <ul>
                    <li><input type="text" name="duration" id="" placeholder='Duration' /></li>
                    <li><input type="number" name="limit" id="" placeholder='Limit' /></li>
                    <li><input type="date" name="ReleaseYear" id="" placeholder='Release Year' /></li>
                    <li><input type="date" name="ReleaseDate" id="" placeholder='Release Date' /></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <input type="text" name="" id="" />
            </div>
        </div>
    </div>
  )
}

export default Createfilm