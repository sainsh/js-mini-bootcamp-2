let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function reverseString(str){

    let strArray = str.split(" ");
    let reverseArray = [];
    let j = strArray.length -1;
    for(let i = 0; i< strArray.length; i++){
        reverseArray[j] = strArray[i];
        j--;

    }
    // while is basically the same, just with the i iterator outside the while scope

    return reverseArray.join(" ");
}

console.log("reverse of 'hej med dig' = " + reverseString("hej med dig"));

console.log("_________________________________");


function keep(array, test){

    let newArray = [];
    let i = 0;
    let j = 0;
    while( i < array.length){
        if(test(array[i])){
            newArray[j] = array[i];
            j++;
        }

        i++;
    }

    return newArray;
}

console.log(keep(numbers, (n) => n % 2 == 0));
console.log(keep("the quick brown fox jumped over the lazy dog".split(" "), (n) => n.length % 2 == 0));