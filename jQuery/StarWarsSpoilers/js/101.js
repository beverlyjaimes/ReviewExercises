// Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.
let fruits = ['mango', 'banana', 'guava', 'kiwi', 'strawberry'];
fruits.push('tomato');
console.log(fruits);
fruits.reverse();
console.log(fruits);
fruits.sort().reverse();
console.log(fruits);

// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.

const isOdd = function(num) {
    if (num % 2 !== 0) {
        return true;
    }
};
console.log(isOdd(5));

// Write a function definition named shortestString that takes in an array of strings and returns the shortest string in the array.
let arr = ["kiwi", "mango", "strawberry"];
const shortestString = (arr) => {
    var shortest = arr.reduce((shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, arr[0]);
    return shortest;
}
console.log(shortestString(arr));
