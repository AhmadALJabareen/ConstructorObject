// Q1: Using the variable personsCreate a function called firstName that accept an object
// and return all the first name of the person insides.

// Solution 1
// function firstName(a){
//     let arr = [];
//     for (let i in a) {
//         arr.push(a[i].firstName);
//     }
//     return arr;
// }
// let persons = {
//     person1:{firstName:"Ahmad",lastName:"Hasan",age:15},
//     person2:{firstName:"Ali",lastName:"noor",age:25},
//     person3:{firstName:"goal",lastName:"kamel",age:25},
// }
// console.log(firstName(persons));

// Solution 2

// function firstName(a){
    
//         let names = [];
//         for (let i = 0; i < Object.keys(a).length; i++) {
//             let index = Object.keys(a);
//             names.push(a[index[i]].firstName);
//         }
//         return names;
    
    
//     console.log(firstName(persons));
// }
// let persons = {
//     person1:{firstName:"Ahmad",lastName:"Hasan",age:15},
//     person2:{firstName:"Ali",lastName:"noor",age:25},
//     person3:{firstName:"goal",lastName:"kamel",age:25},
// }
// console.log(firstName(persons));



// ................................****................................

// Q2:Create a function called objectToArray that accept an object and return an array of
// the keys and values in this object


function objectToArray(input){
    let key = Object.keys(input);
    let value = Object.values(input);
    let arrayData = []
    for(i=0;i<key.length;i++){
        arrayData.push(key[i]);
        arrayData.push(value[i]);
    }
    return arrayData;
}

let data ={
    firstName:"Ahmad",
    lastName:"hasan",
    age:24,
    gender:"male"
}

console.log(objectToArray(data));



// ................................****................................

//Q3:

function Car(b,m,y){
    this.brand = b;
    this.model = m;
    this.year = y;
    this.getDetails =function(){
        return `Brand:${this.brand} Model:${this.model} Year:${this.year}`
    }
}

let car1 = new Car('Toyota','Corolla',2020);
let car2 = new Car('Tesla','Model 3',2022);
let car3 = new Car('Ford','Mustang',2019);

let arrayCar = [];
arrayCar.push(car1,car2,car3);
for(i=0;i<arrayCar.length;i++){
    console.log(arrayCar[i].getDetails());
}