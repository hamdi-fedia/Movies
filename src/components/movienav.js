import React ,{useState} from 'react'

import style from '../css/style.css'
import {Navbar,Nav,Form,FormControl,Button,Modal,Tabs,Tab} from 'react-bootstrap'
import { Link } from "react-router-dom";


function Movienav ({handleSearchTerm, notheart}){
  // ********************modl****************//
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 // ********************search****************//

  

    return(
      
      <div>
<Navbar bg="movie" expand="lg">
  <Navbar.Brand href="#home">
      <img src="/img/logo.png" className="logo"></img>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
   
      <Nav.Link > <Link  to="/ftage">Home</Link></Nav.Link>
      <Nav.Link ><Link  to="/ftage/about">About Us</Link></Nav.Link>
      <Nav.Link ><Link  to="/ftage/movies">Movies</Link></Nav.Link>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleSearchTerm}/>
      <Button variant="outline-movie"><i class="fas fa-search"></i></Button>
    </Form>
    <Nav.Link ><Link  to="/ftage/favorit"><i class="fas fa-heart">{notheart}</i></Link> </Nav.Link>
    <Button variant="primary" id="user" onClick={handleShow}>
    <Nav.Link href="#link"> <i class="far fa-user"></i></Nav.Link>
     </Button>
   </Nav>
  </Navbar.Collapse>
</Navbar>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" >
        <Tab eventKey="home" title="Log in">
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="stay connected" />
  </Form.Group>
  <Button variant="outline-dark btn-mod" type="submit">
    Log in
  </Button>
</Form>
        </Tab>
        <Tab eventKey="profile" title="Create an account">
           <div className="text-center text-modl-color">
           Create your ftage account in a few clicks! You can register either using your email address or through your Facebook account.
           <br/><br/>
           <Button variant="outline-dark " type="submit">
           <i class="fas fa-envelope"></i> create your account with g-mail
           </Button><br/><br/>
           <Button variant="outline-dark " type="submit">
           <i class="fab fa-facebook-square"></i> create your account with facebook
           </Button>
           </div>
        </Tab>
        </Tabs>


        </Modal.Body>
       
      </Modal>



      </div>
     
    )
}
export default Movienav