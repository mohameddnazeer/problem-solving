function reverse(string){
    let newStr = string.split(" ")
    let newArr = []

    for(let i=newStr.length-1; i>=0 ; i--){
        newArr.push(newStr[i])
    }

    return newArr.join(" ")
  }

console.log(reverse("Hello World")); // "World Hello"
console.log(reverse("I am a developer")); // "developer a am I"

  
  