// API USED -----------> superheroapi.com/api/access-token/id
//id is the superhero id (number between 1-731) total 731 hero are  avaiable

//DOM Elements
const search = document.getElementById('search')
const mainDiv = document.getElementById('main')
const superHeroImage = document.getElementById('superheroImg')
const superHeroName = document.getElementById('superHeroName')
const powerStatsDiv = document.getElementById('powerStatsDiv')
const biographyDiv = document.getElementById('biographyDiv')
const appearnceDiv = document.getElementById('appearnceDiv')

//Variables
const apiUrl = 'https://superheroapi.com/api.php/426425009399150/'
const searchSuperHero = ()=> {
    fetch(`${apiUrl}search/${search.value}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            // console.log(json.results[0])
            getSuperHeroName(json.results[0].name)
            getSuperHeroImage(json.results[0].image.url)
            getPowerStats(json.results[0].powerstats)
            // getSuperHeroBiography(json.biography)
            // getSuperHeroAppearnce(json.appearance)
        })
}
//Random super hero API function
const getRandomSuperHero = () => {
    const randomNum = Math.floor(Math.random() * 731) + 1
    fetch(`${apiUrl}${randomNum}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.appearance)
            getSuperHeroImage(json.image.url)
            getSuperHeroName(json.name)
            getPowerStats(json.powerstats)
            // getSuperHeroBiography(json.biography)
            getSuperHeroAppearnce(json.appearance)
        })
}


//Get image  of the  super hero
const getSuperHeroImage = (url) => {
    mainDiv.style.outline = "1px solid"
    mainDiv.style.backgroundColor = '#fff'
    superHeroImage.innerHTML = `<img src="${url}"  class="heroimg" alt="Super hero Image" id="superHeroImage">`
}

//Get Super Hero Name
const getSuperHeroName = (name) => {
    superHeroName.innerHTML = `<h1 class="heroheading">${name}</h1>`
}

//Get power stats of the super hero
const getPowerStats = (powerstats) => {
    powerStatsDiv.style.outline = "1px solid"
    powerStatsDiv.innerHTML =
        `<div class="headingDiv">
    <h1 class="heading1">Power Stats</h1>
</div>
<hr>
<ul class="listcontainer">
    <li class="item">Intelligence: ${powerstats.intelligence}</li>
    <li class="item">Strength: ${powerstats.strength}</li>
    <li class="item">Speed: ${powerstats.speed}</li>
    <li class="item">Durability: ${powerstats.durability}</li>
    <li class="item">Power: ${powerstats.power}</li>
    <li class="item">Combat: ${powerstats.combat}</li>
</ul>`
}

//Get Super Hero Biography
const getSuperHeroBiography = (biography) => {
    biographyDiv.innerHTML = `
    <div class="headingDiv">
    <h1 class="heading1">Biography</h1>
</div>
<ul class="listcontainer">
    <li class="item">Full Name: ${biography.fullName}</li>
    <li class="item">Place-of-birth: ${biography.placeOfBirth}</li>
    <li class="item">First Appearance: Batman Beyond #1</li>
    <li class="item">Publisher: DC Comics</li>
</ul>`
}

//Get Super Hero Appearance
const getSuperHeroAppearnce = (appearance) => {
    appearnceDiv.style.outline = '1px solid'
    appearnceDiv.innerHTML =
        `<div class="headingDiv">
                <h1 class="heading1">Appearance</h1>
            </div>
            <ul class="listcontainer">
                <li class="item">Gender: ${appearance.gender}</li>
                <li class="item">Race: ${appearance.race}</li>
                <li class="item">Height: ${appearance.height[0]}</li>
                <li class="item">Weight: ${appearance.weight[0]}</li>
                <li class="item">Eye color: ${appearance.eyecolor}</li>
                <li class="item">Hair color : ${appearance.haircolor}</li>
            </ul>`
}