/*
This Scripts goal is to solve the problem
Create a function that takes in ana array of numbers and returns a number that is the sum of all the values in the array
*/

const arr = Array(10).fill(0).map((_, i) => i+1);

//One Solution
export function sum(arr){
    let total = 0;
    for(let x of arr){
        total += x
    }
    return total
}

//Another
const summation = arr.reduce((acc, cur) => acc + cur, 0)

