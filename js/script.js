var recipeAPIkey = "f598cd619e64455eb06d890b5d2e92ec";
var requestURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${recipeAPIkey}&ingredients=apples,+flour,+sugar&number=2`;

fetch(requestURL)
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