let array = ["cat", "fox", "dog", "monkey"];

console.log("index of dog = " +array.indexOf("dog") );  //2
console.log("index of monkey = " +array.indexOf("monkey") ); //3
console.log("index of cat = " +array.indexOf("cat") );  //0
console.log("_________________________________");

console.log([1,3,4,7,9]);
console.log(["the","quick","brown","fox", "jumped","over", "the", "lazy", "dog"]);
console.log([true,false,true]);
console.log("_________________________________");

let favoriteShowsOrMovies = ["Avatar: the last airbender", "Merlin", "Bleach", "Dragonball",];
let favoritePeople = ["Katharina", "mom", "dad", "Lasse", "HP"];
let hobbies = ["gaming", "pen and paper roleplay", "LARP", "programming"];

console.log("first= " + favoriteShowsOrMovies[0]+ ", " + favoritePeople[0]+ ", " + hobbies[0]);
console.log("last= " + favoriteShowsOrMovies[favoriteShowsOrMovies.length-1]+ ", " + favoritePeople[favoritePeople.length-1]+ ", " + hobbies[hobbies.length-1]);
console.log("middle= " + favoriteShowsOrMovies[favoriteShowsOrMovies.length/2]+ ", " + favoritePeople[(favoritePeople.length-1)/2]+ ", " + hobbies[hobbies.length/2]);

console.log("_________________________________");

var arr = [2, 3, 4];

arr.unshift(0,1);
arr.push(5,6,7);

console.log(arr); // => [0, 1, 2, 3, 4, 5, 6, 7]
console.log("_________________________________");

var arr = [5, 7, 9];
arr.push(6); // => ??? this will give  [5,7,9,6] since push puts the value at the end, or pushed it onto the stack
console.log(arr);

console.log("_________________________________");

// 1. Change all odd numbers to be those numbers multiplied by two:
var numbers = [4, 9, 7, 2, 1, 8];
// TODO: your code here
for(let n = 0; n< numbers.length; n++){
    if(numbers[n] % 2 != 0){
        numbers[n] *= 2;
    }
}
console.log(numbers); // => [4, 18, 14, 2, 2, 8]

// 2. Fix the typos by replacing each element with a correctly spelled version
var places = ['snfranisco', 'oacklannd', 'santacrus']
// TODO: your code here
places[0] ='san francisco';
places[1] = 'oakland';
places[2] = 'santa cruz';
console.log(places); // => ['san francisco', 'oakland', 'santa cruz']

console.log("_________________________________");