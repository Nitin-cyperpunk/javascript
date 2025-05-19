
/*Date.now()
console.log(Date.now()) 
*/

let date = new Date()
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
console.log(typeof date); //// ask in interview the type of date is object....


//method 2

let createdDate = new Date(2025, 4, 13) // in js the month starts with 0 thats why for may its 4
let createdDate1 = new Date("2025-05-13") // in this format the month starts with 1
console.log(createdDate.toDateString());
console.log(createdDate1.toLocaleDateString());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
`The day is ${newDate.getDay() } and the time is ${newDate.getDate()}`
newDate.toLocaleString('default',{
    weekday:"long"
})