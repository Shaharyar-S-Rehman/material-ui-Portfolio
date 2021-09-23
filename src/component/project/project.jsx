import stopwatch from "../images/stopwatch.png";
import count from "../images/countdown.png";
import tictactoe from "../images/tic tac to.png";
import todo from "../images/todo.png";
import web from "../images/web.png";
// import stopwatch from "../images/stopwatch.png";

  import 'bootstrap/dist/css/bootstrap.min.css';
// import { Carousel } from 'react-bootstrap';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
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
  const cards=[{
    // avatar:"SSR", 
    title:"Todo app", 
    // date:"September 23, 2021", 
    pic:`${todo}`, 
    msg:"Todo-App is most useful app because you can save your daily routine, your task etc.",
    contact:"https://shaharyar-s-rehman.github.io/todoappfirebasedatabase/" 
},
{
  // avatar:"SSR", 
  title:"Tic Tac Toe", 
  // date:"September 23, 2021", 
  pic:`${tictactoe}`, 
  msg:"Think Outside The Box Tic-Tac-Toe.  your mind can Gane change ", 
  contact:"https://shaharyar-s-rehman.github.io/tic-tac-toe/"
},
{
  // avatar:"SSR", 
  title:"StopWatch", 
  // date:"September 23, 2021", 
  pic:`${stopwatch}`, 
  msg:"Stopwatch Never Lies. Speed Kills But Absolute Speed Kills Absolutely.", 
  contact:"https://shaharyar-s-rehman.github.io/StopWatch/"
},

{
  // avatar:"SSR", 
  title:"CountDown Timer", 
  // date:"September 23, 2021", 
  pic:`${count}`, 
  msg:"Time Has a Wonderful Way Of Showing Us What Really Matters.", 
  contact:"https://shaharyar-s-rehman.github.io/countdown-timer/"
},

{
  // avatar:"SSR", 
  title:"Apple", 
  // date:"September 23, 2021", 
  pic:`${web}`, 
  msg:"Oh, What a Tangled Web We Weave When First We Practice To Believe.", 
  contact:"https://shaharyar-s-rehman.github.io/assignment-7-apple/"
}
]


function Project() {
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
        <>
        <br />
        <Grid container spacing={2}>
{ cards.map((card,index)=> (
    <Grid key='index' item xs={12} sm={9} md={6} lg={4}>
 <Card  style={{boxShadow:"10px 10px 10px 10px grey"}} className="m-5" >

<CardMedia
  component="img"
  height="230"
  image={card.pic}
  alt=""
/>
<CardContent>
  <Typography variant="body2" color="text.secondary">
    <h3 style={{color:"black"}}>{card.title}</h3>
    {card.msg}
    
  </Typography>
  <br />
  <Button variant="outlined" href={card.contact} >click here to see</Button>

</CardContent>
</Card>
    </Grid>
))
    }</Grid>

))


        </>
    )
  }
  export default Project;