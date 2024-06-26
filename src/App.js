import { useState } from "react"
import axios from "axios"



function App() {
  const [city, setcity] = useState("")
  const [weather, setweather] = useState("")
  const [temp, settemperature] = useState("")
  const [desc, setdesc] = useState("")
  

  function handle(evt) {
    setcity(evt.target.value)
  }


  function clicked() {

    var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ab49755dc5c0dff6b5e7c95d1ff82c2`)

    weatherdata.then(function (success) {
      console.log(success.data)
      setweather(success.data.weather[0].main)
      setdesc(success.data.weather[0].description)
      settemperature(success.data.main.temp)



    })

      .catch(function (error) {
        alert("Please Enter the city name")
      })


  }

  return (
    <>
    
    <div style={{ backgroundColor: "white", textAlign: "center", width: "300px", borderRadius: "10px", height: "300px", padding: "20px", margin: "20px", marginTop: "100px", marginLeft: "80px" }}>
      <h1>Weather Details</h1>
      <p>Enter the valid Country</p>
      <input type="text" value={city} onChange={handle} style={{ marginTop: "10px", border: "black 2px solid", borderRadius: "5px" }} placeholder="Enter The City Name"></input><br />
      <button onClick={clicked} style={{ backgroundColor: "blue", marginTop: "10px", border: "solid 2px black" }} type="submit">Get Report</button>
      <div id="check" >
        <h3 style={{ margin: "2px", marginTop: "20px" }}>Weather: {weather}</h3>
        <h3 style={{ margin: "2px" }}>Temperature: {temp}</h3>

        <h3 style={{ margin: "2px" }}>Description: {desc}</h3>
      </div>
    </div>
    </>
  )
}
export default App