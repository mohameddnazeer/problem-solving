function countPositivesSumNegatives(input) {  
    if (!Array.isArray(input) || input.length === 0) {
       return [];
     }
    
     let result =[]
     let postiveNumber =0;
     let negativeNumber =0;
      for( let i=0; i< input.length; i++){
       if(input[i] >0){
          postiveNumber ++;
       } else if(input[i] < 0){
          negativeNumber += input[i];
       }else if(input[i] == 0){
          continue;
       }
     }
     result.push(postiveNumber);
     result.push(negativeNumber);
     return result;
     
    }