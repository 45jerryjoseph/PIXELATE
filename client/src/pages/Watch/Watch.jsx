import React from 'react'
import './watch.scss'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ShareIcon from '@mui/icons-material/Share';

const Watch = () => {
  return (
    <div className="watch">
        <button className="back">
            <ArrowLeftIcon className='leftArrow'/>
            <p>Back</p>
        </button>

        <div className="trailer">
            {/* <video src="https://youtu.be/_Z3QKkl1WyM"></video> */}
            <iframe  width = '100%' height="100%" src="https://www.youtube.com/embed/_Z3QKkl1WyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loop autoplay></iframe>
        </div>
        <div className="detailed">
            <div className="card">
                <div className="left">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png" alt="" />
                </div>
                <div className="right">
                    <h1>KILL BILL:</h1>
                    <div className="rightDetails">
                        <ul>
                            <li>2003</li>
                            <li>1hr 20min</li>
                            <li>Action</li>
                        </ul>
                    </div>
                    <div className="cardReview">
                        <p>The lead character, called 'The Bride,' was a member <br/> of the Deadly Viper Assassination Squad, led by her <br/> lover 'Bill.' Upon realizing she was pregnant with Bill's<br/> child, 'The Bride' decided to escape her life as a killer.<br/> She fled to Texas, met a young man, who, on the day<br/> of their wedding rehearsal was gunned down by....</p>
                        <a href="/">Read More</a>
                    </div>
                    <div className="cardIcons">
                        <p className="iconCard"><PlayCircleFilledWhiteIcon className='icon' /> Play</p>
                        <p className="iconCard"><AddCircleOutlineIcon className='icon' /> Watchlist</p>
                        <p className="iconCard"><DownloadForOfflineIcon className='icon' />Download</p>
                        <p className="iconCard"><ThumbUpOffAltIcon className='icon' />Like</p>
                        <p className="iconCard"><ShareIcon className='icon' />Share</p>
                    </div>
                </div>
            </div>
        </div>
       <div className="lowerDetailed">
            <div className="top">
                <p className="episode">Episodes <div className="below"></div></p>
                <p className="others">Shows Like ..Movie Name.. <div className="below"></div></p>
            </div>
            <div className="bottom">
                <select name="season" id="">
                    <option value="Season 1">Season 1</option>
                </select>
                <div className="episodes">
                    <div className="episodeCard">
                        <div className="image">
                            <img src="https://3.bp.blogspot.com/-HFFKp8gPjCU/WoKlbLTCPpI/AAAAAAAAOJA/fB7Sh6gk8o4Hj2itNOvP1kas2xEa7fxQwCLcBGAs/s1600/black%2Bpanther%2Bmovie.jpeg" alt="" />
                        </div>
                        <h2>S1:Episode 1</h2>
                        <p>Episode Name</p>
                        <p>Episode summary on the Series/Tv show will take here. with about it.</p>
                        <DownloadForOfflineIcon className='download'/>
                    </div>
                    <div className="episodeCard">
                        <div className="image">
                            <img src="https://3.bp.blogspot.com/-HFFKp8gPjCU/WoKlbLTCPpI/AAAAAAAAOJA/fB7Sh6gk8o4Hj2itNOvP1kas2xEa7fxQwCLcBGAs/s1600/black%2Bpanther%2Bmovie.jpeg" alt="" />

                        </div>
                        <h2>S1:Episode 1</h2>
                        <p>Episode Name</p>
                        <p>Episode summary on the Series/Tv show will take here. with about it.</p>
                        <DownloadForOfflineIcon className='download'/>
                    </div>
                    <div className="episodeCard">
                        <div className="image">
                            <img src="https://3.bp.blogspot.com/-HFFKp8gPjCU/WoKlbLTCPpI/AAAAAAAAOJA/fB7Sh6gk8o4Hj2itNOvP1kas2xEa7fxQwCLcBGAs/s1600/black%2Bpanther%2Bmovie.jpeg" alt="" />

                        </div>
                        <h2>S1:Episode 1</h2>
                        <p>Episode Name</p>
                        <p>Episode summary on the Series/Tv show will take here. with about it.</p>
                        <DownloadForOfflineIcon className='download'/>
                    </div>
                    <div className="episodeCard">
                        <div className="image">
                            <img src="https://3.bp.blogspot.com/-HFFKp8gPjCU/WoKlbLTCPpI/AAAAAAAAOJA/fB7Sh6gk8o4Hj2itNOvP1kas2xEa7fxQwCLcBGAs/s1600/black%2Bpanther%2Bmovie.jpeg" alt="" />
                        </div>
                        <h2>S1:Episode 1</h2>
                        <p>Episode Name</p>
                        <p>Episode summary on the Series/Tv show will take here. with about it.</p>
                        <DownloadForOfflineIcon className='download'/>
                    </div>
                    <div className="episodeCard">
                        <div className="image">
                            <img src="https://3.bp.blogspot.com/-HFFKp8gPjCU/WoKlbLTCPpI/AAAAAAAAOJA/fB7Sh6gk8o4Hj2itNOvP1kas2xEa7fxQwCLcBGAs/s1600/black%2Bpanther%2Bmovie.jpeg" alt="" />
                        </div>
                        <h2>S1:Episode 1</h2>
                        <p>Episode Name</p>
                        <p>Episode summary on the Series/Tv show will take here. with about it.</p>
                        <DownloadForOfflineIcon className='download'/>
                    </div>
                    <div className="episodeCard">
                        <div className="image">
                            <img src="https://3.bp.blogspot.com/-HFFKp8gPjCU/WoKlbLTCPpI/AAAAAAAAOJA/fB7Sh6gk8o4Hj2itNOvP1kas2xEa7fxQwCLcBGAs/s1600/black%2Bpanther%2Bmovie.jpeg" alt="" />
                        </div>
                        <h2>S1:Episode 1</h2>
                        <p>Episode Name</p>
                        <p>Episode summary on the Series/Tv show will take here. with about it.</p>
                        <DownloadForOfflineIcon className='download'/>
                    </div>
                    <div className="episodeCard">
                        <div className="image">
                            <img src="https://3.bp.blogspot.com/-HFFKp8gPjCU/WoKlbLTCPpI/AAAAAAAAOJA/fB7Sh6gk8o4Hj2itNOvP1kas2xEa7fxQwCLcBGAs/s1600/black%2Bpanther%2Bmovie.jpeg" alt="" />
                        </div>
                        <h2>S1:Episode 1</h2>
                        <p>Episode Name</p>
                        <p>Episode summary on the Series/Tv show will take here. with about it.</p>
                        <DownloadForOfflineIcon className='download'/>
                    </div>
                    <div className="episodeCard">
                        <div className="image">
                            <img src="https://3.bp.blogspot.com/-HFFKp8gPjCU/WoKlbLTCPpI/AAAAAAAAOJA/fB7Sh6gk8o4Hj2itNOvP1kas2xEa7fxQwCLcBGAs/s1600/black%2Bpanther%2Bmovie.jpeg" alt="" />
                        </div>
                        <h2>S1:Episode 1</h2>
                        <p>Episode Name</p>
                        <p>Episode summary on the Series/Tv show will take here. with about it.</p>
                        <DownloadForOfflineIcon className='download'/>
                    </div>
                    <div className="episodeCard">
                        <div className="image">
                            <img src="https://3.bp.blogspot.com/-HFFKp8gPjCU/WoKlbLTCPpI/AAAAAAAAOJA/fB7Sh6gk8o4Hj2itNOvP1kas2xEa7fxQwCLcBGAs/s1600/black%2Bpanther%2Bmovie.jpeg" alt="" />
                        </div>
                        <h2>S1:Episode 1</h2>
                        <p>Episode Name</p>
                        <p>Episode summary on the Series/Tv show will take here. with about it.</p>
                        <DownloadForOfflineIcon className='download'/>
                    </div>
                    <div className="episodeCard">
                        <div className="image">
                            <img src="https://3.bp.blogspot.com/-HFFKp8gPjCU/WoKlbLTCPpI/AAAAAAAAOJA/fB7Sh6gk8o4Hj2itNOvP1kas2xEa7fxQwCLcBGAs/s1600/black%2Bpanther%2Bmovie.jpeg" alt="" />
                        </div>
                        <h2>S1:Episode 1</h2>
                        <p>Episode Name</p>
                        <p>Episode summary on the Series/Tv show will take here. with about it.</p>
                        <DownloadForOfflineIcon className='download'/>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Watch