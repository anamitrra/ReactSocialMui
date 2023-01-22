import { Box, Button, Fab, Modal, styled, Tooltip, Typography,} from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon} from '@mui/icons-material'


function Add() {

    const [open, setopen] = useState(false);
    const StyledModal= styled(Modal)({
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    })

  return (
    <>
    <Tooltip title="Add"  onClick={(e)=>{setopen(true)}}
    sx={{
        position:"fixed",
        bottom:20, 
        left:{xs:"calc(50%-25px)", md:30},
}}>
   <Fab color='primary' aria-label='add'>
    <AddIcon/>
   </Fab>
  </Tooltip>
  <Button onClick={""}>Open modal</Button>
      <StyledModal
        open={open}
        onClose={(e)=>{setopen(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" borderRadius={4} >
            <Typography mt={2} variant='h6' color={"gray"} textAlign="center">Create Post</Typography>

        </Box>
      </StyledModal>
  </>
  )
}

export default Add