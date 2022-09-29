function deepCount(a){
    if(Array.isArray(a)){
        let totalCount = 0;

        totalCount += a.length;
        a.forEach( item => {
            totalCount += deepCount(item);
        })
        return totalCount;
    }else {
        return false;
    }

}
console.log(deepCount([[[[[[[[[]]]]]]]]]));