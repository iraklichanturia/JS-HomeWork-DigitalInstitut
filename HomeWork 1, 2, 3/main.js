// //case1 exercise first(1)
// //create variables
// var Name;
// var Surname;
// var Age;

// //ask to user input the meanings
// Name = prompt("What is your name?");  //user inputs his/her name.
// Surname = prompt("What is your surname?");   //user inputs his/her surname.
// Age = parseInt(prompt("How old are you?"));    //user inputs his/her age as a number type variable (integer).

// //print meanings in console
// console.log("Your name is " + Name);
// console.log("Your surname is " + Surname);
// console.log("Your age is " + Age);

// //case2 exercise second(2)
// //create variables
// var Name;
// var Surname;
// var Age;
// var Email;
// var Gender;
// //ask to user input the meanings
// Name = prompt("What is your name?");  //user inputs his/her name.
// Surname = prompt("What is your surname?");   //user inputs his/her surname.
// Age = parseInt(prompt("How old are you?"));    //user inputs his/her age.
// Email=prompt ("Please enter your email address");     //user enters her/his email address.
// Gender=prompt("Are you a male or female?");      //user selects gender.
// //print text in document
// document.write("My Name is " + Name +" My Surname is " + Surname + " I am " + Age +  " years old. " + " You can contact me at: " + Email + " I am a " + Gender);

// //case2 exercise third(3);
// //create variable fullName;
// var fullName;
// fullName = prompt("Enter your full name");
// //merge with h1 input meaning and generate it in the document
// document.write('<h1>' + fullName + '</h1>');

// //case 2 homework 1
// //create variable
// var age = prompt("Enter your age")
// if (age >= 18){
//     fullName = prompt("Enter your fullname")
//     console.log("Hello " + fullName)
// }else{
//     alert('You are minor')
// }

// //case 2 homework 2
// var testCase = confirm("Start the quiz?")
// if (testCase){
//     var counter = 0;
//     var questionFirst = prompt("What is the capital of georgia? a)tbilisi b)kutaisi C)abasha d)batumi")
//     if (questionFirst === 'a') {
//         counter++
//     }
//     var questionSecond = prompt("Which planet is known as the Red Planet? a) Earth b) Mars c) Venus d) Jupiter");
//     if (questionSecond === 'b'){
//         counter++
//     }
//     var questionThird = prompt("Inside which HTML element do we put the JavaScript? a)<scripting> b)<js> c)<javascript> d)<script>");
//     if (questionThird === 'd'){
//         counter++
//     }
//     var questionFourth = prompt("How to write an IF statement in JavaScript? a)if i === 5 then b)if i == 5 c)if (i ==5) d)if i = 5 then");
//     if (questionFourth === 'c'){
//         counter++
//     }
//     console.log("count = ", counter);
// }else{
//     console.log("error");
// }

// //case 2 homework 3
// //create calculator
// var numOne = prompt("Enter first number");
// var operation = prompt("Choose operation (+ - * / =)");
// var numTwo = prompt("Enter second number");
// if (operation == "+"){
//     console.log(numOne + numTwo);}
// else if (operation == "-"){
//     console.log(numOne - numTwo);
// }
// else if (operation == "*"){
//     console.log(numOne * numTwo);
// }
// else if (operation == "/"){
//     console.log(numOne / numTwo);
// }
// else if (operation == "="){
//     console.log(numOne=numTwo);
// }

// //case 3 homework 1
// // Ask the user to input the values of Y and Z
// var Y = Number(prompt("Enter the value of Y:"));
// var Z = Number(prompt("Enter the value of Z:"));
// // Check if the inputs are valid numbers
// if (isNaN(Y) || isNaN(Z)) {
//   alert("Please enter valid numeric values for Y and Z.");
// } else {
//   // Calculate X using the equation
//   var X = (3 * Y - Z) / 2;
// console.log("The value of X is: " + X);
// }

// //case 3 homework 2
// //Create an algorithm that calculates the hypotenuse of a right triangle if the user enters the values ​​of sides a and b
// //ask the user to input values of a and b sides
// var sideA = Number(prompt("Enter the value of side A"));
// var sideB = Number(prompt("Enter the value of side B"));
// //check if the inputs are valid numbers
// if (isNaN(sideA) || isNaN(sideB)){
//     alert ("please enter valid numerical values for sideA and sideB");
// }else{
//     if (sideA || sideB <= 0){
//         alert ("sides must be greater than zero");
//     }else{
//         //calculate area using formula
//         var area = Math.sqrt(sideA **2 + sideB **2);
//         console.log(area);
//     }
// }

// // case 3 homework 3
// // create an algorithm that calculates triangle perimeter in case  if user inputs all sides values
// var sideA = Number(prompt("Enter the value of side A"));
// var sideB = Number(prompt("Enter the value of side B"));
// var sideC = Number(prompt("Enter the value of side C"));

// if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
//   alert("Please enter valid numerical values");
// } else if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
//   alert("Sides should be greater than zero");
// } else {
//   var p = sideA + sideB + sideC;
//   console.log("The perimeter is: " + p);
// }

// // case 3 homework 4
// //Create an algorithm that solves the following quadratic equation
// //2X^2 – 2X + 13 = 0; Calculate what the values ​​of X1 and X2 are and print them to the console
// var x1;
// var x2;
// var a = 2;
// var b = -2;
// var c = 13;
// var D = b**2 - 4 * a *c;
// // condition for real and different roots
// if (D > 0){
//     x1= (-b+Math.sqrt(D))/2*a;
//     x2=(-b-Math.sqrt(D))/2*a;
//     console.log(`The roots of quadratic equation are ${x1} and ${x2}`)
// }
// // condition for real and equal roots
// else if(D = 0){
//     x1=x2=-b/2*a;
//     console.log(`The roots of quadratic equation are ${x1} and ${x2}`)
// }
// // roots are not real we have imaginary roots here
// //formula: -b/2*a + i (-b+Math.sqrt(D))/2*a && -b/2*a - i (-b-Math.sqrt(D))/2*a
// else{
//     console.log('No real solutions');
//     var firstPart = (-b / (2 * a)).toFixed(2);
//     var secondPart = (Math.sqrt(-D) / (2 * a)).toFixed(2);

//     // result
//     console.log( `The imaginary roots of quadratic equation are ${firstPart} + ${secondPart}i and ${firstPart} - ${secondPart}i`)
// }


