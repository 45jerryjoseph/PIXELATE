import React from 'react'
import './dashboard.scss'
import Featured from '../../components/Featured/Featured'
import List from '../../components/List/List'
import Navbar from '../../components/Navbar/Navbar'

const Dashboard = ({user}) => {
  return (
    <div className="dashboard">
        <Navbar user={user} />
        <div className="bodyContainer">
                {/* Here we will display featured videos randomly */}
            <Featured />
            <p className="genre"> ACTION MOVIE</p>
            <List />
            <List />
            <List />
            <p className='quote'>Best Movie or Tv shows Quote .... Movie name/Tv show Name</p>
            
        </div>
    </div>
  )
}

export default Dashboard