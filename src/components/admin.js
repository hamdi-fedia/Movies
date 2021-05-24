import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Reports from './Reports';
import Products from './Products';
import Movies from './moviecard';
import AddForm from './formadd';
import MoviesAdmin from './moviesadmin';
import NavDashbord from './navdashbord';



function Admin ({addNotHeart,notheart,addfavorit,handleSearchTerm,searchMovie}){
    return(

        <Router>
          
        <Navbar handleSearchTerm={handleSearchTerm}  notheart={notheart} />
        <Switch>
          <Route path='/ftage/dashboard' exact > <Home></Home>  </Route>
          <Route exact path='/ftage/dashboard/movies' >  <MoviesAdmin searchMovie={searchMovie} addNotHeart = {addNotHeart} addfavorit = {addfavorit} /> </Route>
          <Route exact path='/ftage/dashboard/movies/add' >  <AddForm></AddForm> </Route>
          <Route path='/products'> </Route>
        </Switch>
      </Router>




    )
}

export default Admin;