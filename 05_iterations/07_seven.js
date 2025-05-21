//filter more operation
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num)=> num +10 ) //myNumbers.map((num)=>{return num+10}) also work

// chaing
const newNums = myNumbers
                .map((num)=>num*10)
                .map((num)=> num+1)
                .filter((num)=> num >=40) // filter matlab jo true hoga wahi pass hoga
console.log(newNums)