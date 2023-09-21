const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'dd5d88cd956b93a1c230a5c7bd2a6416'

const setQuery = (e) => {
    if(e.keyCode == '13')
    getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)

    .then(weather => {
        document.getElementById("noData").style="display: none !important"
        document.getElementById("content").style="display: block !important"
        return weather.json()
    })
    
    .then(displayResult)
    .catch(err => {
        document.getElementById("noData").style="display: block !important"
        document.getElementById("content").style="display: none !important"
    })

   
}

const displayResult = (result) => {

    document.getElementById("countryImage").src=`https://flagsapi.com/${result.sys.country}/flat/64.png`

    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
    
}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)