import styled from "@emotion/styled";
import { Box } from "@mui/system";
import React from "react";
import Post from "./Post";

function Feed() {

  
  return (
   <>
    <Box flex={4} p={1}>
      <Post />
      <Post />
      <Post />
    </Box>
   </>
    
  );
}

export default Feed;
