/*
1.Do the below programs in anonymous function & IIFE
2.Print odd numbers in an array
3.Convert all the strings to title caps in a string array
4.Sum of all numbers in an array
5.Return all the prime numbers in an array
6.Return all the palindromes in an array
7.Return median of two sorted arrays of the same size.
8.Remove duplicates from an array
9.Rotate an array by k times
*/

//1.Do the below programs in anonymous function & IIFE


(function()
{
   console.log("Data")
 const num = 4;

 //check if the number is even using if else statement
if(num % 2 == 0) 
{
    console.log("The number is even.");
} else
{
    console.log("The number is add.");

}

// ternary operator
const results = (num % 2==0) ? "even":"add";

console.log(results);

})();