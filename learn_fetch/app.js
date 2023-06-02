const pull = document.querySelector('button');
const imgr = document.querySelector('#icon');
const condition = document.querySelector('#condition_text');
const wind = document.querySelector('#wind');
const precip = document.querySelector('#precip');
const pressure = document.querySelector('#pressure');
const fer = document.querySelector('#f')

const day1imgr = document.querySelector('#day1imgr');
const day1fer = document.querySelector('#day1fer');
const day1day = document.querySelector('#day1day');

const day2imgr = document.querySelector('#day2imgr');
const day2fer = document.querySelector('#day2fer');
const day2day = document.querySelector('#day2day');

const day3imgr = document.querySelector('#day3imgr');
const day3fer = document.querySelector('#day3fer');
const day3day = document.querySelector('#day3day');

const day4imgr = document.querySelector('#day4imgr');
const day4fer = document.querySelector('#day4fer');
const day4day = document.querySelector('#day4day');

const day5imgr = document.querySelector('#day5imgr');
const day5fer = document.querySelector('#day5fer');
const day5day = document.querySelector('#day5day');



async function logJSONData() {
    const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=9f815484e393418b97110358230206&q&q=New York&days=7&aqi=no&alerts=no");

    const jsonData = await response.json();

    imgr.src = 'https:' + jsonData['current']['condition']['icon']

    condition.innerHTML = jsonData['current']['condition']['text']

    wind.innerHTML = jsonData['current']['wind_mph']

    precip.innerHTML = jsonData['current']['precip_in']

    pressure.innerHTML = jsonData['current']['pressure_in']

    fer.innerHTML = jsonData['current']['temp_f']

    day1imgr.src = 'https:' + jsonData['forecast']['forecastday'][0]['day']['condition']['icon']

    day1fer.innerHTML = jsonData['forecast']['forecastday'][0]['day']['avgtemp_f']

    day1day.innerHTML = new Date(jsonData['forecast']['forecastday'][0]['date']).toLocaleString('en-us', { weekday: 'short' });




    day2imgr.src = 'https:' + jsonData['forecast']['forecastday'][1]['day']['condition']['icon']

    day2fer.innerHTML = jsonData['forecast']['forecastday'][1]['day']['avgtemp_f']

    day2day.innerHTML = new Date(jsonData['forecast']['forecastday'][1]['date']).toLocaleString('en-us', { weekday: 'short' });



    day3imgr.src = 'https:' + jsonData['forecast']['forecastday'][2]['day']['condition']['icon']

    day3fer.innerHTML = jsonData['forecast']['forecastday'][2]['day']['avgtemp_f']

    day3day.innerHTML = new Date(jsonData['forecast']['forecastday'][2]['date']).toLocaleString('en-us', { weekday: 'short' });



    day4imgr.src = 'https:' + jsonData['forecast']['forecastday'][3]['day']['condition']['icon']

    day4fer.innerHTML = jsonData['forecast']['forecastday'][3]['day']['avgtemp_f']

    day4day.innerHTML = new Date(jsonData['forecast']['forecastday'][3]['date']).toLocaleString('en-us', { weekday: 'short' });




    day5imgr.src = 'https:' + jsonData['forecast']['forecastday'][4]['day']['condition']['icon']

    day5fer.innerHTML = jsonData['forecast']['forecastday'][4]['day']['avgtemp_f']

    day5day.innerHTML = new Date(jsonData['forecast']['forecastday'][4]['date']).toLocaleString('en-us', { weekday: 'short' });
}


logJSONData();




