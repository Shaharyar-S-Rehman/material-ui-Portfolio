import gmail from '../images/gmail.jpg'
import whatsapp from '../images/whatsapp.jpg'
import facebook from '../images/fb.jpg'





import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
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

  const cards=[{
    // avatar:"SSR", 
    title:"Gmail", 
    // date:"September 23, 2021", 
    pic:`${gmail}`, 
    msg:"shaharyarrehman79@gamil.com",
    contact:"https://mail.google.com/" 
},
{
  // avatar:"SSR", 
  title:"Whatsapp", 
  // date:"September 23, 2021", 
  pic:`${whatsapp}`, 
  // msg:"shaharyarrehman79@gamil.com", 
  contact:"https://wa.me/<03422059965>"
},
{
  // avatar:"SSR", 
  title:"Gmail", 
  // date:"September 23, 2021", 
  pic:`${facebook}`, 
  msg:"shaharyarrehman79@gamil.com", 
  contact:"http://facebook.com/Shaharyar S Rehman/PAGEID"
}
]


function Contact() {
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
    <h3>{card.title}</h3>
    <Button variant="outlined" href={card.contact}>click here</Button>
  </Typography>
</CardContent>
</Card>
    </Grid>
))
    }</Grid>

        </>
    )
  }
  export default Contact;