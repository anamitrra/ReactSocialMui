import React from 'react'
import { Box } from '@mui/system'

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{
        display:{xs:'none',
        sm:"block"}
       }}>Rightbar</Box>
  )
}

export default Rightbar