import react, { useState } from 'react'
import axios from 'axios'
import {Form,Button} from 'react-bootstrap'

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
    axios.post(' http://localhost:3005/posts',data)
    .then(res => {
      console.log(res.data)
    })
  }
  function handle(e){
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData (newdata)
    console.log(newdata)
  }


    return(
        <>
       <div className="bg-sec2 pt-5 pb-5">
     <div className="container pt-5 pb-5 bg-cont">
     <div className="row">
         <div className="col-md-2 col-sm-4 col-xs-4 mt-4"></div>
         <div className="col-md-6 col-sm-8 col-xs-8 mt-4">
     
          <Form onSubmit={(e)=>submit(e)}>
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
            <Button className="mt-2" variant="outline-movie" type="submit">
              Submit
            </Button>
          </Form>

          </div>
          </div>
          </div>
          </div>
     
        </>
    )
}

export default AddForm