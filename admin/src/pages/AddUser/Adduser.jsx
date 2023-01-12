import React from 'react'
import Createuser from '../../components/CreateUser/Createuser'
import Sidebar from '../../components/Sidebar/Sidebar'
import './adduser.scss'
const Adduser = () => {
  return (
    <div className="addUser">
        <Sidebar />
        <Createuser />
    </div>
  )
}

export default Adduser