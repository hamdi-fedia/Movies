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
          
        <Navbar />
        <Switch>
          <Route path='/' exact > <Home></Home>  </Route>
          <Route path='/ftage/dashboard/movies' >  <MoviesAdmin/> </Route>
          <Route path='/products'><AddForm></AddForm> </Route>
        </Switch>
      </Router>




    )
}

export default Admin;