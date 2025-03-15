function sumArray(array){
    let sum = 0;
    if(array === null  ){
        return 0;
    }else{
        let newArray = array.sort((a,b)=>a - b)
        console.log(newArray);
        for(let i=1 ; i<newArray.length-1 ; i++){
            sum += newArray[i];
        }
        return sum;
    }
}
console.log(sumArray([6, 2, 1, 8, 10]) );
