const fruit = ["Apple", " Mango", "Orange"]
//fruit = ["Banana", "Mango","Orange" ] error

fruit[0] = "Pear";
//console.log(fruit);

const vege =[]
vege.push("onion")
//console.log(vege);
//fruit.pop()
//console.log(fruit);

fruit.splice(1, 1);
//console.log(fruit);

const myn= [1, 2, 3, 4, 5]
myn.splice(2, 2);
//console.log(myn);


//Block scoped

const movie = ["DDLJ", "KKKG", "KGF"]
{
    const movie2= movie.slice(0,3)
    //const movie = ["Krish3", "KKKG"]
    movie2.push("karanLovesMonika")
    console.log(movie2);
}
//movie.push("karanLovesMonika")
console.log(movie);


