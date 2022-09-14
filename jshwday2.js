//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

let obj = JSON.parse(person3);

function printValues(obj) {
    for(let k in obj) {
        if(obj[k] instanceof Object) {
            printValues(obj[k]);
        } else {
            document.write(obj[k]);
        }
    }
};
printValues(obj);

document.write("<hr>");

document.write(obj[["pizza"]["tacos"]["burgers"]["ice_cream"]])
document.write(obj[["shakes"]["oberwise"]["dunkin"]["culvers"]["mcDonalds"]["cupids_candies"]])
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
// Create our Person Prototype
// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
let = person1 = "26"
let = person2 = "5"

let obj = var_get(person1, person2);

function printInfo(obj) {
    for(let age in obj) {
        if(obj[age] < person1,person2) {
            printInfo(obj[age]);
        }   else {
            print("Wow your old.")
        }
        if(obj[age] > person1,person2) {
            print("Your really young.")
        }
    }
}


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/



let len = Words.length

const myPromise = new Promise(function(resolve, reject) {
    let Words = "aberdshuikaserdes";
    if (Words.length > 10) {
        resolve(words);
    } else {
        reject(words);
    }
});

myPromise.then(
    function (value) {
        console.log("big word")
    },
    function (error) {
        console.log("small number")
    }
)
return new Promise((resolve, reject) => {
    if(somethingSuccesfulHappend) {
       resolve()
    } else {
       reject();
    }
 });