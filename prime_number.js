var primeNumber = 128;
for (var i = 2; i < primeNumber - 1; i++) {
    if(primeNumber % i == 0){
        console.log('Not a prime number')
        break;
    }
    else{
        console.log('This is a prime number')
        break;
    }
}

// other way round
function CheckPrime(n){
    for (i = 2; i < n; i++) {
        if (n % i == 0){
            console.log('This is not a prime number');
            break;
        }
        else{
            console.log('This is a prime number');
            break;
        }
    }
}
var checked = CheckPrime(20);
console.log(checked);