console.log("\n--->>> Lec #20 || Object Hnadling <<<---\n");

var mobileObj = {
  companyName: "Apple",
  model: "iPhone Xr",
  screenSize: "6 inch",
};
console.log("Company Name : ", mobileObj.companyName);
console.log("ScreenSize : ", mobileObj.screenSize);

mobileObj.screenSize = "6.1 inch";
console.log("New ScreenSize : ", mobileObj.screenSize);
// getting object all keys
console.log("Mobile object keys : ", Object.keys(mobileObj));

// getting object all values
console.log("Mobile object values : ", Object.values(mobileObj));
