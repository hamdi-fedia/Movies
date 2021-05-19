import React ,{useState} from 'react'
import style from '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movienav from './movienav';
import Movies from './moviecard';
import bgacc from './bgacc.png';
import About from './movieabout';
import MovieFooter from './moviefooter';
function Home({addNotHeart,notheart,addfavorit,handleSearchTerm,searchMovie}){

  return (
    
    <div >
        
        <Movienav handleSearchTerm={handleSearchTerm}  notheart={notheart} /> 

      <div className="bgsec" style={{ backgroundImage: `url(${bgacc})` , width:'100%' }}>
       <div className="text-bg">
       <span>W</span>atching <span>M</span>ovies <span>I</span>n <span>T</span>he <span>O</span>riginal <span>V</span>ersion
       </div>
      </div>
      
      <About/>
     
      <Movies searchMovie={searchMovie} addNotHeart = {addNotHeart} addfavorit = {addfavorit} />
     
     <div className=" pt-5 bg-sect3">
     <div className="row">
       <div className="text-end">
           Enjoy Watching Everyone
       </div>
     </div>
     </div>
     <MovieFooter/>
    </div>
  );
}

export default Home;
