function handlesubmit()
{
    let formValues =
    {
        fname:'',
        laname:'',
        gender:'',
        food:'',
    }

let fristname = document.getElementById('fname').value
console.log(fristname);
let lastname = document.getElementById('lname').value
console.log(lastname);
let Addresse = document.getElementById('addresse').value
console.log(Addresse);
let Zip = document.getElementById('zip').value
console.log(Zip);
let genders = document.querySelector('input[name="gender"]:checked').id
console.log(genders)
}
