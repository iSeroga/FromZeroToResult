function factorial(n) {
if (typeof(n) !== 'number'|| !Number.isInteger(n)){
    return " Repeat your data";
} 

if (n >= 1 ) {
    return n * factorial (n - 1);
} else {
    return 1;
}
//or another 
return n ? n * factorial(n - 1) : 1;

}


console.log(factorial(100));


