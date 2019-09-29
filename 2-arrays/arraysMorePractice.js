
function nth(array, index) {
  return array[index];
}

var animals = ['dog', 'cat', 'gerbil'];
console.log(nth(animals, 2)); // => 'gerbil'
console.log(nth(animals, 1) === animals[1]); // => true

console.log("_________________________________");

var numbers = [3, 2, 7, 5];

function rest(array) {

  return array.slice(1);
}

console.log(rest(numbers));

console.log("_________________________________");

var numbers = [3, 2, 7, 5];

function butLast(array) {
  return array.slice(0, array.length - 1);
}

console.log(butLast(numbers));

console.log("_________________________________");

var numbers = [3, 2, 7, 5];

function cons(x, array) {
  let newArray = [];
  newArray[0] = x;
  for (let i = 1; i <= array.length; i++) {
    newArray[i] = array[i - 1];
  }
  return newArray;
}

console.log(cons(8, numbers));

console.log("_________________________________");

var numbers = [3, 2, 7, 5];

function conj(array, x) {
  array[array.length] = x;
  return array;
}

console.log(conj(numbers, 8));

console.log("_________________________________");

console.log("benefit of cons and conj is that you move the manipulation of arrays out of the current function and can be used to still have the original array to use along side the modified version")

console.log("_________________________________");

var arr = [];
arr[7] = "Hello."
console.log(arr); // => ??? i would guess, "", "","","","","","","hello." apparently <7 empty items>, 'hello.'

console.log("_________________________________");