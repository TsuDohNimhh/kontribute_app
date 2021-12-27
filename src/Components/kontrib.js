import React from 'react';
import pic from "../bonsai_logo.png";
import { Button, Card, Row, Col} from 'react-bootstrap';

class Kontrib extends React.Component {
    render(){
        return (
    <Row xs={1} md={2} className="g-1">
    <Col>
      <Card border="light" className="bg-dark m-5" text="light">
        <Card.Body>
          <Card.Text className="fs-3">Interact with the Kontribute eco-system!</Card.Text>
          <Card.Text className="fs-6">
          Kontribute allows you to participate in an evolving story and interact with characters using a DAO voting mechanism, it is hosted on the novel Internet Computer and is fully decentralised from top to bottom. See more info on future plans and roadmap <a href="#roadmap">Here</a>
          </Card.Text>
          <Button size="lg" variant="light" className="m-3" >Enter the App</Button>
          <Button size="lg" variant="light" className="m-3" >Recent Update</Button>
          <br></br>
        </Card.Body>
      </Card>
    </Col>
    <Col>
        <Card.Img variant="fluid" className="m-5" src={pic} />
    </Col>
</Row>
        )
    }
}

export default Kontrib;