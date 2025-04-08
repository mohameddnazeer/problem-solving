function createArray(number) {
    const newArray = [];
    for (let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }
    return newArray;
}

console.log(createArray(5)); // [1, 2, 3, 4, 5]
console.log(createArray(3)); // [1, 2, 3]
