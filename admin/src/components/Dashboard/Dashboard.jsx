import React from 'react'
import Card from '../Card/Card';
import './dashboard.scss';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import MovieFilterTwoToneIcon from '@mui/icons-material/MovieFilterTwoTone';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import RefreshSharpIcon from '@mui/icons-material/RefreshSharp';
import Genrecard from '../GenreCard/Genrecard';
import Footer from '../Footer/Footer';



const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="title">
        <p>Dashboard</p>
      </div>
      <div className="cardsArea">
        <Card title={"User"} total={6727} icon ={<GroupSharpIcon className='icon group'/>} />
        <Card title={"Movies"} total={680} icon ={<MovieFilterTwoToneIcon className='icon movies'/>} />
        <Card title={"Tv Shows"} total={2627} icon ={<LiveTvTwoToneIcon className='icon show'/>} />
        <Card title={"New Comments"} total={1232} icon ={<CommentOutlinedIcon className='icon comment'/>} />
      </div>
      <div className="cardsTenor">
        <div className="left">
          <h2>Users Tenor</h2>
          <div className="graph">

          </div>
        </div>
        <div className="right">
          <h2>Movies & Tv Shows Stats</h2>
          <div className="statsChart">

            <p>January 2023</p>
          </div>
          <div className="statsRecord">
            <p>Movies <span className='m'>70%</span></p>
            <p>Tv Shows <span className='s'>70%</span></p>
            <p>Timeline <span > <KeyboardArrowDownSharpIcon /></span></p>
            
          </div>

        </div>
      </div>
      <div className="movieRubric">
        <h2> <div className="starter"></div>Movies Rubric</h2>
        <div className="rubric">
          <div className="left">
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
          </div>
          <div className="center">
            
          </div>
          <div className="right">
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
          </div>
        </div>
      </div>
      {/* Start of movies Table */}
      <div className="moviesTable">
        <div className="top">
          <div className="leftTop">
            <MovieFilterTwoToneIcon className='icon movie'/>
            <p>Recent Movies</p>
          </div>
          <div className="rightTop">
            <RefreshSharpIcon className='icon refresh'/>
            <p className="view">View All</p>
          </div>
        </div>
      </div>
      {/* Tv shows Rubric starts here */}
      <div className="tvshowsRubric">
        <h2> <div className="starter"></div>Tv Shows Rubric</h2>
        <div className="rubric">
          <div className="left">
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
          </div>
          <div className="center">
            
          </div>
          <div className="right">
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
            <Genrecard />
          </div>
        </div>

      </div>
      {/* Start of Tv shows Table */}
      <div className="tvshowsTable">
        <div className="top">
          <div className="leftTop">
            <LiveTvTwoToneIcon className='icon tvshow'/>
            <p>Recent Tv Shows</p>
          </div>
          <div className="rightTop">
            <RefreshSharpIcon className='icon refresh'/>
            <p className="view">View All</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard