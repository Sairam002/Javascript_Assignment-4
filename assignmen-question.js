function matchHouse(number){
    let matchRequired = (6*number)-(number-1);
    return matchRequired;
}

let matches = matchHouse(1);
console.log(matches);