function conj(array, x) {
    array[array.length] = x;
    return array;
}
function cons(x, array) {
    let newArray = [];
    newArray[0] = x;
    for (let i = 1; i <= array.length; i++) {
        newArray[i] = array[i - 1];
    }
    return newArray;
}
function rest(array) {

    let newArray = array.slice(1);

    return newArray;
}

function first(array) {
    return array[0];
}



function mystery(array) {
    if (array.length === 0) {
        return [];
    }
    return conj(mystery(rest(array)), first(array));
}

console.log("mystery will return the array in reverse order");

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(mystery(numbers));

console.log("_________________________________");

console.log("numbers = " + numbers);
function sum(array) {
    if (array.length === 0) {
        return 0;
    }
    return first(array) + sum(rest(array));

}
console.log("sum " + sum(numbers))

function sqrt(array) {

    if (array.length === 0) {
        return [];
    }

    return cons(first(array) * first(array), sqrt(rest(array)));
}

console.log("sqrt of numbers = " + sqrt(numbers));

function allEven(array) {

    if (array.length === 0) {
        return [];
    }

    if(first(array) % 2 == 0){
        return cons(first(array), allEven(rest(array)))
    } else {
        return allEven(rest(array));
    }
}

console.log("all even in numbers = " + allEven(numbers));
 