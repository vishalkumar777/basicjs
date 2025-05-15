const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // this not best practice

const newheros=marvel_heros.concat(dc_heros);
// console.log(newheros) // this will print ["thor", "ironman", "spiderman", "superman", "flash", "batman"]

const all_new_heros = [...marvel_heros,...dc_heros] // spread arrays
// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) // we can set depth 1 or 2 nested
// console.log(real_another_array)

// console.log(Array.isArray("Hitesh")) // give false
// console.log(Array.from("Hitesh")) //[H,i,t,e,s,h]
// console.log(Array.from({name: "Hitesh"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // convert single value to array

