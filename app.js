// superheroapi.com/api/access-token/
//DOM Elements
const superHeroImage = document.getElementById('superheroImg')
const superHeroName = document.getElementById('superHeroName')
const powerStatsDiv = document.getElementById('powerStatsDiv')

//Main API function
const getSuperHero = ()=>{
    const randomNum = Math.floor(Math.random() * 732)
    fetch(`https://superheroapi.com/api.php/426425009399150/${randomNum}`)
    .then(response => response.json())
    .then( json =>{
        console.log(json)
        console.log(json.powerstats)
        getSuperHeroImage(json.image.url)
        getSuperHeroName(json.name)
        getPowerStats(json.powerstats)
    })
}
//Get image  of the  super hero
const getSuperHeroImage = (url) =>{
    superHeroImage.innerHTML = `<img src="${url}"  class="heroimg" alt="Super hero Image" id="superHeroImage">`
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
    <li class="item">Intelligence ${powerstats.intelligence}</li>
    <li class="item">Strength ${powerstats.strength}</li>
    <li class="item">Speed  ${powerstats.speed}</li>
    <li class="item">Durability ${powerstats.durability}</li>
    <li class="item">Power ${powerstats.power}</li>
    <li class="item">Combat ${powerstats.combat}</li>
</ul>`
}