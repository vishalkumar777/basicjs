//foreach
 
const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function (val){
// console.log(val)
// });

// coding.forEach( (val) => {
// console.log(val)
// } );

function printme(item){
    console.log(item)
}
// coding.forEach(printme)

coding.forEach( (item, index, arr)=>{  // value, index number , whole array
    // console.log(item, index, arr)
} )

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "php",
        languageFileName : "php"
    },
    {
        languageName : "css",
        languageFileName : "css"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
  
]

myCoding.forEach( (item)=>{
    // console.log(item)    // it will print objects
    console.log(item.languageName)
})