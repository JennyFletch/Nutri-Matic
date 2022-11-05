function findImprob() {
    var rando = Math.floor(Math.random() * 2);
    console.log(rando);
    switch(rando) {
        case 0:
            findDrink();
            break;
        default:
            findFood();
            break;
    }
}