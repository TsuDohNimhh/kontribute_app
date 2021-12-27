import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';

class Roadmap extends React.Component {
    render(){
        return (
<ListGroup className="col-md-5 mx-auto mt-5" as="ol" numbered>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <Badge variant="primary" pill>
      14
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <Badge variant="primary" pill>
      14
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <Badge variant="primary" pill>
      14
    </Badge>
  </ListGroup.Item>
</ListGroup>
        )
    }
}

export default Roadmap;