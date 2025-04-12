function firstNonConsecutive(arr) {
    let firstNonConsecutiveNumber = null;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            firstNonConsecutiveNumber = arr[i];
            break;
        }
    }
    return firstNonConsecutiveNumber;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7])); // 6
console.log(firstNonConsecutive([1, 2, 3, 4, 5]));    // null
