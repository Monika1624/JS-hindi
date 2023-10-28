const marvel_heros= ["thor", "Ironman", "Spiderman"]
const dc_heros= ["flash", "Shaktiman", "batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3][0]);

//concat operator
const allheros= marvel_heros.concat(dc_heros)
//console.log(allheros);

//spread operator
const all_new_heros= [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);

/*when u have array inside another array and u have to print in single output,
then u have to use flat(depth)*/
const another_array = [1, 2, 3, [4, 5, 6,] , 7, [6, 8, 9]]

const new_another_array = another_array.flat(1);
//console.log(new_another_array);

//console.log(Array.isArray("Monika"));//ask question => isArray
//console.log(Array.from("Monika")); //change array into string =>from

//console.log(Array.from({name: "Monika"}));//intersting

let score1= 100;
let score2= 200;
let score3= 300;
console.log(Array.of(score1, score2, score3)); 



