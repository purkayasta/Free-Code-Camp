/*
    Title case in a sentence - Basic Algorithm Scripting(Free Code Camp)
    --Sunny--
*/

function titleCase(str) {
    // Divide them by Split
    let splitStr = str.split(' ');
    //console.log(splitStr);
    // then uppercase the first word of each array and plus them with rest of the array in lowercase!
    for (let index = 0; index < splitStr.length; index++) {
        splitStr[index] = splitStr[index].charAt(0).toUpperCase() + splitStr[index].substring(1).toLowerCase();
    }
    splitStr = splitStr.join(' ');
    console.log(splitStr);
    

}

let testWords = "t-seris is awesome!";
titleCase(testWords);