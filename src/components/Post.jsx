import React from "react";
import {Bookmark,Share,BookmarkBorder,Favorite,FavoriteBorder,MoreVert,} from "@mui/icons-material";
import {Avatar,Card,CardActions,CardContent,CardHeader,CardMedia,Checkbox,Typography,IconButton, styled,} from "@mui/material";
import { Box } from "@mui/system";



function Post() {

  const FullScreenFeed = styled(Box)(({theme})=>({
    display:"none",
    [theme.breakpoints.up("sm")]:{
      display:"flex",
    }
  }));

  const MobileFeed = styled(Box)(({theme})=>({
    display:"flex",
    [theme.breakpoints.up("sm")]:{
      display:"none",
    }
  }));

  return (
 <>
 <FullScreenFeed>
 <Box >
      <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Jogn Doe"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="40%"
        image="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum animi
          architecto consequatur voluptatum voluptatibus est enim iure
          laboriosam natus sunt! Obcaecati, id ab? Ex blanditiis deserunt dicta
          reprehenderit aut quis?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  </Box>
 </FullScreenFeed>

  <MobileFeed>
  <Box>
      <Card sx={{ margin: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Jogn Doe"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="40%"
        image="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum animi
          architecto consequatur voluptatum voluptatibus est enim iure
          laboriosam natus sunt! Obcaecati, id ab? Ex blanditiis deserunt dicta
          reprehenderit aut quis?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  </Box>
  </MobileFeed>
  
 </>
  
  );
}

export default Post;
