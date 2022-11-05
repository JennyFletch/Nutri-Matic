var drinkAPIkey = "1"; // free-version

function findDrink() {

    var requestURL = "";

    // Build form
    var drinkMessage = document.createElement("p");
    drinkMessage.textContent = "Hi there! Alcohol yes or no?";
    resultsEl.appendChild(drinkMessage);
    var radiobox1 = document.createElement("input");
    var radiobox2 = document.createElement("input");
    radiobox1.type = "radio";
    radiobox2.type = "radio";
    radiobox1.name = "alcoholBoolean";
    radiobox2.name = "alcoholBoolean";
    radiobox1.value = "yes";
    radiobox1.value = "no";
    var label1 = document.createElement("label");
    var label2 = document.createElement("label");
    label1.htmlFor = "yes";
    label2.htmlFor = "no";
    var labelText1 = document.createTextNode("yes");
    var labelText2 = document.createTextNode("no");
    label1.appendChild(labelText1);
    label2.appendChild(labelText2);
    resultsEl.appendChild(radiobox1);
    resultsEl.appendChild(label1);
    resultsEl.appendChild(radiobox2);
    resultsEl.appendChild(label2);

    var newline = document.createElement('br');
    resultsEl.appendChild(newline);

    var submitBtn = document.createElement("button");
    submitBtn.textContent = "SUBMIT";
    resultsEl.appendChild(submitBtn);
    submitBtn.addEventListener("click", function() {
        console.log("click!");
        if(radiobox1.checked) {
            requestURL = `https://www.thecocktaildb.com/api/json/v1/${drinkAPIkey}/filter.php?a=Alcoholic`;
        } else {
            requestURL = `https://www.thecocktaildb.com/api/json/v1/${drinkAPIkey}/filter.php?a=Non_Alcoholic`;  
        }
        callAPI(requestURL);
    });
    
    // var requestURL = `https://www.thecocktaildb.com/api/json/v1/${drinkAPIkey}/lookup.php?i=11007`; // gets full info for the specific drink by id #   
    // var drinkRequestURL = `https://www.thecocktaildb.com/api/json/v1/${drinkAPIkey}/filter.php?i=coffee&a=Non_Alcoholic`; // gets a list of drinks with those qualifications
    // note: ingredients can be liquors or other items (tested lemon and coffee) but for some reason breaks on the word tonic ?? 
    
}