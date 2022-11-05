var recipeAPIkey = "f598cd619e64455eb06d890b5d2e92ec";

function findFood() {
    var requestURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${recipeAPIkey}&ingredients=apples,+flour,+sugar&number=2`;
    callAPI(requestURL);
}