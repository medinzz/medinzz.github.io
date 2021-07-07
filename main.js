const meal = {
  "spinach" : {
      "calories": 23,
      "protein": 3,
      "fat": 0.3,
      "vitamin_a": 8100,
      "calcium": 93
  }, 
  "sweet_potato" : {
      "calories": 160,
      "protein": 2,
      "fat": 1,
      "vitamin_a": 9230,
      "calcium": 46
  }, 
  "yogurt" : {
      "calories": 230,
      "protein": 10,
      "fat": 3,
      "vitamin_a": 120,
      "calcium": 343
  }, 
  "skim_milk" : {
      "calories": 85,
      "protein": 8,
      "fat": 0,
      "vitamin_a": 500,
      "calcium": 302
  }, 
  "whole_wheat_bread" : {
      "calories": 65,
      "protein": 3,
      "fat": 1,
      "vitamin_a": 0,
      "calcium": 24
  }, 
  "brown_rice" : {
      "calories": 178,
      "protein": 3.8,
      "fat": 0.9,
      "vitamin_a": 0,
      "calcium": 18
  }, 
  "watermelon" : {
      "calories": 110,
      "protein": 2,
      "fat": 1,
      "vitamin_a": 2510,
      "calcium": 30
  }, 
  "papaya" : {
      "calories": 156,
      "protein": 2.4,
      "fat": 0.4,
      "vitamin_a": 7000,
      "calcium": 80
  }, 
  "tuna_in_water" : {
      "calories": 575,
      "protein": 126.8,
      "fat": 3.6,
      "vitamin_a": 0,
      "calcium": 73
  }, 
  "lobster" : {
    "calories": 405,
    "protein": 28.8,
    "fat": 26.6,
    "vitamin_a": 984,
    "calcium": 190
  }, 
} 

var computed_nutrients = {
  "calories": 0,
  "protein": 0,
  "fat": 0,
  "vitamin_a": 0,
  "calcium": 0
}
function compute(product_name, quantity, operation){
  if(product_name in meal){
    if(operation === "add"){
      computed_nutrients.calories += meal[product_name].calories
      computed_nutrients.protein += meal[product_name].protein
      computed_nutrients.fat += meal[product_name].fat
      computed_nutrients.vitamin_a += meal[product_name].vitamin_a
      computed_nutrients.calcium += meal[product_name].calcium
    } else if ( operation === "subtract") {
      computed_nutrients.calories -= meal[product_name].calories 
      computed_nutrients.protein -= meal[product_name].protein 
      computed_nutrients.fat -= meal[product_name].fat
      computed_nutrients.vitamin_a -= meal[product_name].vitamin_a
      computed_nutrients.calcium -= meal[product_name].calcium
    } else {
      console.log("do nothing")
    }
  }
  document.getElementById("calories").innerText = computed_nutrients.calories.toFixed(2) 
  document.getElementById("protein").innerText = computed_nutrients.protein.toFixed(2)
  document.getElementById("fat").innerText = computed_nutrients.fat.toFixed(2) 
  document.getElementById("vitamin_a").innerText = computed_nutrients.vitamin_a.toFixed(2) 
  document.getElementById("calcium").innerText = computed_nutrients.calcium.toFixed(2)  
}

function resetOrder(){
  computed_nutrients = {
    "calories": 0,
    "protein": 0,
    "fat": 0,
    "vitamin_a": 0,
    "calcium": 0
  }
}

function addOne(item_id){
  const item_quantity = document.getElementById(item_id);
  const quantity = parseInt(item_quantity.innerText) + 1 
  item_quantity.innerText = quantity

  compute(item_id, quantity, "add")
}

function minusOne(item_id){
  const item_quantity = document.getElementById(item_id);
  if(parseInt(item_quantity.innerText) === 0){
    alert("Quantity cannot be less than zero (0) ")
  } else {
    const quantity = parseInt(item_quantity.innerText) - 1 
    item_quantity.innerText = quantity
    compute(item_id, quantity, "subtract")
  }
}



