import { Box, styled } from "@mui/material";
import { Stack } from "@mui/system";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {


  const MobileFeed = styled(Box)(({theme})=>({
    display:"flex",
    [theme.breakpoints.up("sm")]:{
      display:"none",
    }
  }));
  
  return (
    <>
    <Navbar />
    <MobileFeed>
    <Feed />
    </MobileFeed>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      
    </>
  );
}

export default App;
