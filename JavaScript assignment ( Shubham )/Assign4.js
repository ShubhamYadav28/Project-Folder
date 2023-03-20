//Highest Marks
let marks = [10, 27, 35, 99, 76];
let highestMark = 0;

for (let i = 0; i < marks.length; i++) {
  highestMark = marks[i] > highestMark ? marks[i] : highestMark;
}

console.log(` highest marks scored by a student in a class of five students is ${highestMark}.`);



