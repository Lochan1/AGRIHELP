import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Paralimain() {
  const Navigate = useNavigate();
  
  return (
    
    <div className='containerparali my-4' >
    <div className="container my-5">
        <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7">
              <h1 className="featurette-heading"  style={{ background: "red" , color: "black"}}>Affects of Parali on our Environment</h1>
              <p className="lead"  style={{ background: "yellow" ,color: "green"}}><b>The burning of stubble or parali releases gases like Carbon Monoxide and Carbon Dioxide which results in severe air pollution. It also has an adverse effect on human health. For example, the burning of stubble can cause health problems like skin and eye irritation, severe neurological cardiovascular and respiratory diseases, asthma, chronic obstructive pulmonary disease (COPD), bronchitis, lung capacity loss, emphysema, cancer......
              </b></p>
                <br></br>
              <button type="button" className="btn btn-dark" onClick={() => Navigate('/Airquality')}>Continue Here</button>
             
            </div>
            <div className="col-md-5">
             <img src="https://static.toiimg.com/thumb/imgsize-23456,msid-87727910,width-600,resizemode-4/87727910.jpg" width="500" height="500" alt='...' />
            </div>
          </div>
    </div>
    <div className="container ">
        <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7 order-md-1 my-2">
            <h1 className="featurette-heading mx-5"  style={{ background: "pink" , color: "purple"}}>Methods to Tackle Parali</h1>
            <p className="lead mx-5"  style={{ background: "grey" ,color: "brown"}}><b>There are some solutions to overcome the problem of parali in our website Agrihelp. please click on below button to continue 
              </b></p>
                <br></br>
              <button type="button" className="btn btn-dark" onClick={() => Navigate('/Methods')}>Continue Here</button>
            </div>
            <div className="col-md-5">
                <img src="https://images.thequint.com/thequint%2F2019-11%2Fc19b6df5-cbdc-42a8-a869-15ed30fe11d7%2Ffarmer.jpg?rect=0%2C0%2C2000%2C1125&auto=format%2Ccompress&fmt=webp&width=720" width="500" height="500" alt='...' />
            </div>
          </div>
    </div>
    <br></br>
    <div className="container my-4">
        <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7">
            <h1 className="featurette-heading mx-5"  style={{ background: "blue" , color: "yellowgreen"}}>Steps taken by Government to overcome Parali problem</h1>
            <p className="lead mx-5"  style={{ background: "orange" ,color: "brown"}}><b>The Indian Govt. has taken many steps to tackle this problem , which you can view by clicking on the below button......
              </b></p>
                <br></br>
              <button type="button" className="btn btn-dark" onClick={() => Navigate('/Steps')}>Continue Here</button>
            </div>
            <div className="col-md-5">
                <img src="https://www.livelaw.in/h-upload/2021/11/13/403937-stubble-burning-and-sc.jpg" width="500" height="500" alt='...' />
            </div>
          </div>
    </div>
    
    <footer className="container my-4" style={{ background: "black" ,color: "brown"}}>
      <p className="float-right"><a href="/" >Back to Main-Page</a></p>
      <p>© 2022-2024 Agrihelp.com <a href="/">Privacy</a> · <a href="/">Terms</a></p>
    </footer>
    </div>
  )
  }
