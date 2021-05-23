import react, { useState } from 'react'
import axios from 'axios'
import {Tab,Row,Col,Nav,Form,Button} from 'react-bootstrap'

function AddForm (){
  const [data, setData] = useState({
    title : "",
    year : "",
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
        <div>
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">hero404
       
           
          <Form onSubmit={(e)=>submit(e)}>
            <Form.Group >
              <Form.Label>title</Form.Label>
              <Form.Control onChange={(e)=>handle(e)} value={data.title} type="text" id="title" placeholder="title" />
            </Form.Group>

            <Form.Group >
              <Form.Label>name</Form.Label>
              <Form.Control onChange={(e)=>handle(e)} value={data.year} type="text" id="year" placeholder="name" />
            </Form.Group>
            <Form.Group >
              <Form.Label>date</Form.Label>
              <Form.Control onChange={(e)=>handle(e)} value={data.posterUrl} type="text" id="posterUrl" placeholder="date" />
            </Form.Group>
            <Button className="mt-2" variant="primary" type="submit">
              Submit
            </Button>
          </Form>

        </Tab.Pane>
        <Tab.Pane eventKey="second">
         hamdi
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        </div>
     
        </>
    )
}

export default AddForm