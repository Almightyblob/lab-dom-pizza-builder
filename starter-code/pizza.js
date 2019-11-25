// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}
var list = document.querySelectorAll(".panel.price li");
console.log(list);


// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
      list[0].style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
      list[0].style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mush){
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
      list[1].style.visibility = "visible";
    }
    else {
      $mush.style.visibility = "hidden";
      list[1].style.visibility = "hidden";
    }
  } );
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($green){
    if (state.greenPeppers) {
      $green.style.visibility = "visible";
      list[2].style.visibility = "visible";
    }
    else {
      $green.style.visibility = "hidden";
      list[2].style.visibility = "hidden";
    }
  }
  )
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  var sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.style.visibility = "visible";
    list[3].style.visibility = "visible";
  } else{
    sauce.style.visibility = "hidden";
    list[3].style.visibility = "hidden";
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  var crust = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    crust.style.visibility = "visible";
    list[4].style.visibility = "visible";
  } else{
    crust.style.visibility = "hidden";
    list[4].style.visibility = "hidden";
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach(function($button) {
    $button.addEventListener("click", toggleInactive);
  });
}

function toggleInactive(e) {
  console.log(e.currentTarget.className)
  if (e.currentTarget.className.includes("active")){
      var classNameArray = e.currentTarget.className.split(" ");
      console.log(classNameArray);
      classNameArray.pop();
      console.log(classNameArray);
      e.currentTarget.className = classNameArray.join(" ");
  } else {
    e.currentTarget.className = e.currentTarget.className + " active"; 
    console.log(e.currentTarget.className)
  }

}
function renderPrice() {
   // Iteration 4: change the HTML of `<aside class="panel price">`
   var price = document.getElementsByTagName("strong")[0];
   console.log(typeof price, price);
   price.innerHTML = "$" + (basePrice + ingredients.pepperonni.price + ingredients.mushrooms.price + ingredients.greenPeppers.price + ingredients.whiteSauce.price + ingredients.glutenFreeCrust.price)
 
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni;
  if (ingredients.pepperonni.price === 1){
    ingredients.pepperonni.price = 0;
  } else {
    ingredients.pepperonni.price = 1
  }
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms;
  if (ingredients.mushrooms.price === 1){
    ingredients.mushrooms.price = 0;
  } else {
    ingredients.mushrooms.price = 1;
  }
  renderEverything();
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers;
  if (ingredients.greenPeppers.price === 1){
    ingredients.greenPeppers.price = 0;
  } else {
    ingredients.greenPeppers.price = 1;
  }
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce;
  if (ingredients.whiteSauce.price === 3){
    ingredients.whiteSauce.price = 0;
  } else {
    ingredients.whiteSauce.price = 3;
  }
  renderEverything();
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  if (ingredients.glutenFreeCrust.price === 5){
    ingredients.glutenFreeCrust.price = 0;
  } else {
    ingredients.glutenFreeCrust.price = 5;
  }
  renderEverything();
}
