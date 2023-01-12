import React from 'react'
import './cataloglist.scss'
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
  height: 450,
  bgcolor: 'lightgrey',
  border: '3px solid #000',
  boxShadow: 44,
  borderRadius: '20px',
  p: 4,
};

const Cataloglist = () => {

  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleCloseDelete = () => setOpenDelete(false);

  return (
    <>
        <div className="catalogList">
        <div className="title">
            <p>Catalog</p>
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
        <div className="upper" style={{"display":"flex", "justifyContent":"space-between","alignItems":"center"}}>
          <div className='left' style={{"display":"flex", "justifyContent":"flex-start","alignItems":"center"}}>
            <AccountCircleIcon style={{"fontSize": "70","marginRight":"30"}} />
            <div className="details" >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Alice in Borderland
              </Typography>
              <Typography id="modal-modal-duration" variant="h6" component="h2">
                <p>24/6/2023 <span>1hr 20min</span></p>
              </Typography>
            </div>
          </div>
          <div className="right" style={{"margin": "0 70px","fontSize":"30px"}}>
            <p className="limit">18+</p>
          </div>
        </div>
        <div className="description"  style={{"margin": "20px 0","fontSize":"30px","backgroundColor":"whitesmoke","padding":"5px","borderRadius":"10px"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
                Alice in the Boderland is a game in another world replica to theirs. The game starts in Tokyo only to be realised that it is all over other cities.
                .This is  a Game of Survial Like just in Cards Luck might be part of success but Strategy is the sure Cause.
          </Typography>
        </div>
        <div className="lower" >
          <ul style={{"display":"grid","gridTemplateColumns":"repeat(2, 1fr)", "gridTemplateRows":"repeat(3, 1fr)","gap":"20","columnGap":"20"}}>
            <l1>
              <Typography id="modal-modal-description" sx={{ mt: 2,"fontSize":"23px" }}>
                Category: Action
              </Typography>
            </l1>
            <l1>
              <Typography id="modal-modal-description" sx={{ mt: 2,"fontSize":"23px" }}>
                  Views: 300
              </Typography>
            </l1>
            <l1>
              <Typography id="modal-modal-description" sx={{ mt: 2,"fontSize":"23px" }}>
                  Language:English
              </Typography>
            </l1>
            <l1>
            <Typography id="modal-modal-description" sx={{ mt: 2,"fontSize":"23px" }}>
                Status: Premiere
            </Typography>
            </l1>
            {/* If is series then */}
            {/* <l1>
            <Typography id="modal-modal-description" sx={{ mt: 2,"fontSize":"23px" }}>
                Seasons:2 
            </Typography>
            </l1> */}
            
          </ul>
          <Typography id="modal-modal-description" sx={{ mt: 2,"fontSize":"23px" }}>
                Best Quote : This game is of Survival 
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
        <Box sx={style} style={{"height":"250px"}}>
          <Typography id="modal-modal-description" sx={{ mt: 2,"fontSize":"2.5rem","display":"flex","justifyContent":"center","alignItems":"center"}}>
                  Catalog
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2,"fontSize":"23px","display":"flex","justifyContent":"center","alignItems":"center" }}>
                Are you sure to permanently  delete this ?
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

export default Cataloglist