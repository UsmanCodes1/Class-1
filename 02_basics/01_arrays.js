// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr2.push(9)
// myArr.push(7) Add 7 in array
// myArr2.pop()  Delete last number

// myArr.unshift(9) Add 9 in starting
// myArr.shift()  Remove starting first number
// console.log(myArr)
// console.log(myArr.includes(5)); Give the answer that the 5 is in the array or not. Give the answer in True or False.
// console.log(myArr.indexOf(3)); If 3 is in the Array give answer 3 and not give answer -1

// const newArr = myArr.join() Convert in to string and alo binding in group.

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);