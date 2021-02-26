// factorial tutorial for loop iteration
function factorial(number){
    var factorial = 1;
    for(var i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var result = factorial(10);
console.log(result)

// factorial while loop iteration

function whilefactorial(n){
    var i = 1;
    var factorial = 1;
    while(i <= n){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
var result = whilefactorial(20);
console.log(factorial)

// factorial in recursive way

function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
}
var result = factorial(4);
console.log(result)