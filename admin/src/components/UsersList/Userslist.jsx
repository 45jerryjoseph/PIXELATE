import React from 'react'
import './userslist.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EnhancedTable from '../Table/Table';
import Footer from '../Footer/Footer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 250,
  bgcolor: 'lightgrey',
  border: '3px solid #000',
  boxShadow: 44,
  borderRadius: '20px',
  p: 4,
};

const Userslist = () => {

  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleCloseDelete = () => setOpenDelete(false);
  // const handleOpen = () => setOpen(true);
  // const handleOpenDelete = () => setOpenDelete(true);
  return (
    <>
        <div className="usersList">
            <div className="title">
                <p>Users</p>
                <div className="searchTab">
                    <input type="search" name="" id="" placeholder='Search here' />
                    <SearchOutlinedIcon className='searchIcon'/>
                </div>
            </div>
            <div className="table">
                <EnhancedTable open={open} openDelete={openDelete} setOpen={setOpen} setOpenDelete={setOpenDelete} />
            </div>
            <Footer />
        </div>


        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className='upper' style={{"display":"flex", "justifyContent":"flex-start","alignItems":"center"}}>
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
              <div className="lower" >
                <ul style={{"display":"grid","gridTemplateColumns":"repeat(2, 1fr)", "gridTemplateRows":"repeat(3, 1fr)","gap":"20","columnGap":"20"}}>
                  <l1>
                    <Typography id="modal-modal-description" sx={{ mt: 2,"fontSize":"23px" }}>
                      Username: John Jess
                    </Typography>
                  </l1>
                  <l1>
                    <Typography id="modal-modal-description" sx={{ mt: 2,"fontSize":"23px" }}>
                        Contact: +2543143143
                    </Typography>
                  </l1>
                  <l1>
                    <Typography id="modal-modal-description" sx={{ mt: 2,"fontSize":"23px" }}>
                        Role: User
                    </Typography>
                  </l1>
                  <l1>
                  <Typography id="modal-modal-description" sx={{ mt: 2,"fontSize":"23px" }}>
                      Join Date: 25<sup>th</sup> March 2023 
                  </Typography>
                  </l1>
                  <l1>
                    <Typography id="modal-modal-description" sx={{ mt: 2 ,"fontSize":"23px"}}>
                        Nationality: Kenyan
                    </Typography>
                  </l1>
                  <l1>
                    <Typography id="modal-modal-description" sx={{ mt: 2,"fontSize":"23px" }}>
                        Age: 20
                    </Typography>
                  </l1>
                </ul>
              </div>
            </Box>
          </Modal>

          <Modal
            open={openDelete}
            onClose={handleCloseDelete}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
              <Box sx={style}>
                <Typography id="modal-modal-description" sx={{ mt: 2,"fontSize":"2.5rem","display":"flex","justifyContent":"center","alignItems":"center"}}>
                        User Delete
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2,"fontSize":"23px","display":"flex","justifyContent":"center","alignItems":"center" }}>
                      Are you sure to permanently  delete the User ?
                </Typography>
                <div className="buttons"style={{"display":"flex","justifyContent":"space-between","alignItems":"center","margin":"4rem 8rem"}}>
                  <button className="delete" style={{"height":"3rem","width":"8rem","borderRadius":"10px" , "border":"none","fontSize":"25px" ,"color":"red","backgroundColor":"black","cursor":"pointer"}}>Delete</button>
                  <button className="dissolve" style={{"height":"3rem","width":"8rem","borderRadius":"10px" , "border":"none","fontSize":"25px" ,"color":"black","backgroundColor":"red","cursor":"pointer"}}>Dissolve</button>
                </div>

              </Box>
          </Modal>
        </div>
    </>
  )
}

export default Userslist