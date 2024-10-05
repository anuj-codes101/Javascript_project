const apikey = "3f658504f3e1148cb9fcd375369896f8"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector("input")
const searchbutton = document.querySelector("button")
const weathericon = document.querySelector(".weather-icon")


async function checkweather(city) {
    const response = await fetch(apiurl +  city +`&appid=${apikey}`);

if(response.status== 404){
    document.querySelector(".error").style.display= "block";
    document.querySelector(".weather").style.display= "none";
    document.querySelector(".details").style.display= "none";
}
else{
    
    var data = await response.json();
    console.log(data);


document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


if (data.weather[0].main== "Clouds"){
    weathericon.src= "icosn/clouds.png";
}
else if (data.weather[0].main == "Clear"){
    weathericon.src= "icosn/clear.png";
}
else if (data.weather[0].main == "Rain"){
    weathericon.src= "icosn/rain.png";
}
else if (data.weather[0].main == "Drizzle"){
    weathericon.src= "icosn/drizzle.png";
}
else if (data.weather[0].main == "Mist"){
    weathericon.src= "icosn/mist.png";
}
else if (data.weather[0].main == "Haze"){
    weathericon.src= "icosn/mist.png";
}
document.querySelector(".error").style.display= "none";
document.querySelector(".weather").style.display= "flex";
document.querySelector(".details").style.display= "flex";



// else if (data.weather[0].main == "Clear"){
//     weathericon.src= "icosn/clear.png";
// }

}

    
}


searchbutton.addEventListener("click",()=>{
    checkweather(searchbox.value)
})


