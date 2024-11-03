const ages = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 64, 68,];
const numberOfPeople = ages.length;

for(let i = 0; i < numberOfPeople; i++) {
    if (ages[i] % 2 == 0){
        console.log(ages[i]);
    }
}