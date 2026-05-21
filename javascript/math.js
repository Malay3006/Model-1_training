let num = 25.7;

console.log("Original Number =", num);

console.log("Math.abs(-10) =", Math.abs(-10));

console.log("Math.round(25.7) =", Math.round(num));

console.log("Math.floor(25.7) =", Math.floor(num));

console.log("Math.ceil(25.7) =", Math.ceil(num));

console.log("Math.sqrt(25) =", Math.sqrt(25));

console.log("Math.pow(5, 2) =", Math.pow(5, 2));

console.log("5 * 5 * 5 =", 5 * 5 * 5);

console.log("Math.random() =", Math.random());

console.log(
  "Random 1-10 =",
  Math.floor(Math.random() * 10) + 1
);

console.log("Math.max(10,20,30) =", Math.max(10, 20, 30));

console.log("Math.min(10,20,30) =", Math.min(10, 20, 30));

console.log("Math.sin(90) =", Math.sin(90));

console.log("Math.cos(0) =", Math.cos(0));

console.log("Math.tan(45) =", Math.tan(45));

console.log("Math.log(10) =", Math.log(10));

console.log("Math.log10(100) =", Math.log10(100));

console.log("Math.PI =", Math.PI);

console.log("Math.E =", Math.E);

console.log("Math.trunc(25.99) =", Math.trunc(25.99));

console.log("Math.sign(-25) =", Math.sign(-25));


function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log("Factorial of 5 =", factorial(5));

function square(n) {
  return n * n;
}

console.log("Square of 8 =", square(8));

function cube(n) {
  return n * n * n;
}

console.log("Cube of 3 =", cube(3));