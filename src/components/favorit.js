import react from 'react'
import MovieFooter from './moviefooter'
import Movienav from './movienav'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'



function Favorit({favorit , notheart}){
    return(<>
    <Movienav notheart={notheart}/>

    <div className="bg-sec2 pt-5 pb-5">
     <div className="container pt-5 pb-5 bg-cont">
     <div className="row test-center">
       <div className="">

       <div className=" d-flex justify-contant-between flex-wrap  card-fav">
         {
           favorit.map(el => 

            <div className="mr-5">
                  <div className="card movie_card mb-5 ">
              <img src={el.posterUrl} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <i class="fas fa-play play_buttonn-fav "  title="Play Trailer">
                </i>
                <i class="fas fa-trash play_button-fav" title="Add To Favorit">
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
   </div>
  </div>    
  <MovieFooter/>
    </>)
}
export default Favorit