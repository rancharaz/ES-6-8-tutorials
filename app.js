
/* const persoData = [124253]

export default persoData; */


/* OOP*/
/* export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = "Loud noise") {
        console.log(sound);
    }
    get metaData() {
        return `Type: ${this.type}, ${this.legs}`
    }
    static return10() {
        return 10
    }
}

export class Cat extends Animal {

    constructor(type, legs, tail) {
        super(type, legs);
        this.tail = tail
    }

    makeNoise(sound = "Meow") {
        console.log(sound)
    }
}
 */


/* async and await */

/* const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
 */
/* function getTitle() {

    fetch(apiUrl)
        .then((response) => response.json()
            .then((json) => {
                console.log(json[0])
            }).catch((err) => {
                console.error();
            })

        )


} */

/* async function getTitle() {

    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json[0])
}
getTitle();
 */

/* function resolveAfter3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved')
        }, 3000);
    })
}

async function getAsyncData() {
    const result = await resolveAfter3Seconds();
    console.log(result);
}
getAsyncData(); */


/* const exampleSet = new Set([1, 1, 2, 2, 3, 6, 4, 8, 9, 7]);
const anotherSet = new Set([...exampleSet]);
console.log(anotherSet); */