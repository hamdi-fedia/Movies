import React, {useState,useEffect}from 'react'
import Rater from 'react-rater'
import axios from 'axios'

import 'react-rater/lib/react-rater.css'

function Movies ({searchMovie,addNotHeart,addfavorit}) {
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
   
 
  return (

     <div className="bg-sec2 pt-5 pb-5">
     <div className="container pt-5 pb-5 bg-cont">
     <div className="row">
       
   {
    data.filter(el =>
      el.title.toLowerCase().includes(searchMovie.toLowerCase())
      ).map(el => 

    <div className="col-md-3 col-sm-12 col-xs-12 mt-4">
          <div className="card movie_card">
      <img src={el.posterUrl} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <i class="fas fa-play play_buttonn" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
        </i>
        <i class="fas fa-heart play_button" onClick={()=> {addNotHeart(); addfavorit(el)}} title="Add To Favorit">
        </i>
        <h5 class="card-title">{el.title}</h5>
          <span class="movie_info">{el.year}</span>
          <span class="movie_info float-right"><Rater total={5} rating={el.vote} interactive={false} /></span>
      </div>
     </div>
    </div>
    )
    }

    </div>
     </div>
     </div>
  
  
  )

 }

export default Movies