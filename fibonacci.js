// fibonacci serice in for loop
var fibo = [0, 1];
for(var i = 2; i <= 20; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    console.log(fibo[i]), fibo[i - 1], fibo[i - 2];
}

// fibonacci in recursive way

function fibonacci(n) {
    var fibo = [0, 1];
    for(var i = 2; i <= n; i++){
        fibo[i] = fibo[i - 1] + fibo[i -2];
    }
    return fibo;
}
var fibonacciIterative = fibonacci(100);
console.log(fibonacciIterative)

// other methods
function fibonacci(n) {
    if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }
    else{
        return fibonacci(n - 1) + fibonacci(n -2);
    }
}
var result = fibonacci(6);
console.log(result);

// fibonacci recursive

function fibonacciRecursive(n) {
    if (n == 0){
        return [0];
    }
    else if (n == 1){
        return [0, 1];
    }
    else{
        // find nth elements from array
        var fibo = fibonacciRecursive(n - 1);
        var nextFibo = fibo[n-1] + fibo[n-2];
        fibo.push(nextFibo);
        return fibo;
    }
}
var result = fibonacciRecursive(15)
console.log(result)