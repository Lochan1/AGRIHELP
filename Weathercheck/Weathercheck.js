/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";

function Weathercheck() {


  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }


  return (
    
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">Weather Check</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput} />
          <button className="btn btn-primary" type="button"
            onClick={handleSearch}
          >Search</button>
        </div>
      </div>
  

      {Object.keys(data).length > 0 &&
        <div className="col-md-12 text-center mt-5">

          <div className="shadow rounded wetherResultBox">
            <img className="weathorIcon"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />

            <h5 className="weathorCity">
            <h3 className="weathorTemp my-2">City Name: {data.name}</h3>
            </h5>
            <h3 className="weathorTemp my-2">Clouds:{(data?.clouds?.all)}%</h3>
         
            {/* <h3 className="weathorTemp my-2">{(data?.clouds?.all)}</h3> */}
           
            <h3 className="weathorTemp my-2">Description:{(data.weather[0].description)}</h3>
            <h3 className="weathorTemp my-2">Windspeed:{(data?.wind?.speed)}metres/sec%</h3>
            <h3 className="weathorTemp my-2">Temperature:{((data?.main?.temp) - 273.15).toFixed(2)}°C</h3>
            <h3 className="weathorTemp my-2">Humidity: {data.main.humidity}%</h3>
          </div>
        </div>
      }
 
      
      
      
     

    </div>
  );
}

export default Weathercheck;
