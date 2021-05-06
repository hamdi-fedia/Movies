import React, {useState,useEffect}from 'react'

function Movies() {
    const [data, setData] = useState([]);
  const getData = () => {
    fetch("movie.json")
      .then((response) => response.json())
      .then((movies) => setData(movies));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return data.map((el) => (
    <div className="col-md-3 col-sm-12 col-xs-12 mt-4">
          <div className="card movie_card">
      <img src={el.posterUrl} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <i class="fas fa-play play_buttonn" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
        </i>
        <i class="fas fa-heart play_button" data-toggle="tooltip" data-placement="bottom" title="Add To Favorit">
        </i>
        <h5 class="card-title">{el.title}</h5>
          <span class="movie_info">{el.year}</span>
          <span class="movie_info float-right"><i class="fas fa-star"></i> 9 / 10</span>
      </div>
     </div>
    </div>
  ));

 }

export default Movies