var recipeAPIkey = "f598cd619e64455eb06d890b5d2e92ec";
var foodRequestURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${recipeAPIkey}&ingredients=apples,+flour,+sugar&number=2`;

var drinkAPIkey = "1"; // free-version
var drinkRequestURL = `https://www.thecocktaildb.com/api/json/v1/${drinkAPIkey}/filter.php?i=coffee`;
// note: ingredients can be liquors or other items (tested lemon and coffee) but for some reason breaks on the word tonic ?? 

fetch(drinkRequestURL)
.then(function (response) {

     if(response.status === 200) {
        return response.json();
      } else { 
          console.log("Error receiving data: " + response.status);
      }

}) 
.then(function (data) {
    console.log(data);
})