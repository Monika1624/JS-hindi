const name= "Monika"

const age= 26
/*
  we can use modern type of syntax here, we used backtick and ${}=> STRING INTER-POLLUTION
*/
console.log(`My name is ${name} and my age is ${age}`);

const gameName= new String('TempleRun') 

//we can directly access by using key-pair
console.log(gameName[0]);
/* we can also knw about the prototype
   so, here there is a syntax
*/
console.log(gameName.__proto__);

// we use some methods directly
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.slice(0,7));
console.log(gameName.charAt(8));
console.log(gameName.indexOf('R'));
console.log(gameName.substring(0,4));
//we can also use url in string
const url= "https://tinyurl.com/1234fgr"
console.log(url.replace('1234', '1624'));

/*include()=>ask some question and 
it return boolean value*/
console.log(url.includes('small'));

/*convert string into array by 
using split() => separator and limit*/
const car= new String('BMW-Baleno-Audi');
console.log(car.split('-'));

const str= "Hi i am pratice string in github"
const word= str.split(' ');
console.log(word[4]);

const chars= str.split('');
console.log(chars[6]);