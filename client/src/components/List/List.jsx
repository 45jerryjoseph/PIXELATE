import React from 'react'
import './list.scss'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ListItem from '../ListItem/ListItem';
const List = () => {
  return (
    <>
        
        <div className="List">
            <span className="listTitle"><div className="stater"></div>Heroic Bloodshed</span>
            <div className="wrapper">
          
                <ArrowBackIosOutlinedIcon className='sliderArrow left' />
                <div className="container">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    {/* There is an overflow fix it when back */}
                </div>
                <ArrowForwardIosOutlinedIcon className='sliderArrow right'/>
             </div>

        </div>
    </>
  )
}

export default List