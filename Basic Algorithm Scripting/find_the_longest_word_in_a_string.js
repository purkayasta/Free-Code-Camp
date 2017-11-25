/*
    Find Longest Word in a sentence - Basic Algorithm Scripting(Free Code Camp)
    --Sunny--
*/

/*
To find the longest string into a sentence , have to split the sentence in to arrays.
then compare each one to other one ! 
*/

function longestWord(str){
    //console.log(str.length);
    var lWord = 0;
    var test = str.split(' ');
    //console.log(test.length);
    for(var i = 0; i < test.length; i++) {
        if (test[i].length > lWord) {
            lWord = test[i].length;
        }
    }
    console.log(lWord);
}

var word = "Hello World, This is a classic hundred millon dollar car!";
longestWord(word);