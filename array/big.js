const numbers = [1, 2, 5, 9, 16, 58, 36, 89, 46, 75, 102, 99, 856, 623, 999];
let maxNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}

console.log("The biggest number is:", maxNumber);
