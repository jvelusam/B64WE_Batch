/*
*1. How to compare the two JSON have the same properties without order?
let obj1 = {name:"Person",age:5}
let obj2 = {age:5,name:"Person 1"}
let xhr = new 
2. Use the rest countires API URL  and dispaly all the country
floags in the console.
3. Use the same rest countries and print all countries names and region , sub region and populations.
*
*
*
*
*/
// let xhr = new XMLHttpRequest;
// xhr.open("GET","https://restcountries.com/v3.1/all");
// xhr.send();
// xhr.onload = function()
// {
//     let array = JSON.parse(xhr.response);
//     let [obj1,obj2,obj3] = array;
//     console.log(`subregion :${obj1.latlng[0]}`);
//     console.log(`subregion :${obj2.subregion}`);
//     console.log(`subregion :${obj3.subregion}`);

//     array.forEach(function(region) 
//     {
//          console.log(region);
//     });
// }


let obj1 = {name:"Person",age:5}
let obj2 = {age:5,name:"Persons"}
let equal = true
Object.keys(obj1).map(value => 
{
if(obj1[value]!==obj2[value])
{
    equal=false;
}
});

console.log(equal);