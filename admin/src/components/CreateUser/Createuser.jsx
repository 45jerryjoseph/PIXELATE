import React from 'react'
import './createuser.scss'
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';



const Createuser = () => {
  return (
    <div className="createUser">
        <div className="title">
          <p>Add User</p>
        </div>
        <div className="addArea">
            <div className="topArea" style={{"display":"flex", "justifyContent":"space-between","alignItems":"center"}}>
                <div className='left' style={{"display":"flex", "justifyContent":"flex-start","alignItems":"center"}}>
                  <AccountCircleIcon style={{"fontSize": "70","marginRight":"30"}} />
                  <div className="details" >
                    <Typography id="modal-modal-profilenames" variant="h6" component="h2">
                      Jerry Joseph
                    </Typography>
                    <Typography id="modal-modal-email" variant="h6" component="h2">
                      jerryj@email.com
                    </Typography>
                  </div>
                </div>
                <div className="right" style={{"margin": "0 50px","fontSize":"20px"}}>
                  <p className="Id">User ID: 1245324515245</p>
                    <EditIcon style={{"marginLeft":"160px", "border":"1px dotted grey","padding":"5px","marginTop":"15px","backgroundColor":"cyan","color":"black"}}/>
                </div>
            </div>
            <div className="lowerArea">
                <div className="left">
                    <div class="container">
                            <div class="card">
                                <div class="card__image-container">
                                    <img class="card__image" src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80" alt=""/>
                                 </div>
                            
                                <svg class="card__svg" viewBox="0 0 800 500">

                                    <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
                                    <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
                                </svg>
                        
                                <div class="card__content">
                                    <h1 class="card__title">Profile Details</h1>
                                    <div className="inputs">
                                        <input type="text" name="Fname" id="" placeholder='First Name' />
                                        <input type="text" name="Lname" id="" placeholder='Last Name' />
                                        <input type="text" name="Username" id="" placeholder='Username' />
                                        <input type="email" name="Email" id="" placeholder='Email Address'/>
                                        <input type="number" name="age" id="" placeholder='Age'/>
                                        <input type="email" name="Contact" id="" placeholder='Contact'/>
                                        <input type="text" name="Nationality" id="" placeholder='Nationality' />
                                        <select name="role" id="">
                                            <option value="Amin">Admin</option>
                                            <option value="User">User</option>
                                        </select>
                                        <input type="text" name="status" id="" placeholder='Status'/>
                                        <input type="password" name="Password" id="" placeholder='Password' />
                                    </div>
                                </div>
                                <Button className="button" style={{"border":"2px solid grey","width":"7rem","height":"3rem","fontSize":"25px"}}>SAVE</Button>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h1 className="titlePoint">Change Password</h1>
                    <div className="inputsRight">
                        <div className="password">
                            <label htmlFor='Old password' >Old Password:</label> 
                            <input type="password" name="Old password" id="" />
                        </div>
                        <div className="password">
                            <label htmlFor='New password'>New Password:</label> 
                            <input type="password" name="New password" id="" />
                        </div>
                        <div className="password">
                            <label htmlFor='Confirm Password'>Confirm Password:</label> 
                            <input type="password" name="Confirm password" id="" />

                        </div>

                    </div>
                    <Button className="button" style={{"border":"2px solid grey","width":"7rem","height":"3rem","fontSize":"25px"}}>UPDATE</Button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Createuser