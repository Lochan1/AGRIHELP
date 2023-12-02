/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample() {
  const Navigate = useNavigate();
  
 
  return (
    <div className="row my-5 mx-5" Style={{color:'red'}}>
  
    <Card style={{ width: '120rem',background:'greenyellow'}}>
      <Card.Img variant="top" src="https://en-media.thebetterindia.com/uploads/2019/11/Crop-burning-FEat.jpg?compress=true&quality=80&w=1080&dpr=1.0" style={{height:500}} />
      <Card.Body>
        <Card.Title>Parali/Stubble Burning</Card.Title>
        <Card.Text>
        Stubble or parali is the remaining part that is left over after harvesting the crop. When the paddy crops fully ripen, only the upper portion is harvested and the lower portion is left behind. This leftover part of the crop has no utility for the farmers.
        </Card.Text>
        <Button variant="primary" onClick={() => Navigate('/Paralimain')}>Continue Here</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default BasicExample;
