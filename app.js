// API USED -----------> superheroapi.com/api/access-token/id
//id is the superhero id (number between 1-731) total 731 hero are  avaiable

//DOM Elements
const mainDiv = document.getElementById('main')
const superHeroImage = document.getElementById('superheroImg')
const superHeroName = document.getElementById('superHeroName')
const powerStatsDiv = document.getElementById('powerStatsDiv')
const biographyDiv = document.getElementById('biographyDiv')

//Variables
const apiUrl = 'https://superheroapi.com/api.php/426425009399150/'
const searchSuperHero = ()=>{
    console.log("Clicked")
}
//Random super hero API function
const getRandomSuperHero = ()=>{
    const randomNum = Math.floor(Math.random() * 731) + 1
    fetch(`${apiUrl}${randomNum}`)
    .then(response => response.json())
    .then( json =>{
        console.log(json.biography.fullName)
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
    mainDiv.style.backgroundColor = '#fff'
}
//Get Super Hero Name
const getSuperHeroName = (name)=>{
superHeroName.innerHTML = `<h1 class="heroheading">${name}</h1>`
}
//Get power stats of the super hero
const getPowerStats = (powerstats)=>{
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
const getSuperHeroBiography = (biography)=>{
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