function tipCalc(price, tip) {
  return price + (tip / 100) * price;
}
const priceofFood = 450;
const tipPercentage = 20;
const finalAmount = tipCalc(priceofFood, tipPercentage);
console.log("Total Amount is $" + Math.floor(finalAmount));
