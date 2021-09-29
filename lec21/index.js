console.log("\n--->>> Lec #21 || Advance js <<<---\n");

// var intialArr = [1, 2, 3, 4, 5];
// var multiplyer = [];
// console.log("first array : ", intialArr);
// for (index = 0; index < intialArr.length; index++) {
//   multiplyer[index] = intialArr[index] * 2;
// }
// console.log("second array : ", multiplyer);

// console.log("\n --->>> Arrow method <<<--- \n");

// const arrowMethod = (a, b) => {
//   return a + b;
// };
// console.log(arrowMethod(2, 2));

// console.log("\n --->>> for each loop <<<--- \n");

// var intialArr = [1, 2, 3, 4, 5];
// intialArr.forEach((actualValue, arrayIndex) => {
//   console.log("Actual value : ", actualValue, " index : ", arrayIndex);
// });

// console.log("\n --->>> Map loop <<<--- \n");
// var multiplyer = [];
// var intialArr = [1, 2, 3, 4, 5];
// intialArr.map((actualValue, arrayIndex) => {
//   return (
//     actualValue * 2,
//     console.log("Actual value : ", actualValue, " index : ", arrayIndex)
//   );
// });

console.log("\n --->>> Filter loop <<<--- \n");
var multiplyer = [];
var intialArr = [1, 2, 3, 4, 5];
multiplyer = intialArr.filter((actualValue, arrayIndex) => actualValue > 2);

console.log(multiplyer);
console.log("new length : ", multiplyer.length);
