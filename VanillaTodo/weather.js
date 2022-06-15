
function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=870b315b24acadd29e204234684699ba&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        console.log(data);
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");

        city.innerText = `[${data.name}]`;
        weather.innerText = `${data.weather[0].main} - ${data.main.temp}`;
    })
}

function onGeoError() {
    weather.innerText = "Error";
    city.innerText = "Error";
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);