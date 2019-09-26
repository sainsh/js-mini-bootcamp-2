function sum(start, end) {
    // TODO: your code here
    if (end < start) {
        let temp = end;
        end = start;
        start = temp;
    }
    let output = start;
    while (++start <= end) {
        output += start;
    }
    console.log(output);
}
sum(2, 7); // => 2 + 3 + 4 + 5 + 6 + 7 => 27
sum(3, 5); // => 3 + 4 + 5 => 12

console.log("_________________________________");

// ignore the fact that inc makes use of +
function inc(x) {
    return x + 1;
}

function dec(x) {
    return x - 1;
}

function add(x, y) {

    let output = 0;
    let i = 0;
    while (i < x) {
        output = inc(output);
        i = inc(i);
    }
    i = 0;
    while (i < y) {
        output = inc(output);
        i = inc(i);
    }

    console.log(output);
}

add(2, 2); // 2+2 = 4
add(4, 5); // 4+5 = 9
add(15, 25); // 15+25 = 40
console.log("_________________________________");

function isEven(x) {

    while (x >= 2) {
        if (x == 2) {
            return true;
        }
        x -= 2;

    }
    return false;
}

console.log(isEven(12)); // true
console.log(isEven(15)); // false
console.log(isEven(23)); // false
console.log(isEven(44)); // true
console.log("_________________________________");

function multiply(x,y){
    let output =0;
    while(x>0){
        output += y;
        x--;
    }

    console.log(output);

}

multiply(2,2); // 4
multiply(1,5); // 5
multiply(10,2); //20

console.log("_________________________________");