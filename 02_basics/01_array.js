//array

const MyArr= [1,2,3,4,5,6]
//console.log(MyArr[3]);// using index

const Hero= ["Tom", "Jerry", "Osworld"]

const MyArr2= new Array(100, 99, 98, 97)
//console.log(MyArr2[1]);

//Array Method

//MyArr.push(7)
//MyArr.push(8)
//MyArr.pop()

//MyArr.unshift(100)
//MyArr.shift()

/*console.log(MyArr.includes(8));
console.log(MyArr.indexOf(8));

const newArr= MyArr.join()
console.log(MyArr);
console.log(newArr);
console.log(typeof newArr);*/

// slice, splice
console.log("A ", MyArr)

const myn1= MyArr.slice(1,3);
console.log(myn1);

console.log("B ", MyArr)

console.log("C ", MyArr)
const myn2= MyArr.splice(1,3);
console.log(myn2);