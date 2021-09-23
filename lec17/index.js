var stringLine = "this is first string";
console.log("current string length is : ", stringLine.length);

var newString = stringLine.slice(8, 14);
console.log(newString);

stringLine = stringLine.replace("first", "second");
console.log(stringLine);

stringLine = stringLine.toUpperCase();
console.log(stringLine);

stringLine = stringLine.toLowerCase();
console.log(stringLine);

var trimIt = " This is trimmed ";
trimIt = trimIt.trim();
console.log(trimIt.length, trimIt);

var trimItt = trimIt.charAt("8");
console.log(trimItt);

trimIt = trimIt.indexOf("d");
console.log(trimIt);

var jScript = "java, script, programming";

jScript = jScript.split(",");
console.log(typeof jScript, jScript);
var getValue;
getValue = jScript[1];
console.log(getValue);

console.log("--->>> || <<---\n");
var num = "9,8,7,6,5,4,3,2,1";
var arrNum = num.split(",");
var numTypeArr = [];
var singleArr;

for (i = 0; i < arrNum.length; i++) {
  singleArr = parseInt(arrNum[i]);
  console.log(parseInt(singleArr));
  numTypeArr.push(singleArr);
}
console.log("num as array ", arrNum);
console.log("num as number ", numTypeArr);
