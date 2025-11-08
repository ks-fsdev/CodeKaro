// Dummy data arrays for practice
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const numbers = [10, 20, 30, 40, 50];
const colors = ["red", "blue", "green", "yellow"];
const letters = ["a", "b", "c", "d", "e"];

//// 1. Remove the last element from the fruits array and store it in a variable.
// let lastFruit = fruits.pop();
//// 2. Using the numbers array, simulate removing the last two elements one by one using pop.
// for (i = 1; i < 3; i++) {
//   numbers.pop();
//   console.log(numbers);
// }

// // 1. Add 'fig' and 'grape' to the end of the fruits array.
// fruits.push("fig", "grape");
// // 2. Using the colors array, add 'purple' to the end.
// colors.push("purple");

// // 1. Remove the first element from the letters array.
// letters.shift();
// console.log(letters);

// // 2. Remove two elements from the start of the numbers array.
// numbers.shift();
// numbers.shift();
// console.log(numbers);

// // 1. Add 'z' and 'y' to the front of the letters array.
// letters.unshift("z", "y");
// console.log(letters);
// // 2. Add 5 to the beginning of the numbers array.
// numbers.unshift(5);
// console.log(numbers);

// // 1. Create a new array from fruits containing only elements from index 1 to 3 (inclusive).
// let newFruits = fruits.slice(1, 4);
// console.log(newFruits);

// // 2. Using the colors array, get a slice containing only the last two colors.
// let newColors = colors.slice(2)
// console.log(newColors)

// // 1. Remove two elements starting from index 2 in the fruits array.
// let newFruits = fruits.splice(2, 2);
// console.log(newFruits);
// // 2. In the letters array, remove one element at index 1 and insert 'x' and 'w'.
// let newLetters = letters.splice(1, 1, "x", "y");
// console.log(letters);

// // 1. Create a new array by concatenating the fruits and colors arrays.
// let fruitColors = fruits.concat(colors);
// console.log(fruitColors);
// // 2. Concatenate the letters and numbers arrays into one array.
// let lettersNumbers = letters.concat(numbers);
// console.log(lettersNumbers);

// // Dummy data for practice: nested objects and arrays
// const person = {
//   name: "Raj",
//   age: 29,
//   address: {
//     street: "MG Road",
//     city: "Dehradun",
//     state: "Uttarakhand",
//   },
//   hobbies: ["music", "coding", "travel"],
//   education: [
//     { degree: "B.Tech", year: 2018, school: "IIT" },
//     { degree: "M.Tech", year: 2020, school: "IISc" },
//   ],
// };

// const orders = [
//   {
//     id: 1,
//     product: "laptop",
//     quantity: 2,
//     details: { price: 50000, warranty: "2 years" },
//   },
//   {
//     id: 2,
//     product: "mouse",
//     quantity: 5,
//     details: { price: 500, warranty: "1 year" },
//   },
// ];

// // 1. Using object destructuring, extract the city and state from the address of person into variables.
// let { city, state } = person.address;
// console.log(city, state)

// // 2. Extract the first hobby and the rest as an array from the hobbies array of person using array destructuring.
// let [hobby, ...rest] = person.hobbies;
// console.log(hobby, rest);

// // 3. Use object spread to create a new copy of person but update the age to 30.
// let newPerson = { ...person, age: 30 };
// console.log(newPerson);

// // 4. Combine the education array and orders array into a new array (assume orders is compatible) using the spread operator.
// let eduOrder = [...person.education, ...orders];
// console.log(eduOrder);

// // 1. Create a shallow copy of the person object using spread syntax. Modify the city inside the copied object's address. What happens to the original person object?
// let person2 = { ...person };
// person2.address.city = "delhi";
// console.log(person.address.city, person2.address.city);
// // both got changed

// // 2. Deep copy the person object using JSON methods and change the street property in the copy. Does the original change?
// let person2 = JSON.parse(JSON.stringify(person))
// person2.address.city = "delhi";
// console.log(person.address.city, person2.address.city);
// // only the 2nd one got changed

// // 3. Using array spreading, create a shallow copy of the orders array. Modify the product name in one element of the copied array. Does the change reflect in the original orders array?
// let orders2 = [...orders];
// orders2[1].product = "Chimpanzi";
// console.log(orders[1].product, orders2[1].product);
// // both got changed

// // 4. Write a function to perform a manual deep copy (clone) of a given object with nested arrays and objects (consider your person object as input).
// function makeDeepCopy(item) {
//   return JSON.parse(JSON.stringify(item));
// }
// console.log(makeDeepCopy(person));

// // 1. Given this array, remove 2 elements starting at index 3 and insert "kiwi" and "mango" instead using an immutable method.
// const fruits1 = [
//   "apple",
//   "banana",
//   "cherry",
//   "date",
//   "elderberry",
//   "fig",
//   "grape",
// ];

// let newFruits = fruits1.toSpliced(3, 2, "kiwi", "mango");
// console.log(newFruits);

// // 2. Find the first number greater than 50 in the array below.
// const numbers1 = [10, 25, 37, 53, 49, 65, 79];
// let greater = numbers1.find((n) => n > 50);
// console.log(greater);

// // 3. Check if the array contains the string "javascript".
// const techStack1 = ["html", "css", "python", "javascript", "react"];
// let checkJS = techStack1.includes("javascript");
// console.log(checkJS);

// // 4. Using toSpliced(), remove the first two elements from the array of animals immutably.
// const animals1 = ["cat", "dog", "rabbit", "hamster", "parrot"];
// let newAnimals = animals1.toSpliced(0, 2);
// console.log(newAnimals);

// // 5. Find the object where the person's age is over 30.
// const people1 = [
//   { name: "Alice", age: 28 },
//   { name: "Bob", age: 34 },
//   { name: "Charlie", age: 22 },
// ];
// let over30 = people1.find((n) => n.age > 30);
// console.log(over30)

// // 6. Check if the array below includes the number 42.
// const primes1 = [3, 5, 7, 11, 13, 17, 23];
// let includes42 = primes1.includes(42);
// console.log(includes42);

// // 7. Remove 3 elements starting at index 1 and add "orange" and "grape", return new array without modifying original.
// const fruits2 = ["apple", "banana", "cherry", "date", "elderberry"];
// let newFruits = JSON.parse(JSON.stringify(fruits2)).toSpliced(1, 3, "orange", "grape");
// console.log(fruits2, newFruits);

// // 8. Find the first string in the array that starts with the letter 'b'.
// const words1 = ["apple", "banana", "blueberry", "avocado", "blackberry"];
// let bWord = words1.find((word) => word.startsWith("b"));
// console.log(bWord);

// // 9(a). Does the array below include the substring "sun" in any element?
// const labels1 = ["sunshine", "moonlight", "starlight", "daylight"];
// let sunWord = labels1.some((label) => label.includes("sun"));
// console.log(sunWord);

// // 9(b). Finding the index of any value if it contains 'day'
// const labels2 = ["sunshine", "moonlight", "starlight", "daylight"];
// let dayIndex = labels2.findIndex((label) => label.includes("day"));
// console.log(dayIndex);

// // 10. Remove last element immutably using toSpliced() without changing original array.
// const colors1 = ["red", "blue", "green", "yellow"];
// let newColors = colors1.toSpliced(colors1.length - 1, 1);
// console.log(newColors);

// // 11. Find the first even number greater than 10 in the array.
// const nums2 = [3, 9, 11, 18, 22, 27];
// let greater10 = nums2.find((n) => n % 2 == 0 && n > 10);
// console.log(greater10);

// // 12. Check if the array contains the boolean value true.
// const flags1 = [false, false, true, false];
// let booleanT = flags1.includes(true);
// console.log(booleanT);

// // 13. Remove the middle element immutably from the array below using toSpliced().
// const letters1 = ["a", "b", "c", "d", "e"];
// let middleIndex = Math.floor(letters1.length / 2);
// let newLetters = letters1.toSpliced(middleIndex, 1);
// console.log(newLetters);

// // 14. Find the object in the array with the name "John".
// const employees1 = [
//   { name: "Anna", id: 1 },
//   { name: "John", id: 2 },
//   { name: "Mark", id: 3 },
// ];
// let john = employees1.find((emp) => emp.name == "John");
// console.log(john);

// // 15. Does the list below include the number 1000?
// const bigNumbers1 = [100, 500, 999, 1000, 1500];
// let num1000 = bigNumbers1.includes(1000);
// console.log(num1000);
