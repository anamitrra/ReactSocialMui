import React, { useState } from 'react'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Switch, Toolbar, Typography } from "@mui/material";
import { Mail, Notifications, Pets } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:"#6b189e",
});

const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
      padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
    width:"30%",
}))

const Icons = styled(Box)(({theme})=>({
   display:"flex",
   alignItems:"center",
   gap:"20px",
}))


function Navbar({colorMode, setcolorMode}) {
    const [open, setopen] = useState(false)
  return (
    <AppBar position="sticky">
        <StyledToolbar>
        <Typography variant= "h6" sx={{display:{xs:"none", sm:"block"}}}> FakeBook </Typography>
        <Pets sx={{display:{xs:"block", sm:"none"}}}/>
        <Search><InputBase placeholder=' Search ....'/></Search>
        <Icons>
            <Badge badgeContent={4} color="error"> <Mail/> </Badge>
            <Badge badgeContent={2} color="error"> <Notifications/> </Badge>
            <Avatar onClick={(e)=>setopen(true)} sx={{width:30, height:30}} src='https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
            
            </Avatar>
        </Icons>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={"anchorEl"}
        open={open}
        onClose={(e)=>setopen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={"#"}>Profile</MenuItem>
        <MenuItem onClick={"#"}>My account</MenuItem>
        <MenuItem onClick={"#"}>Logout</MenuItem>
        <MenuItem onClick={"#"}><Switch onChange={(e)=>setcolorMode(colorMode==="light"?"dark":"light")}/></MenuItem>
        
      </Menu>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar