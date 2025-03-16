// function repeatStr (n, s) {
//     let newStr = s.repeat(n);
//     return newStr;
//   }

//     console.log(repeatStr(3, "Hello")); // "HelloHelloHello"



function repeatStr(n,s){
    let result ='';
    for(let i =0; i<n ; i++){
        result += s;
    }
    return result;
}
console.log(repeatStr(3, "Hello"));