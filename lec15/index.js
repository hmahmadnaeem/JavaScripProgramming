console.log("\n --->>> class 15, Array Method <<<--- \n");

var randomArr = ["Hassan", "Hussain", "Umar", "Usman", "Ali"];

console.log(randomArr);
console.log(randomArr.length, "\n");

randomArr.pop();
console.log(randomArr);
console.log(randomArr.length, "\n");

randomArr.push("addLast");
console.log(randomArr);
console.log(randomArr.length, "\n");

randomArr.shift();
console.log(randomArr);
console.log(randomArr.length, "\n");

randomArr.unshift("addStart");
console.log(randomArr);
console.log(randomArr.length, "\n");

randomArr.splice(1, 0, "One");
console.log(randomArr);
console.log(randomArr.length, "\n");

var cutArr = randomArr.slice(2, 5);
console.log("cutArr ", cutArr, "\n");
console.log(cutArr.length, "\n");
console.log("randomArr", randomArr, "\n");
console.log(randomArr.length, "\n");
