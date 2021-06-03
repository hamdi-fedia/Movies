import react, { useState } from 'react'
import axios from 'axios'
import {Form,Button,Modal} from 'react-bootstrap'

function AddForm (){
  const [data, setData] = useState({
    title : "",
    year : "",
    runtime: "",
    vote: "",
    genres: "",
    actors: "",
    plot:"",
    director:"",
    posterUrl : "",
  })
  function submit(e){
    e.preventDefault();
    axios.post('https://movies-app-16d8f-default-rtdb.firebaseio.com/posts.json',data)
    .then(res => {console.log(res.data)})
    .then(res=>refreshPage())   

  }

  const refreshPage = ()=>{
    window.location.reload();
 }

  function handle(e){
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData (newdata)
    console.log(newdata)
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return(
        <>

       <div onClick={handleShow}>
       <i class="fas fa-plus add-icons"></i>
        </div>

      <Modal show={show} onHide={handleClose}  size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Movies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         



       <div >
     <div className="container">
     <div >
        
         <div className="col-md-11 col-sm-10 col-xs-10 mx-5">
     
          <Form >
            <Form.Group >
              <label className="label-admin-add">title</label>
              <input onChange={(e)=>handle(e)} value={data.title} type="text" id="title" placeholder="title" /><br></br>

      
              <label className="label-admin-add">year</label>
              <input onChange={(e)=>handle(e)} value={data.year} type="text" id="year" placeholder="year" /><br></br>
          

          
              <label className="label-admin-add">runtime</label>
              <input onChange={(e)=>handle(e)} value={data.runtime} type="text" id="runtime" placeholder="runtime" /><br></br>
           

          
              <label className="label-admin-add">vote</label>
              <input onChange={(e)=>handle(e)} value={data.vote} type="text" id="vote" placeholder="vote" /><br></br>
           

           
              <label className="label-admin-add">genres</label>
              <input onChange={(e)=>handle(e)} value={data.genres} type="text" id="genres" placeholder="genres" /><br></br>
            

           
              <label className="label-admin-add">director</label>
              <input onChange={(e)=>handle(e)} value={data.director} type="text" id="director" placeholder="director" /><br></br>
           
           
              <label className="label-admin-add">actors</label>
              <input onChange={(e)=>handle(e)} value={data.actors} type="text" id="actors" placeholder="actors" /><br></br>
           

          
              <label className="label-admin-add">plot</label>
              <input onChange={(e)=>handle(e)} value={data.actors} type="text" id="plot" placeholder="plot" /><br></br>
            

            
              <label className="label-admin-add">posterUrl</label>
              <input onChange={(e)=>handle(e)} value={data.posterUrl} type="text" id="posterUrl" placeholder="posterUrl" /><br></br>
            </Form.Group>
            <Button onClick={(e)=>submit(e)} className="mt-2" variant="outline-movie" >
              Submit
            </Button>
          </Form>

          </div>
          </div>
          </div>
          </div>
     
          
          
        </Modal.Body>
       
        </Modal>







        </>
    )
}

export default AddForm