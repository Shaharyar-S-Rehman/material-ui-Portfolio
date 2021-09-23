import profile from "../images/slider.jpg"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function About() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (<>
    <br />
    <Grid container spacing={2}>
      {/* {cards.map((card, index) => ( */}
      <Grid key='index' item xs={12} sm={12} md={12} lg={12}>
        <Card sx={{ maxWidth: 500 }} className="m-auto" style={{boxShadow:"10px 10px 10px 10px grey"}} >

          <CardMedia
            component="img"
            height="350"
            image={profile}
            alt=""
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <h3>Shaharyar-S-Rehman</h3>
              <ul>
                <li style={{ listStyleType: 'none' }}>
                  <h4> Computer Science Student</h4>
                </li>
                <li style={{ listStyleType: 'none' }}>
                  <h4>Web Developer</h4>
                </li>

              </ul>
              <ul>
              <h3 style={{color:"blue",}}> I Have Following Skills</h3>
              
                <li  style={{listStyleType:"none"}}> <h5 style={{color:"brown",}}>HtML</h5></li>
                <li  style={{listStyleType:"none"}}> <h5 style={{color:"brown",}}>CSS</h5></li>
                <li  style={{listStyleType:"none"}}> <h5 style={{color:"brown",}}>FireBase</h5></li>
                <li  style={{listStyleType:"none"}}> <h5 style={{color:"brown",}}>MongoDB</h5></li>
                <li  style={{listStyleType:"none"}}> <h5 style={{color:"brown",}}>NodeJS</h5></li>
                <li  style={{listStyleType:"none"}}> <h5 style={{color:"brown",}}>Express JS</h5></li>
                <li  style={{listStyleType:"none"}}> <h5 style={{color:"brown",}}>React JS</h5></li>
                
              </ul>
            </Typography>
    <Button variant="contained" href="https://github.com/">Go to Github </Button>

          </CardContent>
        </Card>
      </Grid>
      ))
    </Grid>
  </>)
}
export default About;