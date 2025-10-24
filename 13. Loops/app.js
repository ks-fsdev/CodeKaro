// for loop to print all even nos b/w 10 and 50

for (i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// // for loop sum of all numbers between 1 and 100

let sum = 0;
for (i = 0; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

//Given a number n = 7, use a for loop to print its multiplication table in this format:
//7 x 1 = 7 up to 7 x 10 = 70.

let n = prompt("Enter a number:");
for (i = 1; i <= 10; i++) {
  console.log(n + " * " + i + " = " + n * i);
}

//print an array in uppercase

const fruits = ["apple", "banana", "grape", "mango"];

fruits.forEach((n) => {
  console.log(n.toUpperCase());
});

// 10% discount to each array item

const prices = [120, 250, 300, 150];

prices.forEach((n) => {
  console.log(n - n * 0.1);
});

//print who passed if marks >= 75

const students = [
  { name: "Amit", marks: 85 },
  { name: "Sara", marks: 92 },
  { name: "Karan", marks: 73 },
];

students.forEach((student) => {
  if (student.marks >= 75) {
    console.log(student.name + "has passed with " + student.marks + " marks.");
  }
});
