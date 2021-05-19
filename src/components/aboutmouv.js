import React from 'react'
import style from '../css/style.css'
import {Container,Row,Col} from 'react-bootstrap'
import Movienav from './movienav'
import MovieFooter from './moviefooter';




function AboutMou({notheart}){
   return(<>
    <Movienav notheart={notheart}/> 
    <div className="bg-about pb-5">
    <Container >
        <Row className="pt-5">
          <Col md={6}>
           <div className="about">
           Hellow  <span>Friends</span>,<br/>
           How are you? It’s me <span>FEDIA</span>
           </div>
           <div className="paragraf">
           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed using.<br/><br/>
           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
           </div>
           <div className="bord-b"></div>
          </Col>
          <Col md={6}>
          <img src="/img/about.png" className="img-fluid"></img>
          </Col>
        </Row>
    </Container>
 
</div>
<MovieFooter/>
</>
   )
}

export default AboutMou