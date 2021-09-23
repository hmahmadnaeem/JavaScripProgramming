// === check given numbers are equal are not
// var num1 = 10;
// var num2 = 10;
// var num3 = 2;
// var num4 = 21;

// if (num1 == num2 && num3 == num4) {
//   console.log("num1 and num2 are equal ");
// } else if (num3 == num4) {
//   console.log("number 3 and 4 are equal");
// } else {
//   console.log("given numbers are not equal");
// }

// // === check given number is odd or even
// var number = 15515461;

// if (number % 2 == 0) {
//   console.log("number is even");
// } else {
//   console.log("number is odd");
// }

// ---
// // ===== Q. No. 1;
// console.log(false || (true && false));
// console.log(true || 1 + 2);
// console.log(1 + 2 || true);
// console.log(true && 1 + 2);
// console.log(false && 1 + 2);
// console.log(1 + 2 && true);
// console.log(32 * 4 >= 129);
// console.log(false !== !true);
// console.log(true === 4);
// console.log(false === (847 === "847"));
// console.log(false === (847 == "847"));
// console.log(!true || !(100 / 5) === 20 || 328 / 4 === 82 || false);
// //  ---

// // ===== Question-02 Add a validation check to ensure that, a number is an integer. If it isn't, then issue an error message and console it.
// var a = "10";
// var numCheck = a;
// console.log(typeof numCheck);
// if (Number.isInteger(numCheck)) {
//   console.log("Giver value is an integer");
// } else {
//   console.log("No!, this is not an integer");
// }
// // ---

// // ===== Question-03 Write a js program to find maximum between two numbers.
// num1 = "22";
// num2 = 22;
// if (num1 > num2) {
//   console.log("This is your greater number : " + num1);
// } else if (num1 < num2) {
//   console.log("This is your greater number : " + num2);
// } else console.log("both numbers are equal : " + num1);
// // ---

// // ===== Question-04 Write a js program to find maximum between three numbers.
// num1 = 3;
// num2 = 3;
// num3 = 3;
// if (num1 > num2 && num1 > num3 && num1 !== num2 && num1 !== num3) {
//   console.log("your greater value is " + num1);
// } else if (num2 > num3 && num1 !== num2 && num1 !== num3) {
//   console.log("your greater value is " + num2);
// } else if (
//   num1 < num3 &&
//   num2 < num3 &&
//   num3 !== num1 &&
//   num3 !== num2 &&
//   num1 !== num2
// ) {
//   console.log("your greater value is " + num3);
// } else {
//   console.log("your one or two numers are same ");
// }
// // ---

// // ===== Question-05 Write a js program to check whether a number is negative, positive or zero.
// var num1 = -50;
// if (num1 > 0) {
//   console.log("value is positire " + num1);
// } else if (num1 < 0) {
//   console.log("value is nigative " + num1);
// } else {
//   console.log("your number is  0");
// }
// // ---

// ===== Question-06 Write a js program to check whether a number is divisible by 5 and 11 or not.
// num = 55;
// if (num % 5 == 0 && num % 11 == 0) {
//   console.log("Yes!, given number is divisible with 5 and 11 which is " + num);
// } else {
//   console.log(
//     "No!, given number is not divisible with 5 and 11 which is " + num
//   );
// }

// // ---

// // ===== Question-07 Write a js program to check whether a number is even or odd.
// num = 190;
// if (num % 2 == 0) {
//   console.log("your no is an even number and number is " + num);
// } else console.log("your number is odd and number is " + num);
// // ---

// ===== Question-08 Write a js program to check whether character is an alphabet or not
ch = "q";
if (ch >= "A" || ch >= "a") {
  console.log(ch + " is an Alphabet: ");
  // If the character  is an alphabet, it is displayed
} else {
  console.log("not an alphabet");
}
// // ---
