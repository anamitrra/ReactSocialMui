import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {

  let [colorMode, setcolorMode] = useState("light")
 
  const darkTheme = createTheme({
    palette:{
      mode:colorMode
    }
  })
  return (
    <ThemeProvider theme={darkTheme} >
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar setcolorMode={setcolorMode} colorMode={colorMode} />
      <Stack direction="row" justifyContent="space-between">
        <Sidebar setcolorMode={setcolorMode} colorMode={colorMode} />
        <Feed />
        <Rightbar />
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
 
    
      
 
  );
}

export default App;
