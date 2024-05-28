/*import React, { useState } from 'react';
import "./Whether.css"
import cloudImage from './images/rain.jpg'; // Ensure the image is in the same director
import searchicon from './images/search.png';
import humi from './images/humi3.png' 
import win from './images/wind3.png'


const Degre = ({ion,temp,city,country,lat,log,humin,wind ,hup,wip})  =>{
  return(
    <div>
      <img src={ion} alt="" className='image' />
      <div className='temp'>{temp}°C</div>
      <div className="city">{city}</div>
      <div className="country">{country}</div>
      <div className="cord">
       <div>
       <span className="lat">lattitude</span>
      <span>{lat}</span>
       </div>
       <div>
       <span className="log">longitude</span>
      <span>{log}</span>
     

      </div>
      </div>
       <div className="data-container">
   <div className="element"><img src={humin} alt="" />
 
  <div className="data">
    <div className="percentage">{wip}</div>
    <div className="text">humidity</div>
  </div>
  </div>
  <div className="element1"><img src={wind} alt="" />
 
  <div className="data">
    <div className="percentage">{wip}</div>
    <div className="text">wind speed</div>
  </div>
  </div>
       </div>
    
    </div>
  )
}

const Whether = () => {
  const[icon,seticon]=useState(cloudImage)
  const[usetemp,settemp]=useState(0)
  const[usecity,setcity]=useState("chennai")
  const[usecountry,setcountry]=useState("IN")
  const[uselot,setlot]=useState(0)
  const[uselog,setlog]=useState(0)
  const[usehumi,sethumi]=useState(humi)
  const[usewin,setwin]=useState(win)
  const[usehub,sethub]=useState(0)
  const[usewip,setwip]=useState(0)
  const[text,settext]=useState("chennai")
  const[citynotfound,setcitynotfound]=useState(false)

  async function search(){
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=0c48f06afb99d67fd4e0a9311a34eacf&units=Metric`
    try{
      let res = await  fetch(url);
     let data =  await res.json();
     if(data.cod==="404"){
      console.error("city not found")
      setcitynotfound(true)
     }
     console.log.data(data)
      sethumi(data.main.humidity)
      setwin(data.main.speed)
      settemp(data.main.temp)
      setcity(data.name)
      setcountry(data.sys.country)
      setlot(data.coord.lat)
      setlog(data.coord.lon)
     
    }
    catch(error){
 console.error("an error occured:", error.message)
    }
    finally{

    }
  }
  function handle(e)
  {
     settext(e.target.value)
  }
  function handledown (e){
if (e.key==="enter")
{
  search()
}
 
}
function click(){
  search()
}
  return (
    <div className='container'>
      <div className='inputicon'>
        <input type="text" onChange={handle} value={text}  onKeyDown={handledown}/>
        <img src={searchicon} alt="" className='searchicon' onClick={click} />
        <Degre ion={icon} temp={usetemp} city={usecity} country={usecountry} lat={uselot} log={uselog} humin={usehumi} wind={usewin}
         hup={usehub} wip={usewip}/>
      </div>
    
    </div>
  );
};

export default Whether;*/
import React, { useEffect, useState } from 'react';
import "./Whether.css"
import cloudImage from './images/ra.png'; // Ensure the image is in the same director
import searchicon from './images/search.png';
import humi from './images/pn.png';
import win from './images/humid.png';

const Degre = ({ ion, temp, city, country, lat, log, humin, wind, hup, wip }) => {
  return (
    <div>
      <img src={ion} alt="" className='image' />
      <div className='temp'>{temp}°C</div>
      <div className="city">{city}</div>
      <div className="country">{country}</div>
      <div className="cord">
        <div>
          <span className="lat">latitude</span>
          <span>{lat}</span>
        </div>
        <div>
          <span className="log">longitude</span>
          <span>{log}</span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humin} alt="" />
          <div className="data">
            <div className="percentage">{hup}%</div>
            <div className="text">humidity</div>
          </div>
        </div>
        <div className="element1">
          <img src={wind} alt="" />
          <div className="data">
            <div className="percentage">{wip} m/s</div>
            <div className="text">wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Whether = () => {
  const [icon, setIcon] = useState(cloudImage);
  const [usetemp, setTemp] = useState(0);
  const [usecity, setCity] = useState("chennai");
  const [usecountry, setCountry] = useState("IN");
  const [uselot, setLat] = useState(0);
  const [uselog, setLon] = useState(0);
  const [usehumi, setHumi] = useState(humi);
  const [usewin, setWin] = useState(win);
  const [usehub, setHub] = useState(0);
  const [usewip, setWip] = useState(0);
  const [text, setText] = useState("Nagercoil");
  const [citynotfound, setCityNotFound] = useState(false);

  async function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=0c48f06afb99d67fd4e0a9311a34eacf&units=Metric`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      if (data.cod === "404") {
        console.error("City not found");
        setCityNotFound(true);
        return;
      }
      console.log(data);
      setHub(data.main.humidity);
      setWip(data.wind.speed);
      setTemp(data.main.temp);
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLon(data.coord.lon);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }

  function handle(e) {
    setText(e.target.value);
  }

  function handledown(e) {
    if (e.key === "Enter") {
      search();
    }
  }

  function click() {
    search();
  }
  useEffect(function() {
    search();
  }, []);

  return (
    <div className='container'>
      <div className='inputicon'>
        <input type="text" onChange={handle} value={text} onKeyDown={handledown} />
        <img src={searchicon} alt="" className='searchicon' onClick={click} />
      <Degre ion={icon} temp={usetemp} city={usecity} country={usecountry} lat={uselot} log={uselog} humin={usehumi} wind={usewin}
          hup={usehub} wip={usewip} />
          <div className="citynot">Designed by JK</div>
      </div>
    
    </div>
  );
};

export default Whether;

