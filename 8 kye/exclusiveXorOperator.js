function xor(a, b) {
    return (a || b) && !(a && b);
  }
  

  console.log(xor(true, false)); // true
  console.log(xor(false, true)); // true
    console.log(xor(false, false)); // false
  