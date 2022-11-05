var recipeAPIkey = "f598cd619e64455eb06d890b5d2e92ec";
var drinkAPIkey = "1"; // free-version

var buttonsEl = document.getElementById("controls");

function generateSuggestion(category) {
    var requestURL = getAPIcall(category);
    callAPI(requestURL);
}

function getAPIcall(category) {
    switch(category) {
    case "drink":
        // var drinkRequestURL = `https://www.thecocktaildb.com/api/json/v1/${drinkAPIkey}/filter.php?i=coffee&a=Non_Alcoholic`; // gets a list of drinks with those qualifications
        // note: ingredients can be liquors or other items (tested lemon and coffee) but for some reason breaks on the word tonic ?? 
        var requestURL = `https://www.thecocktaildb.com/api/json/v1/${drinkAPIkey}/lookup.php?i=11007`; // gets full info for the specific drink by id #
        break;
    default:
        var requestURL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${recipeAPIkey}&ingredients=apples,+flour,+sugar&number=2`;
        break;
    }
    return requestURL
}

function callAPI(requestURL) {
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
}


buttonsEl.addEventListener("click", function(e) {
    // get e.target attribute and pass it to generateSuggestion()
    var targ = e.target;
    var elCategory = targ.getAttribute("data-category");
    generateSuggestion(elCategory);
 });