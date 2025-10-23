// Part 1
let shoppingList = [
  "Milk",
  "Eggs",
  "Bread",
  ["Apples", "Bananas", "Oranges"],
  ["Potatoes", "Tomatoes", "Onions"],
];

// 1.
console.log(shoppingList[0]);

//2.
shoppingList.push("carrots");
console.log(shoppingList);

//3.
shoppingList.pop();
console.log(shoppingList);

// 4.
shoppingList[4].splice(1, 2, "Cucumbers", "Bell Peppers");
console.log(shoppingList);

// Part 2
let student = {
  name: "Amit",
  age: 20,
  grade: "A",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "India",
  },
};

//1
console.log(student.name);

//2
student.phone = "123-456-7890";
console.log(student);

//3
delete student.grade;
console.log(student);

//4
student.age = 21;
console.log(student.age);

// Part 3

//1
let num = promt("enter a number:");

if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("zero");
}

//2
let score = 59;

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score > 79 && score <= 89) {
  console.log("B");
} else if (score > 69 && score <= 79) {
  console.log("C");
} else if (score > 59 && score <= 69) {
  console.log("D");
} else "F";

//3
let input = prompt("Enter a string:");

(input === "") ? console.log("Falsy") : console.log("Truthy");
