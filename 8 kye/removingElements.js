function removeEveryOther(arr){
    let j=1;
    for(let i=0; i<arr.length; i++){
        let str = arr[j];
        if(arr[i] === str){
            arr.splice(i, 1);
            j+=1;
        }
    }
    return arr;
  }

  console.log(removeEveryOther([1,2,3,4,5])); // [1,3,5]
console.log(removeEveryOther([1,2,3,4,5,6])); // [1,3,5]
  