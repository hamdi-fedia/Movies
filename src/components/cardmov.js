import React, {useState,useEffect}from 'react'
import Movies from './moviecard';
import MovieFooter from './moviefooter';
import Movienav from './movienav';

function CardMovies({searchMovie,notheart,handleSearchTerm,addNotHeart,addfavorit}) {
 
   
 
  return (
      <>
       <Movienav notheart={notheart} handleSearchTerm={handleSearchTerm}/>
       <div className="">
       <Movies searchMovie={searchMovie} addNotHeart = {addNotHeart} addfavorit = {addfavorit} />

       </div>
       <MovieFooter/>
      </>
  )

 }

export default CardMovies