// superheroapi.com/api/access-token/
//DOM Elements
const mainDiv = document.getElementById('main')
const superHeroImage = document.getElementById('superheroImg')
const superHeroName = document.getElementById('superHeroName')
const powerStatsDiv = document.getElementById('powerStatsDiv')
const biographyDiv = document.getElementById('biographyDiv')

//Variables
const randomNum = Math.floor(Math.random() * 731) + 1
const apiUrl = 'https://superheroapi.com/api.php/426425009399150/'
const searchSuperHero = ()=>{
    console.log("Clicked")
}
//Random super hero API function
const getRandomSuperHero = ()=>{
    fetch(`${apiUrl}${randomNum}`)
    .then(response => response.json())
    .then( json =>{
        getSuperHeroImage(json.image.url)
        getSuperHeroName(json.name)
        getPowerStats(json.powerstats)
        // getSuperHeroBiography(json.biography)
    })
}
//Get image  of the  super hero
const getSuperHeroImage = (url) =>{
    superHeroImage.innerHTML = `<img src="${url}"  class="heroimg" alt="Super hero Image" id="superHeroImage">`
    mainDiv.style.outline = "1px solid"
}
//Get Super Hero Name
const getSuperHeroName = (name)=>{
superHeroName.innerHTML = `<h1 class="heroheading">${name}</h1>`
}
//Get power stats of the super hero
const getPowerStats = (powerstats)=>{
   powerStatsDiv.innerHTML = 
   `<div class="headingDiv">
    <h1 class="heading1">Power Stats</h1>
</div>
<ul class="listcontainer">
    <li class="item">Intelligence: ${powerstats.intelligence}</li>
    <li class="item">Strength: ${powerstats.strength}</li>
    <li class="item">Speed: ${powerstats.speed}</li>
    <li class="item">Durability: ${powerstats.durability}</li>
    <li class="item">Power: ${powerstats.power}</li>
    <li class="item">Combat: ${powerstats.combat}</li>
</ul>`
}
const getSuperHeroBiography = (biography)=>{
    biographyDiv.innerHTML = `
    <div class="headingDiv">
    <h1 class="heading1">Biography</h1>
</div>
<ul class="listcontainer">
    <li class="item">Full Name: ${biography.full-name}</li>
    <li class="item">Place-of-birth: ${biography.place-of-birth}</li>
    <li class="item">First Appearance: Batman Beyond #1</li>
    <li class="item">Publisher: DC Comics</li>
</ul>`
}