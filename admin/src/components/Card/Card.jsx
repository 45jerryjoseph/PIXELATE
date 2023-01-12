import React from 'react'
import './card.scss'
const Card = ({title,total,icon}) => {
  return (
    <div className="card">
        <p className="top">{title}</p>
        <div className="lower">
            <p className="total">{total}</p>
            <div className="icondiv">
                {icon}
            </div>
        </div>
    </div>
  )
}

export default Card