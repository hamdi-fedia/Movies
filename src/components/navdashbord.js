import React ,{useState} from 'react'

import style from '../css/style.css'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import '../css/Navbar.css';
import { IconContext } from 'react-icons';

function NavDashbord ({handleSearchTerm, notheart}){

    return(
      
      <div>
<Navbar bg="movie" expand="lg">
  <Navbar.Brand href="#home">
      <img src="/img/logo.png" className="logo"></img>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
   
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleSearchTerm}/>
      <Button variant="outline-movie"><i class="fas fa-search"></i></Button>
    </Form>
   </Nav>
  </Navbar.Collapse>
</Navbar>

      </div>
  


    )
}
export default NavDashbord