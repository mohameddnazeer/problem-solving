function findAverage(array) {
    let average = 0;
    let sum= 0;
    if(array.length == 0){
        return average;
    }else{
        for(let i=0; i< array.length; i++){
            sum += array[i];
        }
        average= sum/array.length;
        return average;
    }
  }

  console.log(findAverage([1, 2, 3, 4, 5])); // 3
  console.log(findAverage([10, 20, 30])); // 20
  