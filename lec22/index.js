console.log("\n--->>> Lec #22 || Advance js-2 <<<---\n");

// console.log("\n--->>> try catch finally <<<---\n");
// try {
//   var variable = 20 / 0;
//   alert();
//   console.log("Try section is running");
// } catch (issue) {
//   console.log("issue section", issue);
//   console.log("Catch section is running");
// } finally {
//   console.log("Finally section");
// }

// console.log("\n--->>> destructuring <<<---\n");

// var car = {
//   door: "auto",
//   power: "battery",
//   engin: "turbo",
//   battery: {
//     type: "cell",
//     capacity: "1kw",
//   },
// };
// const { door, power, engin } = car;
// // const { type, capacity } = battery;
// // console.log(power);
// // console.log(type);
// // console.log(car.battery.type);

// try {
//   car?.battery?.price?.forEach((element) => {
//     console.log("element", element);
//   });
// } catch (error) {
//   console.log("error", error);
// }
// console.log("catch");

// console.log("\n--->>> spread operator <<<---\n");

// var obj1 = {
//   value1: "first",
//   value2: "second",
// };

// var obj2 = {
//   value3: "third",
//   value4: "four",
// };

// var ObjOneTwo = {
//   ...obj1,
//   ...obj2,
// };
// console.log("combine two obj ", ObjOneTwo);
// console.log(
//   "Getting keys after combining two objects : ",
//   Object.keys(ObjOneTwo)
// );

// var num1 = [2];
// var num2 = [3];

// var twoNum = [...num1, ...num2];
// console.log(twoNum);

// var vari1 = 2;
// var vari2 = 3;

// console.log("\n--->>> SetTimeOut SetInterval <<<---\n");

// console.log("first");
// var counter = 1;
// function checkTime(params) {
//   console.log(counter++);
// }
// setTimeout(checkTime, 3000);
// console.log("third");

// setInterval(checkTime, 1);

// console.log("\n--->>> Rest operator <<<---\n");

// function values(...valuess) {
//   console.log(valuess );
// }

// values(1, 2, 3, 4);

// console.log("\n--->>> Include Function <<<---\n");

// var includeArr = [1, 4, 3, "ahmad"];
// console.log(includeArr.includes("ahmad"));

// console.log("\n--->>> Sort Function <<<---\n");
// var storeSort = includeArr.sort((a, b) => a - b);
// console.log(storeSort);

// console.log("\n--->>> Random Function <<<---\n");

// var random = Math.random() * 7;
// console.log(random);

// console.log("\n--->>> Max Function <<<---\n");
// var maxArr = [1, 2, 4, 55, 4];
// console.log(Math.max(...maxArr));

// console.log("\n--->>> Min Function <<<---\n");
// var maxArr = [1, 2, 4, 55, 4];
// console.log(Math.min(...maxArr));

// console.log("\n--->>> Round Function <<<---\n");

// var roundNum = 2233.334;
// console.log(Math.round(roundNum));

// console.log("\n--->>> Ceil Function <<<---\n");

// var roundNum = 2233.534;
// console.log(Math.ceil(roundNum));

// console.log("\n--->>> Floor Function <<<---\n");

// var roundNum = 2233.534;
// console.log(Math.floor(roundNum));
