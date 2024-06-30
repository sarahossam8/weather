import * as all from './location.js';
  

const form =document.querySelector(".form");
let city =form.value;

export async function weather(city='cairo'){
    console.log(city);
    let response =await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d868ae2b463341748f772606241806&q=${city}&days=3&aqi=no&alerts=no`); 
    let Data = await response.json();
    all.displayData(Data);

    console.log(Data);
}

form.addEventListener('keyup', function (e){
     if(e.target.value.length == 3){
        weather(e.target.value);
    }
});
weather();