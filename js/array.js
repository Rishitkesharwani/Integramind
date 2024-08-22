const emoji = ["😂", "❤️", "😊", "😀", "😓"];

const array = ["Apple", "Mango", "Banana", "Pear"];
console.log(array);

for (let i = 0; i < array.length - 1; i++) {
  console.log("Index", i, "value:", array[i]);
}

const newArray = array.map((array, index) => {
  return `${index + 1}.$(array)`;
});
console.log(newArray);

//Method 3: using Filter

//Even Number

const number = [1, 2, 3, 4, 5, 6, 7];
const evenNumber = number.filter((number) => number % 2 === 2);
console.log(evenNumber);

// console.log(number.find(3));

const arr = [1, 23, 4, 5];

console.log(arr.pop(5));

//Fill
console.log(arr.fill("2777", 1));
console.log(arr);

//find ,40
const values = [10, 20, 30, 40];
const found = values.find((element) => element == 30);
console.log(found);

//IndexOf
let index = values.indexOf(45);
console.log(index);

const animalPairs = [
  ["doe", "buck"],
  ["eve", "ram"],
  ["peahen", "peacock"],
  ["cow", "bull"],
];

console.log(animalPairs[1][1]);

let c = 5;
if (c == 5) {
  console.log("true");
} else console.log("false");
