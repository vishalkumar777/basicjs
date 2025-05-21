//objects  //forin

const myObject = {
    js : 'javascript',
    cpp  : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}
for (const key in myObject) {
    // console.log(key, 'full form is', myObject[key])
}

//array
const programming = ['js','rb','py','java','cpp','php']
for (const key in programming) {
    // console.log(programming[key])
}

//map  map will not work becouse of map is not itratebal
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United state of America')
map.set('Fr','France')
map.set('IN','India')

for (const key in map) {
    // console.log(key) // it will not work
}

