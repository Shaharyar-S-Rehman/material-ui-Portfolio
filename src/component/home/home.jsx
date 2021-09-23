import slider from "../images/slider1.jpg"
import slider1 from "../images/slider2.jpg"
import slider2 from "../images/slider3.jpg"
import Html from "../images/images.png"
import css from "../images/css.jpg"
import javascript from "../images/javascript.jpg"
import firebase from "../images/firebase.jpg"
import express from "../images/express.png"
import mongo from "../images/mongo.jpg"
import react from "../images/react.jpg"


// import Carousel from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import * as React from 'react';
import { styled } from '@mui/material/styles';
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

const cards=[{
    avatar:"SSR", 
    title:"Shaharyar-S-Rehman", 
    date:"September 23, 2021", 
    pic:`${Html}`, 
    msg:"HTML is  used for creating Web pages.", 
    heading:"Introduction", 
    text1:"HTML stands for Hyper Text Markup Language", 
    text2:"HTML is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way. The enclosing tags can make a word or image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, and so on.", 
    lastmsg:"Tags and attributes are the basis of HTML.", 

},
{
    avatar:"SSR", 
    title:"Shaharyar-S-Rehman", 
    date:"September 23, 2021", 
    pic:`${css}`, 
    msg:"CSS is used for creating Web  Styling.", 
    heading:"Introduction", 
    text1:"CSS stands for Cascading Style Sheet", 
    text2:"CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is independent of HTML and can be used with any XML-based markup language. The separation of HTML from CSS makes it easier to maintain sites, share style sheets across pages, and tailor pages to different environments.", 
    // lastmsg:"There are three types of CSS which are given below: Inline CSS. Internal or Embedded CSS. External CSS", 

},
{
    avatar:"SSR", 
    title:"Shaharyar-S-Rehman", 
    date:"September 23, 2021", 
    pic:`${javascript}`, 
    msg:"JS is used for functionality on Web .", 
    heading:"Introduction", 
    text1:"Js stands for JavaScript", 
    text2:"JavaScript is a programming language that executes on the browser. It turns static HTML web pages into interactive web pages by dynamically updating content, validating form data, controlling multimedia, animate images, and almost everything else on the web pages.    JavaScript is the third most important web technology after HTML and CSS. JavaScript can be used to create web and mobile applications, build web servers, create games, etc.", 
    // lastmsg:"There are three types of JS which are given below: Inline JS. Internal or Embedded JS. External JS ", 

},

{
    avatar:"SSR", 
    title:"Shaharyar-S-Rehman", 
    date:"September 23, 2021", 
    pic:`${firebase}`, 
    msg:"Firebase is used for realtime database.", 
    heading:"Introduction", 
    text1:"Firebase is Google’s mobile application development platform .", 
    text2:"Firebase is a toolset to “build, improve, and grow your app”, and the tools it gives you cover a large portion of the services that developers would normally have to build themselves, but don’t really want to build, because they’d rather be focusing on the app experience itself. This includes things like analytics, authentication, databases, configuration, file storage, push messaging, and the list goes on. The services are hosted in the cloud.", 
    // lastmsg:"There are three types of CSS which are given below: Inline CSS. Internal or Embedded CSS. External CSS", 

},
{
    avatar:"SSR", 
    title:"Shaharyar-S-Rehman", 
    date:"September 23, 2021", 
    pic:`${express}`, 
    msg:"Expree is used for Middleware function", 
    heading:"Introduction", 
    text1:"Express JS is Node js framework", 
    text2:"Express.js, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.", 
    // lastmsg:"There are three types of CSS which are given below: Inline CSS. Internal or Embedded CSS. External CSS", 

},
{
    avatar:"SSR", 
    title:"Shaharyar-S-Rehman", 
    date:"September 23, 2021", 
    pic:`${mongo}`, 
    msg:"MongoDB can be used as a file storage system", 
    heading:"Introduction", 
    text1:"MongoDB is a cross-platform, document oriented database that provides, high performance, high availability, and easy scalability. MongoDB works on concept of collection and document.", 
    text2:"A document is a set of key-value pairs. Documents have dynamic schema. Dynamic schema means that documents in the same collection do not need to have the same set of fields or structure, and common fields in a collection's documents may hold different types of data.", 
    // lastmsg:"There are three types of CSS which are given below: Inline CSS. Internal or Embedded CSS. External CSS", 

},
{
    avatar:"SSR", 
    title:"Shaharyar-S-Rehman", 
    date:"September 23, 2021", 
    pic:`${react}`, 
    msg:"Reac is used for responsive UI", 
    heading:"Introduction", 
    text2:"We will build a small game during this tutorial. You might be tempted to skip it because you’re not building games but give it a chance. The techniques you’ll learn in the tutorial are fundamental to building any React app, and mastering it will give you a deep understanding of React.", 
    text1:"React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.", 
    // lastmsg:"There are three types of CSS which are given below: Inline CSS. Internal or Embedded CSS. External CSS", 

}
]
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
  
export default function Home() {
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return (
        <> 
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
<br />
<h1 style={{textAlign:"center"}}>Web Developer Mostly use These: </h1>
<Grid container spacing={2}>
{ cards.map((card,index)=> (
    <Grid key='index' item xs={12} sm={12} md={6} lg={4}>
<Card style={{boxShadow:"10px 10px 10px 10px lightgrey"}}  className="m-2">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {card.avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        
        title={card.title}
        subheader={card.date}
      />
      <CardMedia
        component="img"
        height="210"
        image={card.pic}
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">{card.msg}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{card.heading}</Typography>
          <Typography paragraph>
            {card.msg}</Typography>
          <Typography paragraph>
            {card.text1}</Typography>
          <Typography paragraph>
          {card.text2}
          </Typography>
          <Typography>
            {card.lastmsg}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
))
    }</Grid>
        </>
    )
}

// export default Home;