const inputElem = document.querySelector("#inputElem");
const temperature = document.querySelector("#temperature h2");
const weatherImage = document.querySelector("#weatherImage img");
const windSpeed = document.querySelector(".wind h2");
const humidityData = document.querySelector(".humidity h2")


const datas = (temp,wind,humidity)=>{
    
    temperature.innerHTML = ` Temperature:${temp} °C`;
    windSpeed.innerHTML = `${wind} km/hr `;
    humidityData.innerHTML = `${humidity} g.m-3`



}


const getWeatherInfo = async (val) => {

    try{
   
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appi={Your Api Key}&units=metric`;

    const response = await fetch(apiUrl);

    const data = await response.json();
 
    datas(Math.round(data.main.temp),data.wind.speed,data.main.humidity);
    
    switch (data.weather[0].main) {
        case "Clear":
            weatherImage.src = './images/Clear.png';
            break;
        case "Clouds":
            weatherImage.src = './images/cloudy.png';
            break;
        case "Sunny":
            weatherImage.src = './images/sunny.png';
            break;
        default:
            console.log("Unknown weather condition:", data.weather[0].main);
    }
       
}catch(err){

    temperature.innerHTML = err;

}



}
 
   
 inputElem.addEventListener("input",(e)=>{    
        getWeatherInfo(e.target.value);
  
 })

 