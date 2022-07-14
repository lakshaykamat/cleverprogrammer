
// Getting Element form the DOM
mealElem = document.getElementById('mealamount')
onePersonElem = document.getElementById('onepersoncost')
totalTipElem = document.getElementById('totaltip')
totalAmountElem = document.getElementById('totalamount')
calculateButton = document.getElementById('btn')
resultContainer = document.getElementById('resultcontainer')

//Onclick event to calculate button
calculateButton.onclick = ()=>{
    priceOfMeal = Number(document.getElementById('priceofmeal').value)
    tipPercentage = Number(document.getElementById('tipamount').value)
    peopleWithYou = Number(document.getElementById('peoplewithyou').value)

    //Price of Meal
    mealElem.textContent = `Price of Meal ₹${priceOfMeal}`
    //Total tip
    totalTipElem.textContent = `Total Tip ₹${tipCalculation(tipPercentage,priceOfMeal)} (${tipPercentage}%)`
    //One person Cost
    onePersonElem.textContent = `One Person Cost ₹${onePersonCost(totalAmount(priceOfMeal,tipPercentage),peopleWithYou)}`
    // total amount
    totalAmountElem.textContent = `Total Amount ₹${totalAmount(priceOfMeal,tipPercentage)}`

    //Styling Result Container
    resultContainer.style.padding = '1rem'
    mealElem.style.margin = '.5rem'
    onePersonElem.style.margin = '.5rem'
    totalTipElem.style.margin = '.5rem'
    totalAmountElem.style.margin = '.5rem'
}
//Tip calculating Function
const tipCalculation = (tip,price)=>{return ((tip/100)*price)}
//Total Amount function
const totalAmount = (price,tip) => {return price + tipCalculation(tip, price)}
//Calculationg One person cost
const onePersonCost = (totalAmount,peopleWithYou) =>{return totalAmount/peopleWithYou}