function countSheeps(sheep) {
    let sum =0;
    for( let i =0; i< sheep.length; i++){
        if(sheep[i] === true){
            sum +=1;
        }
    }
    return sum;
}

