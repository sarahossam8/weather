import * as index from './index.js';
import * as timemodule from './time.js';

let container;
export function displayData(dat){
    console.log(dat);
 let date0 = timemodule.getDayOfWeek(dat.forecast.forecastday[0].date);
 let date1 = timemodule.getDayOfWeek(dat.forecast.forecastday[1].date);
 let date2 = timemodule.getDayOfWeek(dat.forecast.forecastday[2].date);

    // let AllDAta=index.weather(val);
 container=`<div class="information">
  <div class="first">
    <div class="demo">
      <div class="up">
        <p>${date0}</p>
      <p>${dat.forecast.forecastday[0].date}</p>
      </div>
      <div class="Down">
        <p>${dat.location.name}</p>
        <p class="number">${dat.forecast.forecastday[0].day.maxtemp_c}<sup>o</sup>C</p>
        <img src=${"https:"+dat.forecast.forecastday[0].day.condition.icon}></img>
        <p class="clear">${dat.forecast.forecastday[0].day.condition.text}</p>
        <div class="icons-down">
          <div><img src="./img/icon-umberella.png" alt="">
          <p>${dat.current.humidity+"%"}</p></div>
          <div><img src="./img/icon-wind.png" alt="">
            <p>${dat.current.wind_kph}km/h</p></div> 
            <div><img src="./img/icon-compass.png" alt="">
              <p>${dat.current.wind_dir}</p></div>
        </div>
      </div></div>
  </div>
  <div class="second">
    <div class="second2">
      <div class="up2">
        <p>${date1}</p>
      </div>
      <div class="Down">
        <img src=${"https:"+dat.forecast.forecastday[1].day.condition.icon}></img>
        <p class="number1">${dat.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</p>
        <p class="number2">${dat.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>.8</p>
      <p class="clear">${dat.forecast.forecastday[1].day.condition.text}</p>
      </div></div>
  </div>
  <div class="second third">
    <div class="up2">
      <p>${date2}</p>
    </div>
    <div class="Down">
              <img src=${"https:"+dat.forecast.forecastday[2].day.condition.icon}></img>
      <p class="number1">${dat.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</p>
      <p class="number2">${dat.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>.8</p>
      <p class="clear">${dat.forecast.forecastday[1].day.condition.text}</p>
    </div>
  </div>
</div> `
    document.querySelector(".info").innerHTML=container;
 }
