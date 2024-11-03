
const originalArray = [9, 9, 7, 5, 9, 1, 8, 4, 3, 0];


function reverseArray(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}


const reversedArray = reverseArray(originalArray);


console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);
