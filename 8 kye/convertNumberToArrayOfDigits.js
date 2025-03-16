function digitize(n){
    let result = n.toString().split('')

    for(let i=0; i< result.length; i++){
        result[i] = parseInt(result[i]);
    }

    return result.reverse();
}

console.log(digitize(1234)); // [1,2,3,4]