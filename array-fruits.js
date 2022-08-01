var fruits = ['Apple', 'Banana', 'Orange'];
var index = fruits.indexOf('Banana');
console.log(index);
console.log("index of 1 is = " + fruits[1]);
// replace 'Banana' with 'Mango'
fruits[1] = 'Mango';
console.log(fruits);
// Remove 'Orange'
fruits.pop();
console.log(fruits);
// add 'Watermelon'
fruits.push('Watermelon');
console.log(fruits);