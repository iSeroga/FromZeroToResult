 
 const arr =['alex' , 'anna' , 'oleg' , 'alex' ,];
 
 const set = new Set(arr);

// //  set.add('ivan');
// //  set.add('oleg');

//  console.log(set);

 function unique(arr){ // Часто використвоується
    // return new Set(arr);
    return Array.from(new Set(arr)); // Створюємо масив з набору данних, позбавляємось від дублів, ФОрмуємо в тому самому масиві вже без дубляжів.
 }

 console.log(unique(arr));

//  set.delete(value);
//  set.has(value);
//  set.clear();
//  set.size;

// for (let value of set ) {console.log( value)};

// set.forEach((value, valueAgaing, set) => {console.log(value, valueAgaing);})

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());
