import { Box } from '@mui/system'
import React from 'react'

function Sidebar() {
  return (
   <Box flex={2} padding={2} sx={{
    display:{xs:'none',
    sm:"block"}
   }}>
    
    Sidebar</Box>
  )
}

export default Sidebar