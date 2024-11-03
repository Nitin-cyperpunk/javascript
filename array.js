/// write a program that return all the even number from an array

const ages = [1, 5, 22, 2, 62, 44, 86, 23, 32, 36, 98, 40, 88];
const evenAges = ages.lenght;

for (let i = 0; i < evenAges; i++) {
    if (ages[i] % 2 == 0) {
        console.log(ages[i]);
    }
} 