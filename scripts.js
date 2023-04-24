/*
*1. Create the Your own Resume data in JSON Format
2. For the given JSON Iternate over all the loops (for,for-in,for-of,forEach)
3. Read about the difference between window Screen and documents in javascripts
4.CodeKata Pratice
*/
// For Loop 
const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");
for (let i = 0; i < words.length; i++) 
{
   // words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1); 
    console.log(words[i])
}

// words.join(" ");
// console.log(words)

// For Each Loop 

let numbers = [1,2,3,4]

numbers.forEach(function(number,index)
{
    console.log('Index: ' + index + ' Value: ' + number);
});

words.forEach(function(number,index)
{
    console.log('Index: ' + index + ' Value: ' + number.charAt(0).toUpperCase() +number.substring(1));
});
// For in Loop 
const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}

// using for...in
for ( let i in salaries) 
{
    // add a currency symbol
    let salary = "$" + salaries[i];
    // display the values
    console.log(`${i} : ${salary}`);
}

//// using for...of 


const arr = [ "Fred", "Tom", "Bob" ];

for (let i of arr)
 {
  console.log(i);
}
// Output:
// Fred
// Tom
// Bob
const m = new Map();
m.set(1, "black");
m.set(2, "red");

for (let n of m) 
{
  console.log(n);
}

// Output:
// [1, black]
// [2, red]

// Question 2 . Create the Your own Resume data in JSON Format
let  profiles = [
    {
      name: 'Jane Doe',
      favoritegame: 'Stardew Valley',
      subscriber: false
    },
    {
      name: 'John Doe',
      favoritegame: 'Dragon Quest XI',
      subscriber: true
    }
  ];