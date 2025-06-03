const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter)

// console.log(Math.PI)
// Math.PI=5  //it wil be not overrite
// console.log(Math.PI)

const chai = {
    name : 'ginger chai',
    price : 250,
    isAvailable : true,

    orderChai : function(){
        console.log("chai nhi bni")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name")) // check property itrateble or not, or value changeble or not

Object.defineProperty(chai,'name',{
    // writable : false 
     enumerable : false // it will not iterate name property, if use true then iterateble default property
})

for (let [key,value] of Object.entries(chai)) {
    if(typeof value!=='function'){
        console.log(`${key} : ${value}`)
    }
}


