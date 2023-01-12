import React from 'react'
import './home.scss'
import Footer from '../../components/Footer/Footer';
import SectionInfo from '../../components/HomeSection/SectionInfo/SectionInfo';
import SectionStream from '../../components/HomeSection/SectionStream/SectionStream';
import Navbar from '../../components/Navbar/Navbar';

const Home = ({user}) => {
  return (
    <div className='homeSection'>
      <Navbar user ={user} />
      <SectionInfo />
      <SectionStream />
      <Footer />
      
    </div>
  )
}

export default Home