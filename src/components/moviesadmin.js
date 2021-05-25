import React, {useState,useEffect}from 'react'
import Rater from 'react-rater'
import axios from 'axios'
import { Link } from "react-router-dom";
import 'react-rater/lib/react-rater.css'
import ModalUpdate from './modalUpdate';

function MoviesAdmin ({searchMovie,addNotHeart,addfavorit}) {
  const [data, setData] = useState([]);
  const getData = () => {

    axios.get('http://localhost:3005/posts').then((response) => {

      setData( response.data);
      console.log("response:", response);

  });
  }
  useEffect(() => {
    getData();
  }, []);
  
  
  function remove(e , id){
    axios.delete(`http://localhost:3005/posts/${id}`)
    .then((response) => console.log("hhhhhhhhhhhhhh", response))
    .catch((err) => console.log("erreur", err) )
  }
 
  return (

     <div className="bg-sec2 pt-5 pb-5">
     <div className="container pt-5 pb-5 bg-cont">
     <div className="row">
         <div className="col-md-2 col-sm-4 col-xs-4 mt-4"></div>
         <div className="col-md-10 col-sm-8 col-xs-8 mt-4">
     <div className="row">

     <div className="col-md-3 col-sm-4 col-xs-3 mt-4">
    <div className="card add_card">
     
      <div class="card-body">
     
      <Link  to="/ftage/dashboard/movies/add"> <i class="fas fa-plus add-icons"></i></Link>
      </div>
     </div>
    </div>
   {
    data.filter(el =>
        el.title.toLowerCase().includes(searchMovie.toLowerCase())
        ).map(el => 
        <>

    <div className="col-md-3 col-sm-4 col-xs-3 mt-4">
          <div className="card movie_card">
      <img src={el.posterUrl} class="img-admin" alt="..."></img>
      <div class="card-body">
      <i class="fas fa-trash remove_button" onClick={(e)=>remove(e, el.id)} data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
                </i>
       
        <div className="update_button">
          <ModalUpdate el={el}/>
        </div>
    
    
        
        <h5 class="card-title">{el.title}</h5>
          <span class="movie_info">{el.year}</span>
          <span class="movie_info float-right"><Rater total={5} rating={el.vote} interactive={false} /></span>
      </div>
     </div>
    </div>
    </>
    )
    }

    </div>
    </div>
     </div>
     </div>
     </div>
  
  
  )

 }

export default MoviesAdmin