function monkeyCount(n) {
  let monkeys = [];
  for (let i = 0; i < n; i++) {
    monkeys.push(i + 1);
  }
  return monkeys;
}

console.log(monkeyCount(5)); // [1, 2, 3, 4, 5]
console.log(monkeyCount(3)); // [1, 2, 3]
console.log(monkeyCount(0)); // []