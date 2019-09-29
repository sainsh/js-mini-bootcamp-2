let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function sum(array) {
    let sumFor = 0;
    for (let i = 0; i < array.length; i++) {

        sumFor += array[i];
    }

    console.log("for sum = " + sumFor);

    let sumWhile = 0;
    let i = 0;
    while (i < array.length) {
        sumWhile += array[i];
        i++;
    }

    console.log("while sum = " + sumWhile);
}

sum(numbers);

console.log("_________________________________");

function max(array) {
    let arrayMaxFor = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > arrayMaxFor) {
            arrayMaxFor = array[i];
        }
    }

    console.log("for max = " + arrayMaxFor);

    let arrayMaxWhile = 0;
    let i = 0;
    while (i < array.length) {

        if (array[i] > arrayMaxWhile) {
            arrayMaxFor = array[i];
        }

        i++;
    }

    console.log("while max = " + arrayMaxWhile);
}

max(numbers);

console.log("_________________________________");

console.log("the quick brown fox jumped over the lazy dog".split(" "));
console.log("Hello, world!".split(""));
console.log("1,2,3,4,5,6".split(","));

console.log("the above 3 statements show that split splits a string into an array, with a seperator");

function longestWord(str){
    let strArray = str.split(" ");
    let longWord = "";
    for( let element of strArray){
        if(element.length > longWord.length){
            longWord = element;
        }
    }


    return longWord;
}

console.log(longestWord("the quick brown fox jumped over the lazy dog"));

console.log("_________________________________");


function remove(array, element){

    let i = 0;
    let newArray = [];

    for(let n of array){

        if(n != element){
            newArray[i] = n;
            i++;
        }

    }

    return newArray;
}

console.log(remove([1, 3, 6, 2, 3], 3)); // => [1, 6, 2]

console.log("_________________________________");