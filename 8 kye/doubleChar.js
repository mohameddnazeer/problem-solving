function doubleChar(str) {
    return str.split('').map(char => char.repeat(2)).join('')
  }
console.log(doubleChar("String"));
