import React, {useState,useEffect}from 'react'
import Rater from 'react-rater'
import axios from 'axios'
import { Link } from "react-router-dom";
import 'react-rater/lib/react-rater.css'
import ModalUpdate from './modalUpdate';
import AddForm from './formadd';


function MoviesAdmin ({searchMovie,addNotHeart,addfavorit}) {
  const [datas, setDatas] = useState([]);
  const getDatas = () => {

    axios.get('https://movies-app-16d8f-default-rtdb.firebaseio.com/posts.json').then((response) => {

      setDatas(response.data);
      console.log("response:", response);

  });
  }
  useEffect(() => {
    getDatas();
  }, []);
  
  
  const remove =(id)=>{
    axios.delete(`https://movies-app-16d8f-default-rtdb.firebaseio.com/posts/${id}/.json`)
    .then((response) => console.log("hhhhhhhhhhhhhh", response))
    .then(res=>refreshPage())    
    .catch((err) => console.log("erreur", err) )
  }

  const refreshPage = ()=>{
    window.location.reload();
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
      <AddForm/>
      {/* <Link  to="/ftage/dashboard/movies/add">  */}
      {/* </Link> */}
      </div>
     </div>
    </div>
   {
   Object.keys(datas)
  //  .filter((id) =>
  //       datas[id].title.toLowerCase().includes(searchMovie.toLowerCase())
        .map(id=> 
        <>

    <div className="col-md-3 col-sm-4 col-xs-3 mt-4">
          <div className="card movie_card">
      <img src={datas[id].posterUrl} class="img-admin" alt="..."></img>
      <div class="card-body">
      <i class="fas fa-trash remove_button" onClick={()=>remove(id)} data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
                </i>
       
        <div className="update_button">
          <ModalUpdate id={id} el={datas[id]}/>
        </div>
    
    
        
        <h5 class="card-title">{datas[id].title}</h5>
          <span class="movie_info">{datas[id].year}</span>
          <span class="movie_info float-right"><Rater total={5} rating={datas[id].vote} interactive={false} /></span>
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