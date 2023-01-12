import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Userslist from '../../components/UsersList/Userslist'
import './users.scss'
const Users = () => {
  return (
    <div className="users">
        <Sidebar/>
        <Userslist />
    </div>
  )
}

export default Users