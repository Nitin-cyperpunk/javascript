const ages = [1, 5, 22, 2, 62, 44, 86, 23, 32, 36, 98, 40, 88];
const evenAges = [];

for (let i = 0; i < ages.length; i++) {
    if (ages[i] % 2 === 0) {
        evenAges.push(ages[i]);
    }
}

console.log(evenAges);
