document.getElementById('biteMe').addEventListener('click', (e) => {
    console.log(e.target.dataset.juice);
})

//============
//DOM ELEMENTS
//============
let input = document.getElementById('input')
let DYM = document.querySelector('.DYM')
let weatherIcon = document.querySelector('.weatherIcon')
let firstChoice = document.getElementById('1')
let dymOne = document.getElementById('2')
let dymTwo = document.getElementById('3')
let dymThree = document.getElementById('4')
let dymFour = document.getElementById('5')
let countOP = document.querySelector('.country')
let temp = document.querySelector('.temp')
let currentW = document.querySelector('.currentweather')
let elevation = document.querySelector('.elevation')
let sunrise = document.querySelector('.sunrise')
let sunset = document.querySelector('.sunset')

let otherOptions = document.querySelector('.otherOptions')

let userLat
let userLon

// weatherIcon.src = './weatherPics/clear.svg'

let choice = document.querySelector('.didYouMean')
choice.style.visibility = 'hidden'
DYM.style.visibility = 'hidden'
weatherIcon.style.visibility = 'hidden'

input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        document.getElementById('addButton').click()
    }
})

let options = {
    method: 'GET',
    headers: { 'X-Api-Key': 'AIHeZQUtYwS4DUw3DQLJug==aU56gxfYhsQryj3h' },
}
async function fetchData() {
    firstChoice.innerText = ''
    dymOne.innerText = ''
    dymTwo.innerText = ''
    dymThree.innerText = ''
    dymFour.innerText = ''
    let name = input.value
    input.value = ''
    let url = `https://api.api-ninjas.com/v1/city?name=${name}&limit=5`
    let response = await fetch(url, options)
    let info = await response.json()
    console.log(info);
    firstChoice.innerText = info[0].name
    countOP.textContent = info[0].country
    choice.style.visibility = 'visible'
    DYM.style.visibility = 'visible'
    weatherIcon.style.visibility = 'visible'



    for (let i = 1; i < info.length; i++) {
        let choiceI = document.getElementById(i + 1)
        choiceI.innerText = info[i].name + ', ' + info[i].country
        choiceI.dataset.cityName = info[i].name
        choiceI.dataset.country = info[i].country
        choiceI.dataset.pop = info[i].population
        choiceI.dataset.lat = info[0].latitude
        choiceI.dataset.lon = info[0].longitude
    }
    userLat = info[0].latitude
    userLon = info[0].longitude
    fetchWeather(userLat, userLon)
}



async function fetchWeather(lat, lon) {
    let weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&daily=weathercode,sunrise,sunset&current_weather=true&timezone=auto`)
    let weatherInfo = await weatherResponse.json()

    let weatherCurrently

    switch (weatherInfo.current_weather.weathercode) {
        case 0:
            weatherCurrently = "Clear sky";
            weatherIcon.src = './weatherPics/clear.svg'
            // document.body.style.backgroundImage = "url('./weatherPics/sunny.jpg')";
            break;
        case 1:
            weatherCurrently = "Partly cloudy";
            weatherIcon.src = './weatherPics/cloud.svg'

            // document.body.style.backgroundImage = "url('./weatherPics/partly-cloudy.jpg')";
            break;
        case 2:
            weatherCurrently = "Overcast";
            weatherIcon.src = './weatherPics/cloud.svg'

            // document.body.style.backgroundImage = "url('./weatherPics/cloudy.jpg')";
            break;
        case 3:
            weatherCurrently = "Overcast";
            weatherIcon.src = './weatherPics/cloud.svg'

            // document.body.style.backgroundImage = "url('./weatherPics/cloudy.jpg')";
            break;
        case 45:
        case 48:
            weatherCurrently = "Fog";
            weatherIcon.src = './weatherPics/cloud.svg'

            // document.body.style.backgroundImage = "url('./weatherPics/fog.jpg')";
            break;
        case 51:
            weatherCurrently = "Light Drizzle";
            weatherIcon.src = './weatherPics/rain.svg'

        // document.body.style.backgroundImage = "url(./'weatherPics/drizzle.jpg')";
        case 53:
            weatherCurrently = "Moderate Drizzle";
            weatherIcon.src = './weatherPics/rain.svg'

        // document.body.style.backgroundImage = "url('./weatherPics/drizzle.jpg')";
        case 55:
            weatherCurrently = "Intense Drizzle";
            weatherIcon.src = './weatherPics/rain.svg'

            // document.body.style.backgroundImage = "url('./weatherPics/drizzle.jpg')";
            break;
        case 56:
            weatherCurrently = "Freezing Light Drizzle"
            weatherIcon.src = './weatherPics/rain.svg'

        // document.body.style.backgroundImage = "url('./weatherPics/drizzle.jpg')";
        case 57:
            weatherCurrently = "Dense Freezing Drizzle";
            weatherIcon.src = './weatherPics/rain.svg'

            // document.body.style.backgroundImage = "url('./weatherPics/drizzle.jpg')";
            break;
        case 61:
            weatherCurrently = "Slight Rain";
            weatherIcon.src = './weatherPics/rain.svg'

        // document.body.style.backgroundImage = "url('./weatherPics/rain.jpg')";
        case 63:
            weatherCurrently = "Moderate Rain";
            weatherIcon.src = './weatherPics/rain.svg'

        // document.body.style.backgroundImage = "url('./weatherPics/rain.jpg')";
        case 65:
            weatherCurrently = "Heavy Rain";
            weatherIcon.src = './weatherPics/rain.svg'

            // document.body.style.backgroundImage = "url('./weatherPics/rain.jpg')";
            break;
        case 66:
            weatherCurrently = "Freezing Light Rain";
            weatherIcon.src = './weatherPics/rain.svg'

        // document.body.style.backgroundImage = "url('./weatherPics/rain.jpg')";
        case 67:
            weatherCurrently = "Freezing Heavy Rain";
            weatherIcon.src = './weatherPics/rain.svg'

            // document.body.style.backgroundImage = "url('./weatherPics/rain.jpg')";
            break;
        case 71:
            weatherCurrently = "Slight Snow fall";
            weatherIcon.src = './weatherPics/snow.svg'

        // document.body.style.backgroundImage = "url('./weatherPics/snow.jpg')";
        case 73:
            weatherCurrently = "Moderate Snow fall";
            weatherIcon.src = './weatherPics/snow.svg'

        // document.body.style.backgroundImage = "url('./weatherPics/snow.jpg')";
        case 75:
            weatherCurrently = "Heavy Snow fall";
            weatherIcon.src = './weatherPics/snow.svg'

            // document.body.style.backgroundImage = "url('./weatherPics/snow.jpg')";
            break;
        case 77:
            weatherCurrently = "Snow grains";
            weatherIcon.src = './weatherPics/snow.svg'

            // document.body.style.backgroundImage = "url('./weatherPics/snow.jpg')";
            break;
        case 80:
            weatherCurrently = "Slight Rain";
            weatherIcon.src = './weatherPics/rain.svg'

        // document.body.style.backgroundImage = "url('./weatherPics/rain.jpg')";
        case 81:
            weatherCurrently = "Moderate Rain";
            weatherIcon.src = './weatherPics/rain.svg'

        // document.body.style.backgroundImage = "url('./weatherPics/rain.jpg')";
        case 82:
            weatherCurrently = "Heavy Rain";
            weatherIcon.src = './weatherPics/rain.svg'

            // document.body.style.backgroundImage = "url('./weatherPics/rain.jpg')";
            break;
        case 85:
            weatherCurrently = "Slight Snow";
            weatherIcon.src = './weatherPics/snow.svg'

        // document.body.style.backgroundImage = "url('./weatherPics/drizzle.jpg')";
        case 86:
            weatherCurrently = "Heavy Snow";
            weatherIcon.src = './weatherPics/snow.svg'

            // document.body.style.backgroundImage = "url('./weatherPics/drizzle.jpg')";
            break;
        case 95:
            weatherCurrently = "Thunderstorm";
            weatherIcon.src = './weatherPics/storm.svg'

            // document.body.style.backgroundImage = "url('./weatherPics/thunderstorm.jpg')";
            break;
        case 96:
            weatherCurrently = "Thunderstorm with slight hail";
            weatherIcon.src = './weatherPics/storm.svg'

        // document.body.style.backgroundImage = "url('weatherPics/thunderstorm.jpg')";
        case 99:
            weatherCurrently = "Thunderstorm with heavy hail";
            weatherIcon.src = './weatherPics/storm.svg'

            // document.body.style.backgroundImage = "url('weatherPics/thunderstorm.jpg')";
            break;
        default:
            weatherCurrently = "unknown";
    }

    let sunriseBefore = weatherInfo.daily.sunrise[0]
    let sunsetBefore = weatherInfo.daily.sunset[0]

    temp.textContent = weatherInfo.current_weather.temperature
    elevation.textContent = weatherInfo.elevation
    sunrise.textContent = sunriseBefore.slice(11, 16)
    sunset.textContent = sunsetBefore.slice(11, 16)
    currentW.textContent = weatherCurrently
    console.log(weatherInfo);
    document.getElementById('midnightPast').innerHTML = `${weatherInfo.hourly.temperature_2m[0]}°C`
    document.getElementById('3am').innerHTML = `${weatherInfo.hourly.temperature_2m[2]}°C`
    document.getElementById('6am').innerHTML = `${weatherInfo.hourly.temperature_2m[5]}°C`
    document.getElementById('9am').innerHTML = `${weatherInfo.hourly.temperature_2m[8]}°C`
    document.getElementById('midday').innerHTML = `${weatherInfo.hourly.temperature_2m[11]}°C`
    document.getElementById('3pm').innerHTML = `${weatherInfo.hourly.temperature_2m[14]}°C`
    document.getElementById('6pm').innerHTML = `${weatherInfo.hourly.temperature_2m[17]}°C`
    document.getElementById('9pm').innerHTML = `${weatherInfo.hourly.temperature_2m[20]}°C`
    document.getElementById('midnightfuture').innerHTML = `${weatherInfo.hourly.temperature_2m[23]}°C`
}


let choiceI = document.querySelectorAll('.choice')
choiceI.forEach(element => {
    element.addEventListener('click', (e) => {
        reSearch(e.target.dataset.cityName, e.target.dataset.country, e.target.dataset.pop)
        choice.style.visibility = 'hidden'

    })

});

async function reSearch(name, country, population) {
    firstChoice.innerText = ''
    dymOne.innerText = ''
    dymTwo.innerText = ''
    dymThree.innerText = ''
    dymFour.innerText = ''
    countOP.innerText = ''
    let response2 = await fetch(`https://api.api-ninjas.com/v1/city?name=${name}&limit=1&country=${country}&max_population=${population}`, options)
    let info2 = await response2.json()
    firstChoice.innerText = info2[0].name
    countOP.innerText = info2[0].country
    fetchWeather(info2[0].latitude, info2[0].longitude)
}
fetchData()


// // let one = document.getElementById('1')
// // let two = document.getElementById('2')
// // let three = document.getElementById('3')
// // let four = document.getElementById('4')
// // let five = document.getElementById('5')

// // let input = document.getElementById('input')

// // let options = {
// //     method: 'GET',
// //     headers: { 'X-Api-Key': 'AIHeZQUtYwS4DUw3DQLJug==aU56gxfYhsQryj3h' },
// // }


// // async function fetchData(city) {
// //     let url = `https://api.api-ninjas.com/v1/city?name=${city}&limit=5`
// //     let response = await fetch(url, options)
// //     let info = await response.json()
// //     console.log(info)
// //     let city1 = info[0].name + ", " + info[0].country
// //     one.innerText = city1
// //     let city2 = info[1].name + ", " + info[1].country
// //     two.innerText = city2
// //     let city3 = info[2].name + ", " + info[2].country
// //     three.innerText = city3
// //     let city4 = info[3].name + ", " + info[3].country
// //     four.innerText = city4
// //     let city5 = info[4].name + ", " + info[4].country
// //     five.innerText = city5
// //     one.dataset.option = info[0].name
// //     two.dataset.option = info[1].name
// //     three.dataset.option = info[2].name
// //     four.dataset.option = info[3].name
// //     five.dataset.option = info[4].name
// // }

// // input.addEventListener('keyup', async (e) => {
// //     if (e.key === 'Enter') {
// //         let name = input.value
// //         input.value = ''
// //         fetchData(name)
// //     }
// // })

// // one.addEventListener('click', () => {
// //     let city = one.dataset.option
// //     fetchData(city)
// // })

// // two.addEventListener('click', () => {
// //     let city = two.dataset.option
// //     fetchData(city)
// // })

// // three.addEventListener('click', () => {
// //     let city = three.dataset.option
// //     fetchData(city)
// // })

// // four.addEventListener('click', () => {
// //     let city = four.dataset.option
// //     fetchData(city)
// // })

// // five.addEventListener('click', () => {
// //     let city = five.dataset.option
// //     fetchData(city)
// // })

// // document.addEventListener('click', (e) => {
// //     console.dir(e.target)
// // })

// //====================== V2 ==============================


// // let one = document.getElementById('1')
// // let two = document.getElementById('2')
// // let three = document.getElementById('3')
// // let four = document.getElementById('4')
// // let five = document.getElementById('5')

// // let input = document.getElementById('input')

// // let options = {
// //     method: 'GET',
// //     headers: { 'X-Api-Key': 'AIHeZQUtYwS4DUw3DQLJug==aU56gxfYhsQryj3h' },
// // }


// // async function fetchData(city) {
// //     let url = `https://api.api-ninjas.com/v1/city?name=${city}&limit=5`
// //     let response = await fetch(url, options)
// //     let info = await response.json()
// //     console.log(info)
// //     let city1 = info[0].name + ", " + info[0].country
// //     one.innerText = city1
// //     let city2 = info[1].name + ", " + info[1].country
// //     two.innerText = city2
// //     let city3 = info[2].name + ", " + info[2].country
// //     three.innerText = city3
// //     let city4 = info[3].name + ", " + info[3].country
// //     four.innerText = city4
// //     let city5 = info[4].name + ", " + info[4].country
// //     five.innerText = city5
// //     one.dataset.option = info[0].name
// //     two.dataset.option = info[1].name
// //     three.dataset.option = info[2].name
// //     four.dataset.option = info[3].name
// //     five.dataset.option = info[4].name
// // }

// // fetchData('London') // Default value on page load

// // one.addEventListener('click', () => {
// //     let city = one.dataset.option
// //     fetchData(city)
// // })

// // two.addEventListener('click', () => {
// //     let city = two.dataset.option
// //     fetchData(city)
// // })

// // three.addEventListener('click', () => {
// //     let city = three.dataset.option
// //     fetchData(city)
// // })

// // four.addEventListener('click', () => {
// //     let city = four.dataset.option
// //     fetchData(city)
// // })

// // five.addEventListener('click', () => {
// //     let city = five.dataset.option
// //     fetchData(city)
// // })

// // document.addEventListener('click', (e) => {
// //     console.dir(e.target)
// // })



// //====================== V1 ==============================


// let one   = document.getElementById('1')
// let two   = document.getElementById('2')
// let three = document.getElementById('3')
// let four  = document.getElementById('4')
// let five  = document.getElementById('5')

// let input = document.getElementById('input')

// let options = {
//     method: 'GET',
//     headers: { 'X-Api-Key': 'AIHeZQUtYwS4DUw3DQLJug==aU56gxfYhsQryj3h' },
// }

// let name 

// five.addEventListener('click', (e) => {
//     let newName = e.target.dataset.option
//     name = newName
//     console.log(name)
//     console.log(newName)

//     input.value = newName
//     fetchData()
// })

// async function fetchData() {
//     let name = input.value
//     input.value = ''
//     let url = `https://api.api-ninjas.com/v1/city?name=${name}&limit=5`
//     let response = await fetch(url, options)
//     let info = await response.json()
//     console.log(info)
//     let city1 = info[0].name + ", " + info[0].country
//     one.innerText = city1
//     let city2 = info[1].name + ", " + info[1].country
//     one.innerText = city2
//     let city3 = info[2].name + ", " + info[2].country
//     one.innerText = city3
//     let city4 = info[3].name + ", " + info[3].country
//     one.innerText = city4
//     let city5 = info[4].name + ", " + info[4].country
//     one.innerText = city1
//     two.innerText = city2
//     three.innerText = city3
//     four.innerText = city4
//     five.innerText = city5
//     one.dataset.option = info[0].name
//     two.dataset.option = info[1].name
//     three.dataset.option = info[2].name
//     four.dataset.option = info[3].name
//     five.dataset.option = info[4].name
// }

// fetchData()
