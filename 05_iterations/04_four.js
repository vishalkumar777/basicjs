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
    console.log(programming[key])
}