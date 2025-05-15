const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // this not best practice

const newheros=marvel_heros.concat(dc_heros);
console.log(newheros) // this will print ["thor", "ironman", "spiderman", "superman", "flash", "batman"]