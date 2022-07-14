
      function addTipToPrice(price, tip) {
        //add tip to price
        return price + tipCalc(tip, price);
      }
 
      function tipCalc(tip, price) {
        //calculating tip
        return (tip / 100) * price;
      }

      function onePeople(finalAmount){
        //calculating one person cost
        return finalAmount/peopleWith
      }
      //Getting DOM Elements
      priceElem = document.getElementById('priceofmeal')
      peopleElem = document.getElementById('people')
      tipElem = document.getElementById('tipAmount')
      totalElem = document.getElementById('totalTipAmount')

      // User Input
      const priceofFood = Number(priceElem.value)
      const tipPercentage = Number(tipElem.value)
      const peopleWith = Number(peopleElem.value)
      const tipAmount = tipCalc(tipPercentage, priceofFood)
      const finalAmount = addTipToPrice(priceofFood, tipPercentage)
      const onePeoplePrice = onePeople(finalAmount)


      //Printing Elements to DOM
        document.getElementById('btn').addEventListener('click' ,function(){
          document.getElementById('mealamount').textContent = priceofFood
          document.getElementById('onepersoncost').textContent = onePeoplePrice
          document.getElementById('totaltip').textContent = tipAmount
          document.getElementById('totalamount').textContent = finalAmount
        })