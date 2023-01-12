import React from 'react'
import './home.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Dashboard from '../../components/Dashboard/Dashboard'
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default Home