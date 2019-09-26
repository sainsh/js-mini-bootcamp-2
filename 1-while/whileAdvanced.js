
function fib(n) {

    if (n == 0) {
        return 1;
    } else if (n == 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log("_________________________________");

function stringLength(str) {

    let count = 0;
    while (str != "") {
        str = str.slice(1);
        count++;
    }

    return count;
}

console.log("hello = " + stringLength("hello")); // 5
console.log("datamatiker = " + stringLength("datamatiker")); // 11
console.log("_________________________________");

function modulo(x, y) {

    while (x > y) {
        x -= y;
    }
    return x;
}

console.log("5%2 = " + modulo(5, 2)) // 1
console.log("8%10 = " + modulo(8, 10)) // 8
console.log("7%5 = " + modulo(7, 5)) // 2
console.log("_________________________________");

function countChars(str, char) {

    let count = 0;

    while (str != "") {
        if (str[0] == char) {
            count++;
        }

        str = str.slice(1);
    }

    return count;
}

console.log("# of c in cacao = " + countChars("cacao", "c")); // 2
console.log("# of a in datamatiker = " + countChars("datamatiker", "a")); //3)
console.log("_________________________________");

function indexOf(str, char) {

    let count = 0;
    while (str != "") {
        if (str[0] == char) {
            return count;
        } else {
            str = str.slice(1);
            count++;
        }
    }
    return -1;
}

console.log("index of o in hello = " + indexOf("hello", "o")); // 4
console.log("index of i in datamatiker = " + indexOf("datamatiker", "i")); //7
console.log("_________________________________");