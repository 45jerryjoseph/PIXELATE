import React from 'react'
import Createfilm from '../../components/CreateFilm/Createfilm'
import Sidebar from '../../components/Sidebar/Sidebar'
import './addfilm.scss'
const Addfilm = () => {
  return (
    <div className="addFilm">
        <Sidebar />
        <Createfilm />
    </div>
  )
}

export default Addfilm