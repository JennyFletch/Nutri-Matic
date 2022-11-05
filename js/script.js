var buttonsEl = document.getElementById("controls");
var interfaceEl = document.getElementById("interface");
var resultsEl = document.getElementById("result-display");

function generateSuggestion(category) {
    var requestURL = getAPIcall(category);
}

function getAPIcall(category) {
    switch(category) {
    case "drink":
        findDrink();
        break;
    case "food":
        findFood();
        break;
    default:
        findImprob();
        break;
    }
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