// Basic Arrow Func
// const greet = () => console.log("Hello World!");

//Single parameter
// const square = (x) => x * x;
// console.log(square(6));

//multiple parameters
// const add = (a, b) => a + b;
// console.log(add(4, 90));

//block body
// const multiply = (a, b) => {
//   const result = a * b;
//   return result;
// };
// console.log(multiply(5, 9));

//returns obj
// const createUser = (name, email, age) => ({ name, email, age });
// console.log(createUser("Khushi", "khushi@gmail.com", 25));

//1. To print "Good Morning!"
let name = prompt("Enter your name :");
const wish = () => "Good Morning, " + name;
console.log(wish());

//2. takes one number argument and returns the cube of that number.
const cube = (n) => n * n * n;
console.log(cube(8));

//3. takes two numbers and returns their difference.
const subtract = (m, n) => {
  if (m > n) {
    return m - n;
  } else {
    return n - m;
  }
};
console.log(subtract(50, 39));

// 4. takes two numbers, multiplies them, and returns the result
const mult = (a, b) => {
  const result = a * b;
  return result;
};
console.log(mult(40, 60));

// 5. takes name, email, and age as parameters and returns an object with those properties.
const user = (name, email, age) => ({ name, email, age });
console.log(user("Gandhi", "gandhi@gmail.com", 50));

// 6. takes a string parameter and returns the string in uppercase.
const upperCase = (string) => string.toUpperCase();
console.log(upperCase("Khushi"));

//7. takes a temperature in Celsius and returns the temperature converted to Fahrenheit.
const temp = (c) => c * (9 / 5) + 32;
console.log(temp(40));

// 8. takes three numbers as parameters and returns an object containing the sum, average, and product of these numbers.
const threes = (a, b, c) => ({
  sum: a + b + c,
  average: (a + b + c) / 3,
  product: a * b * c,
});
console.log(threes(4, 6, 9));
