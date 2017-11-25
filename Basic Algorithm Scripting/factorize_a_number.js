/*
    Factorize a Number - Basic Algorithm Scripting(Free Code Camp)
    --Sunny--
*/
function factorizeANumber(number){
    var intValue = parseInt(number);

    if (intValue > 0 || intValue == 1) {

        for (var i = intValue - 1 ; i >= 1; i--){
            intValue *= i;
        }
        console.log(intValue);
    } 
    else {
        console.log(1);
    }
}

factorizeANumber(1);
factorizeANumber(0);