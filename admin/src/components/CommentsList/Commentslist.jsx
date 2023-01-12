import React from 'react'
import Footer from '../Footer/Footer'
import EnhancedTable from '../Table/Table'
import './commentslist.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
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

const Commentslist = () => {

  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleCloseDelete = () => setOpenDelete(false);
  return (
    <>
      <div className="commentsList">
          <div className="title">
          <p>Comments</p>
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
            <Box sx={style} style={{"height":"300px"}}>
              <div className="upper" style={{"display":"flex", "justifyContent":"space-between","alignItems":"center"}}>
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
                  <p className="Id">1245324515245</p>
                </div>
              </div>
              <div className="lower" >
                <Typography id="modal-modal-comment" variant="h6" component="h2" style={{"margin":"20px 0"}}>
                  What does a star symbolize?
                  Image result for stars icon
                  A star is a beacon of hope–a shining light that guides the way. It's a symbol of positivity, happiness or renewal. Look up into the nighttime sky, and the stars have a magical and inspiring presence.
                </Typography>
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
                        Comment Delete
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2,"fontSize":"23px","display":"flex","justifyContent":"center","alignItems":"center" }}>
                      Are you sure to permanently  delete the Comment ?
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

export default Commentslist