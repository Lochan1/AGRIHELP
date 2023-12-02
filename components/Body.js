import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

export  function Body() {
  return (
    
    <div className="container my-5" style={{background: 'skyblue'}}>
      
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          style={{height:500}}
          src="https://media.istockphoto.com/id/1320570548/photo/peanuts-plantation-in-countryside-thailand-near-mountain.jpg?b=1&s=170667a&w=0&k=20&c=vz1Fg8a24u4rS1qxPgMRnqBNTQSFTGLuG5BFrrZcoYA="
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3>Adding Green to your Life</h3>
          
          <Button variant="success">Organic farming</Button>{' '}
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          style={{height:500}}
          src="https://m.economictimes.com/thumb/msid-89285460,width-1200,height-900,resizemode-4,imgsize-197196/famers-istock.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Agriculture with a new Skill</h3>
         
          <Button variant="success">Organic farming</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1316729091/photo/young-indian-farmer-standing-at-wheat-field.jpg?b=1&s=170667a&w=0&k=20&c=rybXzKAgPDo9LVFATKpqXSn_ZHCidSLZDbycX91txtA="
          alt="Third slide "
          style={{height:500}}
        />

        <Carousel.Caption>
          <h3>bringing Growth in Agri</h3>
         
          <Button variant="success">Organic farming</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
</div>
  );
}

export default Body;