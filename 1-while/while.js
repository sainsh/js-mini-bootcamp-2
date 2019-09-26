function sum(n) {
    // TODO: your code here
    let output=0;
    while(n>0){
        output += n
        n--;
    }
    console.log(output);

  }
  sum(3); // => 6
  sum(4); // => 10
  sum(5); // => 15

  console.log("_________________________________");

  function factorial(n) {
    // TODO: your code here
    let output = n;
    n--;
    while(n>0){
        output *= n;
        n--;
    }

    console.log(output);
  }
  factorial(3); // => 6
  factorial(4); // => 24
  factorial(5); // => 120

  console.log("_________________________________");

  function repeatString(str, count) {
    // TODO: your code here
    let output ="";

    while(count > 0){
        output += str;
        count--;
    }
    console.log(output);
  }
  repeatString('dog', 0); // => ''
  repeatString('dog', 1); // => 'dog'
  repeatString('dog', 2); // => 'dogdog'
  repeatString('dog', 3); // => 'dogdogdog'

  console.log("_________________________________");