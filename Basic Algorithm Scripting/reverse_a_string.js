/*
    Reverse a sting - Basic Algorithm Scripting(Free Code Camp)
    --Sunny--
*/

/*
    Important Topics:
    1. Split
    2. Array Reverse
    3. Array Join
*/

// Example of these 
// 1. Split

var test = "Hello World";
var space = " ";

function splitString(requiredString, requiredSeparator){
    console.log('The Default String is ' +requiredString);
    var arrayOfStrings = requiredString.split(requiredSeparator);
    console.log('Applied the space ' +arrayOfStrings);
};

splitString(test, space);

// 2. Array Reverse

var exampleArray = ['Test', 'Okay', 1, 2, 3, 6];
var printedReverse = exampleArray.reverse();
console.log(printedReverse);

// 3. Array Join

var exampleTest = ['I win , I win', 'Yaho, I switched', 'Thats a test only'];
var printedJoining = exampleTest.join(' + ');
console.log(printedJoining);

/**
 * Main Problem -> Reverse any String
 */

function reverseString(requiredTest){
    console.log(requiredTest);
    var printedReverseString = requiredTest.split('').reverse().join('');
    console.log(printedReverseString);
};

var exampleString = "Hello World, This is sunny!";
reverseString(exampleString); 