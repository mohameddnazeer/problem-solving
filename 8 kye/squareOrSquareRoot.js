function squareOrSquareRoot(array) {
    let result =[];
    for(let i=0; i<array.length; i++){
        if(Number.isInteger(Math.sqrt(array[i]))){
            array[i]= Math.sqrt(array[i]);
            result.push(array[i]);
        }else{
            array[i]= array[i] * array[i];
            result.push(array[i]);
        }
    }
    return result;
  }
  console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
  