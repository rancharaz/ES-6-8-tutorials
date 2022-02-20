/* function myFunction() {

    let x = document.querySelector(".example")

    let name = "David";
    let surname = "Beckham";
    let age = 30;
    let newAge = 10;
    const fullName = `The name of the person is ${name} ${surname} The age of the person is ${age + newAge}`;

    x.innerHTML = fullName;
}
myFunction()
 */
/* 
function myFunction() {

    const personalInfo = {
        firstname: "john",
        surname: "Doe",
        city: "London",
        zipCode: 56859
    };

    const { firstname: fN, surname: sN } = personalInfo;
    console.log(`${fN} ${sN}`)
}

myFunction() */


/* function myFunction() {

    let [firstName, lastName, where] = ['Ranveer', 'Ancharaz', 'here'];
    console.log(`${firstName} ${lastName} ${where}`)
}
myFunction() */


/* function addressMake(city, state) {

    const newAdd = { city, state };
    console.log(newAdd)
}
addressMake('QB', 'PL')
 */

/* 
function addressMaker(address) {

    const newAddress = {
        city: address.city,
        state: address.state,
        country: 'Mauritius'
    }
}

addressMaker({ city: 'Austin', state: 'Texas' }) */

/* function addressMaker(address) {
    const { city, state, country } = address;
    const newAddress = {
        city,
        state,
        country
    }
    console.log(`${city} ${state} ${country}`)
}

addressMaker({ city: 'Austin', state: 'Texas', country: 'Mauritius' }) */



/* function myFunction() {

    let incomes = [64565, 96964, 22556];
    let sum = 0;
    for (let income of incomes) {
        sum += income;
    }
    console.log(sum);
}
myFunction();
 */


/* spread operator */

/* let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];
example2.push(true)
console.log(example2) */

/* rest operator */

/* function add(...nums) {
    console.log(nums)
}
add(4, 2, 6, 9, 8, 6)
 */


/*     Arrow functions */


/* function add(...nums) {
    let total = nums.reduce((num, total) => num + total, 0);
    console.log(total)
}
add(4, 2, 6, 9, 8, 6)
 */



/* default params */

/* function add(numArray = []) {
    let total = 0;
    numArray.forEach(() => {
        total += element
    })
    console.log(total)
}
add(); */
/* function myFunction() {
    let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(numArray.includes(4))
}
myFunction() */

/* const / lets */

/* const example = 5;
example = 10 */
/* 
let age = 21;
age = 40

console.log(age)
 */



/* import persoData from './app.js'
console.log(persoData) */


/* let example = 'david';

console.log(example.padStart(10, 'dasd'))
console.log(example.padEnd(10, 'a')) */



/* oop */

import { Animal, Cat } from "./app.js";


let cat = new Cat("lynx", 5);

console.log(cat.metaData)

cat.makeNoise()


/* cat.legs = 6
cat.makeNoise()

console.log(cat.legs) */

/* console.log(Animal.return10()) */





















































































































































































