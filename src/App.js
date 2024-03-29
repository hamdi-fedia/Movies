import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import style from './css/style.css'
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/moviehome';
import AboutMou from './components/aboutmouv';
import CardMovies from './components/cardmov';
import Favorit from './components/favorit';
import { useState } from 'react';
import Admin from './components/admin';
import AddForm from './components/formadd';
function App() {

  const[notheart , setNotheart] = useState(0);
  const addNotHeart = () => {
       setNotheart(notheart+1)
  }
  const [favorit , setFavorit] = useState([]);
  const addfavorit = (e) => {
    favorit.push(e)
    console.log(favorit)
  }
 
  const [searchMovie,setSearchMovie] = useState("");
   
  const handleSearchTerm = (e) => {
  let value = e.target.value
  setSearchMovie(value)
  }
  console.log(searchMovie);


  return (
    
    <div className="App">
        
       <div>
      <BrowserRouter>  
      
        
          <Route exact path="/ftage"> <Home addNotHeart = {addNotHeart}  notheart={notheart} addfavorit = {addfavorit}  handleSearchTerm={handleSearchTerm} searchMovie={searchMovie}/> </Route>
          <Route   path="/ftage/about"> <AboutMou notheart={notheart} /></Route>
          <Route   path="/ftage/movies" ><CardMovies notheart={notheart} addNotHeart = {addNotHeart} addfavorit = {addfavorit}  handleSearchTerm={handleSearchTerm} searchMovie={searchMovie}/></Route>
          <Route   path="/ftage/favorit"> <Favorit favorit={favorit} notheart={notheart}/> </Route>
          <Route   path="/ftage/dashboard"> <Admin notheart={notheart} addNotHeart = {addNotHeart} addfavorit = {addfavorit}  handleSearchTerm={handleSearchTerm} searchMovie={searchMovie}></Admin> </Route>
 
      </BrowserRouter>
    </div>


 </div>






  );
}

export default App;
