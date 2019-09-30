let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function average(array) {

    let sum = 0;
    for (let element of array) {
        sum += element
    }

    let i = 0;
    let sumWhile = 0;
    while (i < array.length) {
        sumWhile += array[i];
        i++;
    }
    console.log(sumWhile / array.length);

    return sum / array.length;
}

console.log(average(numbers));


console.log("_________________________________");

function min(array) {
    let minNumber = 999999;
    for (let element of array) {
        if (element < minNumber) {
            minNumber = element;
        }
    }

    let i = 0;
    let minNumberWhile = 999999;
    while (i < array.length) {
        if (array[i] < minNumberWhile) {
            minNumberWhile = array[i];
        }

        i++;
    }

    console.log(minNumberWhile);

    return minNumber;
}

console.log(min(numbers));
console.log(min([24, 24, 12, 3645, 7986, 22, 35, 16]));


console.log("_________________________________");

function shortestWord(str) {

    let strArray = str.split(" ");
    let shortestWordFor = ".........................................";

    for (let i = 0; i< strArray.length; i++) {
        if(strArray[i].length < shortestWordFor.length){
            shortestWordFor = strArray[i];
        }

    }

    let i =0;
    let shortestWordWhile = ".......................................";

    while(i< strArray.length){
        if(strArray[i].length < shortestWordWhile.length){
            shortestWordWhile = strArray[i];
        }

        i++;
    }

    console.log(shortestWordWhile);

    return shortestWordFor;
}

console.log(shortestWord("the quick brown fox jumped over the lazy dog"));

console.log("_________________________________");


function countChar(str, x){
    let count = 0;
    charArray = str.split("");

    for(let element of charArray){
        if(element == x){
            count++;
        }
    }

    let countWhile = 0;
    let i = 0;

    while(i<charArray.length){
        if(charArray[i] == x){
            countWhile++;
        }
        i++;
    }

    console.log(countWhile);

    return count;
}

console.log(countChar("the quick brown fox jumped over the lazy dog", 'e'));

console.log("_________________________________");

function evenlengthWords(array){

    let newArray = [];
    let i = 0;
    for (let j = 0; j<array.length; j++) {
        if(array[j] % 2 == 0){
            newArray[i] = array[j];
            i++;
        }
        
    }

    let newArrayWhile= [];
    i = 0;
    let j = 0;
    while(i < array.length){
        if(array[i] % 2 == 0){
            newArrayWhile[j] = array[i];
            j++;
        }
        i++;
    }

    console.log(newArrayWhile);

    return newArray;
}

console.log(evenlengthWords(numbers));