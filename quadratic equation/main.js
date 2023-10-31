

// case 3 homework 4
//Create an algorithm that solves the following quadratic equation
//2X^2 – 2X + 13 = 0; Calculate what the values ​​of X1 and X2 are and print them to the console
var x1;
var x2;
var a = 2;
var b = -2;
var c = 13;
var D = b**2 - 4 * a *c;
// condition for real and different roots
if (D > 0){
    x1= (-b+Math.sqrt(D))/2*a;
    x2=(-b-Math.sqrt(D))/2*a;
    console.log(`The roots of quadratic equation are ${x1} and ${x2}`)
}
// condition for real and equal roots
else if(D = 0){
    x1=x2=-b/2*a;
    console.log(`The roots of quadratic equation are ${x1} and ${x2}`)
}
// roots are not real we have imaginary roots here
//formula: -b/2*a + i (-b+Math.sqrt(D))/2*a && -b/2*a - i (-b-Math.sqrt(D))/2*a
else{
    console.log('No real solutions');
    var firstPart = (-b / (2 * a)).toFixed(2);
    var secondPart = (Math.sqrt(-D) / (2 * a)).toFixed(2);

    // result
    console.log( `The imaginary roots of quadratic equation are ${firstPart} + ${secondPart}i and ${firstPart} - ${secondPart}i`)
}


