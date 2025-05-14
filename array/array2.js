const marvel_verse = ["Iron Man", "Thor", "Hulk", "Black Widow", "Captain America"];
const dc_verse = ["Batman", "Superman", "Wonder"];

//marvel_verse.push(dc_verse);
//console.log(marvel_verse);
 //   console.log(marvel_verse.length);
  //  console.log(marvel_verse[5][0])

 // const all_heroes = marvel_verse.concat(dc_verse);
  //  console.log(all_heroes);

//const all_heroes2 = [...marvel_verse, ...dc_verse];
// console.log(all_heroes2);

const new_array = [1, 2, 3, [4,5, 6], 7, [7, 8, 9]];
console.log(new_array.flat());

console.log(Array.isArray("Nitin"))
console.log(Array.from("Nitin"))

let result1 = "6.83cgpa"
let result2 = "6.72cgpa"
let result3 = "7.15cgpa"
console.log(Array.of(result1, result2, result3))