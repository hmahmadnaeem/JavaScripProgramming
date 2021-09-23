console.log("\n--->>>>>>| Assignment # 5 |<<<<<<---\n");

// console.log(
//   "\n--->>>>>>| Q # 1 :- Write a js program to print day of week name using switch case. |<<<<<<---\n"
// );

// day = 17;
// switch (day) {
//   case 1:
//     console.log("Today is Monday");
//     break;
//   case 2:
//     console.log("Today is Tue");
//     break;
//   case 3:
//     console.log("Today is Wed");
//     break;
//   case 4:
//     console.log("Today is Thu");
//     break;
//   case 5:
//     console.log("Today is Fri");
//     break;
//   case 6:
//     console.log("Today is Sat");
//     break;
//   case 7:
//     console.log("Today is Sun");
//     break;
//   default:
//     console.log("please enter valid number");
//     break;
// }

// console.log(
//   "\n--->>>>>>| Q # 2 :- Write a js program print total number of days in a month using switch case. |<<<<<<---\n"
// );

// monthName = "Jun";
// switch (monthName) {
//   case "Jan":

//   case "Mar":

//   case "May":

//   case "Jul":

//   case "Aug":

//   case "Oct":
//     console.log("There're 31 day in " + monthName + " month");
//     break;
//   case "Feb":
//     console.log("There're 28 day in " + monthName + " month");
//     break;
//   case ("Apr", "Jun", "Sep", "Nov"):
//   case "Jun":
//   case "Sep":
//   case "Nov":
//     console.log("There're 30 day in " + monthName + " month");
//     break;
//   default:
//     console.log("Need spelling correction");
//     break;
// }

// console.log(
//   "\n--->>>>>>| Q # 3 :- Write a js program to check whether an alphabet is vowel or consonant using switch case. |<<<<<<---\n"
// );
// alphabet = "a";
// switch (alphabet) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("you enter " + alphabet + " which is vowel\n");
//     break;

//   default:
//     console.log("you enter " + alphabet + " which is consonent \n");
//     break;
// }

// console.log(
//   "\n--->>>>>>| Q # 4 :- Write a js program to find maximum between two numbers using switch case. |<<<<<<---\n"
// );
// var num1 = 50;
// var num2 = 90;
// switch (num1 > num2) {
//   case true:
//     console.log("num1 greater number then num2");
//     break;
//   case false:
//     console.log("num2 greater number then num1");
//     break;
//   default:
//     console.log("Please enter only integer value");
//     break;
// }

// console.log(
//   "\n--->>>>>>| Q # 5 :- Write a js program to check whether a number is even or odd using switch case."
// );
// num = 781;
// switch (num % 2) {
//   case 0:
//     console.log("The numer is even which is ", num);
//     break;

//   case 1:
//     console.log("The numer is odd which is ", num);
//     break;

//   default:
//     console.log("please enter only positive integer value");
//     break;
// }

// console.log(
//   "\n--->>>>>>| Q # 6 :- Write a js program to check whether a number is positive, negative or zero using switch case\n"
// );
// num = -001;
// switch (num > 0) {
//   case true:
//     console.log("number is positive integer & Number is ", num);
//     break;
//   case false:
//     switch (num < 0) {
//       case true:
//         console.log("number is negative integer & Number is ", num);
//         break;
//       case false:
//         console.log("number is Zero");
//     }
//     break;
// }

// console.log(
//   "\n--->>>>>>| Q # 8 :- Write a js program to create Simple Calculator using switch case."
// );
// num1 = 15;
// num2 = 2;
// console.log("\nGivent number one : ", num1);
// console.log("Givent number two : ", num2);
// operanet = "%";
// result = 0;
// switch (operanet) {
//   case "+": {
//     result = num1 + num2;
//     console.log("--->>> Result of addion is  : ", result);
//     break;
//   }
//   case "-": {
//     result = num1 - num2;
//     console.log("--->>> Result of subtraction is  : ", result);
//     break;
//   }
//   case "*": {
//     result = num1 * num2;
//     console.log("--->>> Result of multiply is  : ", result);
//     break;
//   }
//   case "/": {
//     result = num1 / num2;
//     console.log("--->>> Result of devision is  : ", result);
//     break;
//   }
//   case "%": {
//     result = num1 % num2;
//     console.log("--->>> Result of remainder is  : ", result);
//     break;
//   }
//   default:
//     console.log("only math operatons are valid");
//     break;
// }

// console.log(
//   "\n--->>>>>>|Q # 9 Write a js program to input any character and check whether it is alphabet, digit or special character.\n"
// );

// charac = "&";
// switch (charac >= 0) {
//   case true:
//     console.log("charanter is inter, Value is ", charac);
//     break;
//   case false:
//     switch (charac >= "a") {
//       case true:
//         console.log("charanter is alphabet, Value is ", charac);
//         break;
//       case false:
//         console.log("charanter is special Character, Value is ", charac);
//         break;
//     }
//     break;
// }

// console.log(
//   "\n--->>>>>>| Q # 10 Write a js program to check whether a character is uppercase or lowercase alphabet.\n"
// );

// charec = "w";
// switch (charec >= "a") {
//   case true:
//     console.log("character is in lowercase : ", charec);
//     break;
//   case false:
//     switch (charec >= "A") {
//       case true:
//         console.log("character is in Uppdercase : ", charec);
//         break;
//       case false:
//         console.log("character is not an alphabet : ", charec);
//         break;
//     }
//     break;
// }

// console.log(
//   "--->>>>>>| Q # 11 :- Write a js program to input week number and print week day.\n"
// );

// weekNum = 5;
// switch (weekNum) {
//   case 1:
//     console.log("Today is Monday");
//     break;
//   case 2:
//     console.log("Today is Tuesday");
//     break;
//   case 3:
//     console.log("Today is Wednesday");
//     break;
//   case 4:
//     console.log("Today is Thursday");
//     break;
//   case 5:
//     console.log("Today is Friday");
//     break;
//   case 6:
//     console.log("Today is Saturday");
//     break;
//   case 7:
//     console.log("Today is Sunday");
//     break;
//   default:
//     console.log("only 1 to 7 numbers are valid");
//     break;
// }

// console.log(
//   "--->>>>>>| Q # 12 :- Write a js program to input month number and print number of days in that month.\n"
// );

// monthNum = 9;
// switch (monthNum) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("Your month number is " + monthNum + " it has 31 days");
//     break;
//   case 2:
//     console.log("Your month number is " + monthNum + " it has 28/29 days");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("Your month number is " + monthNum + " it has 30 days");
//     break;
//   default:
//     console.log("Only 1-12 numbers are acceptable");
//     break;
// }

console.log(
  "--->>>>>>| Q # 13 :- Write a js program to count total number of notes in given amount.\n"
);

amout = 26050;
console.log("initial given about is ", amout);
noteCount = 0;

switch (amout) {
  case amout: {
    noteCount = parseInt(amout / 5000);
    console.log("\n--->>> No of 5000 note/s : ", noteCount);
    noteCount = noteCount * 5000;
    amout = amout - noteCount;
    noteCount = 0;
    console.log("remaining about is ", amout);
    // console.log("Counter value is : ", noteCount);

    // ---
    noteCount = parseInt(amout / 1000);
    console.log("\n--->>> No of 1000 note/s : ", noteCount);
    noteCount = noteCount * 1000;
    amout = amout - noteCount;
    noteCount = 0;
    console.log("remaining about is ", amout);
    // console.log("Counter value is : ", noteCount);

    // ---
    noteCount = parseInt(amout / 500);
    console.log("\n--->>> No of 500 note/s : ", noteCount);
    noteCount = noteCount * 500;
    amout = amout - noteCount;
    noteCount = 0;
    console.log("remaining about is ", amout);
    // console.log("Counter value is : ", noteCount);

    // ---
    noteCount = parseInt(amout / 100);
    console.log("\n--->>> No of 100 note/s : ", noteCount);
    noteCount = noteCount * 100;
    amout = amout - noteCount;
    noteCount = 0;
    console.log("remaining about is ", amout);
    // console.log("Counter value is : ", noteCount);

    // ---
    noteCount = parseInt(amout / 50);
    console.log("\n--->>> No of 50 note/s : ", noteCount);
    noteCount = noteCount * 50;
    amout = amout - noteCount;
    noteCount = 0;
    console.log("remaining about is ", amout);
    // console.log("Counter value is : ", noteCount);

    // ---
    noteCount = parseInt(amout / 20);
    console.log("\n--->>> No of 20 note/s : ", noteCount);
    noteCount = noteCount * 20;
    amout = amout - noteCount;
    noteCount = 0;
    console.log("remaining about is ", amout);
    // console.log("Counter value is : ", noteCount);

    // ---
    noteCount = parseInt(amout / 10);
    console.log("\n--->>> No of 10 note/s : ", noteCount);
    noteCount = noteCount * 10;
    amout = amout - noteCount;
    noteCount = 0;
    console.log("remaining about is ", amout);
    // console.log("Counter value is : ", noteCount);

    // ---
    noteCount = parseInt(amout / 5);
    console.log("\n--->>> No of 5 note/s : ", noteCount);
    noteCount = noteCount * 5;
    amout = amout - noteCount;
    noteCount = 0;
    console.log("remaining about is ", amout);
    // console.log("Counter value is : ", noteCount);

    // ---
    noteCount = parseInt(amout / 2);
    console.log("\n--->>> No of 2 note/s : ", noteCount);
    noteCount = noteCount * 2;
    amout = amout - noteCount;
    noteCount = 0;
    console.log("remaining about is ", amout);
    // console.log("Counter value is : ", noteCount);

    // ---
    noteCount = parseInt(amout / 1);
    console.log("\n--->>> No of 1 note/s : ", noteCount);
    noteCount = noteCount * 1;
    amout = amout - noteCount;
    noteCount = 0;
    console.log("remaining about is ", amout);
    // console.log("Counter value is : ", noteCount);

    break;
  }
  default:
    console.log("defaule section is in progress ");
    break;
}

// console.log(
//   "--->>>>>>| Q # 14 :- Write a js program to input angles of a triangle and check whether triangle is valid or not.\n"
// );

// var a = 45;
// var b = 415;
// var c = 90;

// switch (c == 90 && a + b == 90) {
//   case true:
//     {
//       console.log(
//         "Yes!, this is right triagnle.\n",
//         "\n--->>> Value of Agnle a = ",
//         a,
//         "\n--->>> Value of Agnle b = ",
//         b,
//         "\n--->>> Value of Agnle c = ",
//         c,
//         "\n the sum of angle a + b + c is : ",
//         a + b + c
//       );
//     }
//     break;

//   case false:
//     {
//       console.log(
//         "No!, this is no right triagnle.\n",
//         "\n--->>> Value of Agnle a = ",
//         a,
//         "\n--->>> Value of Agnle b = ",
//         b,
//         "\n--->>> Value of Agnle c = ",
//         c,
//         "\n the sum of angle a + b + c is : ",
//         a + b + c
//       );
//     }
//     break;

//   default:
//     console.log("Please put only values which are acceptable in triangle rule");
//     break;
// }
// // ---

// console.log(
//   "--->>>>>>| Q # 15 :- Write a js program to input all sides of a triangle and check whether triangle is valid or not.\n"
// );

// var a = 110;
// var b = 10;
// var c = 40;

// switch (a + b > c && b + c > a && c + a > b) {
//   case true:
//     {
//       console.log("Yes this is a triagnle\n");
//       console.log("Sum of a + b is ", a + b, "and value of c is ", c);
//       console.log("Sum of b + c is ", b + c, "and value of a is ", a);
//       console.log("Sum of c + a is ", c + a, "and value of b is ", b);
//     }
//     break;
//   case false:
//     {
//       console.log("No, this is not a triagnle\n");
//       console.log("Sum of a + b is ", a + b, "and value of c is ", c);
//       console.log("Sum of b + c is ", b + c, "and value of a is ", a);
//       console.log("Sum of c + a is ", c + a, "and value of b is ", b);
//     }
//     break;
//   default:
//     console.log("Default section ");
//     break;
// }
// // ---

// console.log(
//   "--->>>>>>| Q # 16 :- Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.\n"
// );

// console.log("--->>> Equilateral Triangle <<<---");
// var aSide = 10;
// var bSide = 10;
// var cSide = 10;

// var aAngle = 60;
// var bAngle = 60;
// var cAbgle = 60;

// switch (
//   (aSide == bSide,
//   bSide == cSide,
//   cSide == aSide && (aAngle, bAngle, cAbgle == 60))
// ) {
//   case true:
//     {
//       console.log("Yes, this is a Equilateral triangle");
//     }
//     break;
//   case false:
//     {
//       console.log("No, this is not an Equilateral triangle");
//     }
//     break;
//   default:
//     console.log("currently default section is in runing");
//     break;
// }
// ---

// console.log("--->>> Isoscale Triangle <<<---");

// var ABSide = 19;
// var BCSide = 1;
// var CASide = 1;
// var aAngle = 1;
// var bAngle = 1;
// var cAngle = 0;

// switch (
//   (ABSide == BCSide && ABSide != CASide && aAngle == cAngle) ||
//   (BCSide == CASide && BCSide != ABSide && bAngle == aAngle) ||
//   (CASide == ABSide && CASide != BCSide && cAngle == bAngle)
// ) {
//   case true:
//     {
//       console.log("Yes! it's a Isoscale Triangle");
//     }
//     break;
//   default:
//     console.log("No! it's not a Isoscale Triangle");
// }
// // ---

// console.log("--->>> Scalene Triangle <<<---");
// var aSide = 2;
// var bSide = 4;
// var cSide = 1;

// switch (aSide != bSide && bSide != cSide && cSide != aSide) {
//   case true:
//     console.log("Yes! it is a scalen triangle");
//     break;
//   default:
//     console.log("No! it is not a scalen triangle ");
// }
// // ---

// console.log(
//   "--->>>>>>| Q # 18 :- Write a js program to calculate profit or loss.\n"
// );
// var selRat = 21;
// var buyRat = 21;

// switch (selRat >= buyRat) {
//   case true:
//     switch (selRat > buyRat) {
//       case true:
//         console.log(
//           "Congratulation! you are in profit, your profit is Rs:",
//           selRat - buyRat
//         );
//         break;
//         console.log("--->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n");

//       case false:
//         console.log("Oh, you did't get any benift event not lose any thing");
//         break;
//     }
//     break;

//   case false:
//     console.log("Sorry you are in loss, you lose Rs:", buyRat - selRat);

//     break;

//   default:
//     console.log("default value");
//     break;
// }
// // ---

// console.log(
//   "--->>>>>>| Q # 19 :- Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following: Percentage >= 90% : Grade A Percentage >= 80% : Grade B Percentage >= 70% : Grade C Percentage >= 60% : Grade D Percentage >= 40% : Grade E Percentage < 40% : Grade F.\n\n"
// );

// var Physics = 90;
// var Chemistry = 100;
// var Biology = 100;
// var Math = 100;
// var Cs = 100;
// var marks = true;
// switch (marks) {
//   case true:
//     switch (Physics >= 0 && Physics < 40) {
//       case true:
//         console.log(" --->>> Your Grade in Physics is F \n");
//         break;
//       case false:
//         switch (Physics >= 40 && Physics < 60) {
//           case true:
//             console.log(" --->>> Your Grade in Physics is E \n");
//             break;
//           case false:
//             switch (Physics >= 60 && Physics < 70) {
//               case true:
//                 console.log(" --->>> Your Grade in Physics is D \n");
//                 break;
//               case false:
//                 switch (Physics >= 70 && Physics < 80) {
//                   case true:
//                     console.log(" --->>> Your Grade in Physics is C \n");
//                     break;
//                   case false:
//                     switch (Physics >= 80 && Physics < 90) {
//                       case true:
//                         console.log(" --->>> Your Grade in Physics is B \n");
//                         break;
//                       case false:
//                         switch (Physics >= 90 && Physics <= 100) {
//                           case true:
//                             console.log(
//                               " --->>> Your Grade in Physics is A \n"
//                             );
//                             break;
//                           case false:
//                             console.log(
//                               "Please enter correct value of Physics"
//                             );

//                             break;
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     break;
//   // --- physics end

//   case false:
//     console.log("\n-----------------------false");
//     break;
// }
// // ---

// console.log(
//   "--->>>>>>| Q # 20 :- Write a js program to input basic salary of an employee and calculate its Gross salary according to following: Basic Salary <= 10000 : HRA = 20%, DA = 80% Basic Salary <= 20000 : HRA = 25%, DA = 90% Basic Salary > 20000 : HRA = 30%, DA = 95%\n\n"
// );

// var basicSallery = 30000;
// var hra;
// var da;

// switch (basicSallery >= 0 && basicSallery <= 10000) {
//   case true:
//     {
//       hra = (20 / 100) * basicSallery;
//       da = (80 / 100) * basicSallery;
//       console.log(
//         "Your basic sallery is : ",
//         basicSallery,
//         " HEA is : ",
//         hra,
//         "DA is : ",
//         da
//       );
//     }
//     break;
//   case false:
//     switch (basicSallery > 10000 && basicSallery <= 20000) {
//       case true:
//         {
//           hra = (25 / 100) * basicSallery;
//           da = (90 / 100) * basicSallery;
//           console.log(
//             "Your basic sallery is : ",
//             basicSallery,
//             " HEA is : ",
//             hra,
//             "DA is : ",
//             da
//           );
//         }
//         break;
//       case false:
//         switch (basicSallery > 20000) {
//           case true:
//             {
//               hra = (30 / 100) * basicSallery;
//               da = (95 / 100) * basicSallery;
//               console.log(
//                 "Your basic sallery is : ",
//                 basicSallery,
//                 " HEA is : ",
//                 hra,
//                 "DA is : ",
//                 da
//               );
//             }
//             break;
//         }
//         break;
//     }

//   default:
//     console.log("default");
//     break;
// }
// // ---

// console.log(
//   "--->>>>>>| Q # 21 :- Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition: For first 50 units Rs. 0.50/unit For next 100 units Rs. 0.75/unit For next 100 units Rs. 1.20/unit For unit above 250 Rs. 1.50/unit An additional surcharge of 20% is added to the bill\n\n"
// );

// unitCount = 100;
// unitRate = 0;
// totalBill = 0;
// percentage = 0;

// switch (unitCount >= 0 && unitCount <= 50) {
//   case true:
//     {
//       unitRate = 0.5;
//       totalBill = unitCount * unitRate;
//       percentage = (20 / 100) * totalBill;
//       totalBill = percentage + totalBill;
//       console.log(
//         " --->>> total number of unit ",
//         unitCount,
//         "\n --->>> unit rate ",
//         unitRate,
//         "\n --->>> additional charges ",
//         percentage,
//         "\n --->>> Total bill is : ",
//         totalBill
//       );
//     }
//     break;
//   case false:
//     switch (unitCount > 50 && unitCount <= 150) {
//       case true:
//         {
//           unitRate = 0.75;
//           totalBill = unitCount * unitRate;
//           percentage = (20 / 100) * totalBill;
//           totalBill = percentage + totalBill;
//           console.log(
//             " --->>> total number of unit ",
//             unitCount,
//             "\n --->>> unit rate ",
//             unitRate,
//             "\n --->>> additional charges ",
//             percentage,
//             "\n --->>> Total bill is : ",
//             totalBill
//           );
//         }
//         break;
//       case false:
//         switch (unitCount > 150 && unitCount <= 250) {
//           case true:
//             {
//               unitRate = 1.2;
//               totalBill = unitCount * unitRate;
//               percentage = (20 / 100) * totalBill;
//               totalBill = percentage + totalBill;
//               console.log(
//                 " --->>> total number of unit ",
//                 unitCount,
//                 "\n --->>> unit rate ",
//                 unitRate,
//                 "\n --->>> additional charges ",
//                 percentage,
//                 "\n --->>> Total bill is : ",
//                 totalBill
//               );
//             }
//             break;
//           case false:
//             {
//               switch (unitCount > 250) {
//                 case true:
//                   {
//                     unitRate = 1.5;
//                     totalBill = unitCount * unitRate;
//                     percentage = (20 / 100) * totalBill;
//                     totalBill = percentage + totalBill;
//                     console.log(
//                       " --->>> total number of unit ",
//                       unitCount,
//                       "\n --->>> unit rate ",
//                       unitRate,
//                       "\n --->>> additional charges ",
//                       percentage,
//                       "\n --->>> Total bill is : ",
//                       totalBill
//                     );
//                   }
//                   break;
//                 default:
//                   console.log("internal default");
//                   break;
//               }
//             }
//             break;
//         }
//         break;
//     }
//     break;

//   //
//   default:
//     console.log("default section");
//     break;
// }
// // ---
