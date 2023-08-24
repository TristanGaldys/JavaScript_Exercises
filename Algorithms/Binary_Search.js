/*
This Scripts goal is to solve the problem
Create a function that takes a sorted array and a target value.
Return the index of the target value in the array.
If no target in the array return -1
*/

const arr = Array(10).fill(0).map((_, i) => i+1);

export function search(arr, target, start = 0, end = arr.length-1){
    if (start > end) return -1;

    const middle = Math.floor((start+end)/2);

    if (arr[middle] === target) return middle;
    if (arr[middle] < target) return search(arr, target, middle+1, end)
    if (arr[middle] > target) return search(arr, target, start, middle-1)

}


console.log(search(arr, 1))