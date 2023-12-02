import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
function GridExample() {
  return (
    <Row xs={1} md={2} className="mx-5 bg-warning">
     
        <Col>
          <Card>
            <Card.Img variant="top bg-success" src="https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg" class="rounded-circle" />
            <Card.Body>
            
              
              <Button variant="danger">For More</Button>{' '}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="rounded-circle" />
            <Card.Body>
              
              
              <Button variant="danger">For More</Button>{' '}
            </Card.Body>
          </Card>
        </Col>
    </Row>
    
  );
}

export default GridExample;