
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import Home from "./component/home/home"
import Contact from "./component/contact/contact"
import Project from "./component/project/project"

import About from "./component/about/about"
import { fontWeight } from "@mui/system";
export default function App() {
  let history = useHistory();
  return (
    <>
    <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={{color:"whitesmoke", fontWeight:"bolder"}}>Shaharyar-S-Rehman</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto p-2 ">
              <Nav.Link onClick={()=>{history.push("/")}} style={{color:"whitesmoke", fontWeight:"bolder", margin:"0 10% 0 10%" }}>Home</Nav.Link>
              <Nav.Link onClick={()=>{history.push("/about")}} style={{color:"whitesmoke", fontWeight:"bolder", margin:"0 10% 0 10%" }}>About</Nav.Link>
              <Nav.Link onClick={()=>{history.push("/contact")}} style={{color:"whitesmoke", fontWeight:"bolder", margin:"0 10% 0 10%" }}>Contact</Nav.Link>
              <Nav.Link onClick={()=>{history.push("/project")}} style={{color:"whitesmoke", fontWeight:"bolder", margin:"0 10% 0 10%" }}>Project</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/project">
          <Project />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

      </Switch>
</>
  );
}





