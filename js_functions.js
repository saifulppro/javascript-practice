// basic function
function sayLoveYou(){
    console.log('Jan o baby');
    console.log('Sonar Moyna Pakhi');
    console.log('Tumi amar Jan');
}
sayLoveYou();

var date = 14;
var place = "Resturent";
sayLoveYou();
var hangoutPlace = "TSC";
sayLoveYou();

// input number get double output function

function doubleIt(num){
    var result = num * 2;
    console.log(result);
}
doubleIt(5);

function doubleIt(num){
    var result = num * 3;
    return result;
}
var first = doubleIt(55);
var second = doubleIt(15);
console.log(first)