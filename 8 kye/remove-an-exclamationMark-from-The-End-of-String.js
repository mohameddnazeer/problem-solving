function remove (string) {
    let newStr = string.lastIndexOf('!') === string.length - 1 ? string.slice(0, -1) : string;
    return newStr;
  }

  console.log(remove("Hi!")); // "Hi"
  console.log(remove("Hi!!!")); // "Hi!!"
  