const log = function(a, b, ...rest){
    console.log(a,b, ...rest)
}

log('basic', 'rest', 'asdsad1111111', 'rasdasd', "boom");

function calcOrDOuble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDOuble(3,5);