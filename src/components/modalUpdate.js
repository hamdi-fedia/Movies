import React,{useState }  from "react";
import axios from 'axios'
import {Form,Button,Modal} from 'react-bootstrap'





function ModalUpdate({el , id}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [update, setupdate] = useState({
        title : el.title,
        year : el.year,
        runtime: el.runtime,
        vote: el.vote,
        genres: el.genres, 
        actors: el.actors,
        plot: el.plot,
        director: el.director,
        posterUrl : el.posterUrl,
      })

      function upDateMovie(id){
        axios.put(`https://movies-app-16d8f-default-rtdb.firebaseio.com/posts/${id}.json`,update)
        .then((response) => console.log("hhhhhhhhhhhhhh", response))
        .catch((err) => console.log("erreur", err) )
        }
      
      function handleChangeMovie(e){
        const newdata = { ...update }
        newdata[e.target.id] = e.target.value
        setupdate (newdata)
        console.log(newdata)
      }

  
    return(
      <>


     <div  onClick={handleShow}>
        <i class="far fa-edit "  data-placement="bottom" title="Play Trailer">
        </i>
      </div>

      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>UpDate Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          


        
        <Form >
            <Form.Group >
              <label className="label-admin-add">title</label>
              <input onChange={handleChangeMovie} value={update.title} type="text" id="title" placeholder="title" /><br></br>

      
              <label className="label-admin-add">year</label>
              <input onChange={handleChangeMovie} value={update.year} type="text" id="year" placeholder="year" /><br></br>
          

          
              <label className="label-admin-add">runtime</label>
              <input onChange={handleChangeMovie} value={update.runtime} type="text" id="runtime" placeholder="runtime" /><br></br>
           

          
              <label className="label-admin-add">vote</label>
              <input onChange={handleChangeMovie} value={update.vote} type="text" id="vote" placeholder="vote" /><br></br>
           

           
              <label className="label-admin-add">genres</label>
              <input onChange={handleChangeMovie} value={update.genres} type="text" id="genres" placeholder="genres" /><br></br>
            

           
              <label className="label-admin-add">director</label>
              <input onChange={handleChangeMovie} value={update.director} type="text" id="director" placeholder="director" /><br></br>
           
           
              <label className="label-admin-add">actors</label>
              <input onChange={handleChangeMovie} value={update.actors} type="text" id="actors" placeholder="actors" /><br></br>
           

          
              <label className="label-admin-add">plot</label>
              <input onChange={handleChangeMovie} value={update.actors} type="text" id="plot" placeholder="plot" /><br></br>
            

            
              <label className="label-admin-add">posterUrl</label>
              <input onChange={handleChangeMovie} value={update.posterUrl} type="text" id="posterUrl" placeholder="posterUrl" /><br></br>
           
            </Form.Group>
            
            <Button  onClick={upDateMovie(id)} className="mt-2" variant="outline-movie" type="submit">
              Submit
            </Button>
          </Form>





        </Modal.Body>
       
      </Modal>
      </>
    )
}

export default ModalUpdate