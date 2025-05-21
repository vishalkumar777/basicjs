// Array specific loop

//for of

// ["","",""]    // string in array
// [{},{},{}]      // objects in array

const arr  = [1,2,3,4,5]

// for (const num of arr) {    //for of loop
//     console.log(num);
// }

// const greetings = "hello World"  // we can alos do this in object also
// for (const greet of greetings) {
//     console.log(greet);
// }

// Maps //maps is not iterable

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United state of America')
map.set('Fr','France')
map.set('IN','India')

// console.log(map) // duplicate value will not print

// for (const key of map) {    //print all  the value in arary
//         console.log(key)
// }

for (const [key, value] of map) {
        console.log(key, ':-', value)
}

const myObject = {
    game1 : 'nfs',
    game2 : 'spiderman'
}
// for (const [key,value] of myObject) {   //give error we can't go with for of loop if we have object
//     console.log(key, ':-', value)    
// }