//array

const myArr = [0,1,2,3,4,5]
const myHero = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[2])

// array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(9)) // check 9 is available or not in array
// console.log(myArr.indexOf(3))  // give index number is available and give -1 if not available

const newArr = myArr.join() // change datatype array to string

// console.log(myArr)
// console.log(newArr)

// slice and splice

console.log("A ", myArr)

const myArrN = myArr.slice(1,3)
console.log(myArrN)
console.log("B ", myArr);

const myArrn2 = myArr.splice(1, 3) // remove orignal aray 1 to 3 index
console.log("C ",myArr)
console.log(myArr2)