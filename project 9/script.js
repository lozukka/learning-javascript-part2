async function getWeather(){
    const {temperature, windSpeed, condition} = await fetchWeather();
    renderWeather(temperature, windSpeed, condition);
}

async function fetchWeather(){
    try {
        const response = await fetch("./weather.json");
        if(!response.ok) throw new Error ("Failed to load weather");

        const data = await response.json();
        const index = Math.floor(Math.random()* data.weatherReports.length);
        return data.weatherReports[index];

    } catch (error) {
        console.log(error);
        return {temperature: "Failed to load weather", windSpeed: "", condition: ""};
    }
    
}

function renderWeather(temperature, windSpeed, condition){
    let temperatureText = document.getElementById("temperature");
    let windText = document.getElementById("wind");
    let conditionText = document.getElementById("condition");

    temperatureText.textContent = temperature;
    windText.textContent = windSpeed;
    conditionText.textContent = condition;
}