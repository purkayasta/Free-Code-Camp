/*
    Checking For Palindrome - Basic Algorithm Scripting(Free Code Camp)
    --Sunny--
*/
/**
 * 
 * For Removing all non-alphanumeric character using 
 * regular expression that also remove underscore from
 * the string !
 * 
 * input.replace(/[^0-9a-z]/gi, '')
 */


function palindromeChecker(requiredText){

    var incomingText = requiredText.replace(/[^0-9a-z]/gi, '').toLowerCase();


    var reversedText = incomingText.split('').reverse().join('');
    

    if (reversedText === incomingText){
        console.log(true);
    }
    else {
        console.log(false);
    }
};

var words = '2_A3*3#A2';
palindromeChecker(words);