let score = "33"
console.log(typeof score);    //check type of var use --> typeof
console.log(typeof (score));

let valueInNumber = Number(score)   //converting in number using new variable
console.log(typeof valueInNumber);

let score1 = "33abc"
console.log(typeof score);
let valInNum = Number(score1)
console.log(typeof valInNum);
// NaN --->> Not a Number
console.log(valInNum);   //displaying what's the output

let score2 = null
console.log(typeof score);
let valInNum1 = Number(score2)
console.log(typeof valInNum1);
console.log(valInNum1);


let score3 = undefined
console.log(typeof score);

let valInNum2 = Number(score3)
console.log(typeof valInNum2);
// NaN --->> Not a Number
console.log(valInNum2);


/*
"33" ==> 33
"33abc" => NaN
true => 1; false => 0
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 --> true ; 0 --> false
// "" --> false
// "ashish" --> true


//checking number can change in string or not using conversion Operation
let num1 = 25
let convInString = String(num1)
console.log(convInString);
console.log(typeof convInString);


