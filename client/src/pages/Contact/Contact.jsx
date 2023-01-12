import React from 'react'
import './contact.scss'
import Divider from '../../components/HomeSection/SecDivider/Divider'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
const Contact = () => {
  return (
    <>

    <Navbar />
    <div className="contactArea">
        <div className="contact">
            <div className="contactTitle">
                <p>Contact Us</p>
                <img src="https://venturebeat.com/wp-content/uploads/2020/02/6b0eedb2-a9a7-43ec-8616-2604655f4892-e1581323682867.png?w=1200&strip=all" alt="" />
            </div>
            <Divider />
            <div className="message">
                <p>Home is where your WIFI connects Automatically. Here is where ours does. <br />Give us a call or better yet, drop into our headquaters to <bold>say Hi</bold> in Person</p>
            </div>
            <Divider />
            <div className="contactDetails">
                <div className="left">
                    Geolocation
                </div>
                <div className="right">
                    <div className="customerCare">
                        <h2>Customer Care:</h2>
                        <p> <WhatsAppIcon className='icon' />072345678</p>
                        <p> <EmailIcon className='icon' /> Pixelate1@gmail.com</p>
                    </div>
                    <p>*******************************************************</p>
                    <div className="socialMedia">
                        <h2>Social Media Profiles:</h2>
                        <p> < YouTubeIcon className='icon' /> Pixelate Youtube</p>
                        <div className="socials">
                            <p>@ Pixelate</p>
                            <FacebookOutlinedIcon className='icon' />                            
                            <LinkedInIcon className='icon' />
                            <TwitterIcon  className='icon'/>
                            <InstagramIcon  className='icon'/>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="phoneAnimation">
                {/* Phone Animation to be Here */}
                <img src="https://www.thestreet.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxNDk5NzMzMTMzNTY3NjUx/1-galaxy-z-flip-4.jpg" alt="" />
                <img src="https://m.media-amazon.com/images/I/61MXzRCmHqL._SL1500_.jpg" alt="" />
            </div>
            <Divider />

            <div className="commentSection">
                <h1>Contact Us Today</h1>
                <h2>Tell us About yourself</h2>
                <p>Use our online form to send your details and Initial thoughts.Help us expand the Entartainment Market and Broadcast our services. we value your privacy and your Information will not be shared, sold or exchanged with any one else.</p>
                <div className="contactForm">
                    
                    <div className="left">
                        <label htmlFor="fName">First Name:*</label> <br />
                        <input type="text" name="fName" id="" />
                        <label htmlFor="phone">Phone Number:*</label> <br />
                        <input type="number" name="phone" id="" />  
                        <label htmlFor="comment">Comments</label> <br />
                        <textarea name="comment" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="right">
                        <label htmlFor="lName">Last Name:*</label> <br />
                        <input type="text" name="lName" id="" />
                        <label htmlFor="email">Email:*</label> <br />
                        <input type="email" name="email" id="" />
                        <button type="submit" className='submit'>Submit</button>

                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    </>
  )
}

export default Contact