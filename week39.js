/*
    Hi.
    The purpose is to practice a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    In this problem set, we focus specifically on lists, loops (for), and functions.
    I.e. use litst and loops, dont use "fancy" alternatives.

    DO NOT change the code provided unless the task specifically says you should.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print out all the names in the list, one name per line.
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}


/* -----------------------------------------------------------------------------
    Task: A
    You are given a list (Array) named "tall."
    Write the code that will ensure the variable "sum" contains the sum of all the numbers in the list (i.e., tal1 + tal2 + tal3 + tal4 + ... and so on).
*/
console.log("Task: A");

const tall = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < tall.length; i++){
    sum += tall[i];
}

console.log("Sum of all numbers in the array: ", sum);
/* -----------------------------------------------------------------------------
    Task: B
    Below is a function "summer," which is incomplete; it should return the sum of the numbers it receives in a list.
    Your task is to complete the function so that it does that.
*/
console.log("Task: B");

function summer(liste) {

    /* What should go here?? */
    let total = 0;
for (let i = 0; i < liste.length; i++){
    total += liste[i];
}
return total;
}

const sumResults = summer(tall);

if (sum === 15) {
    console.log("🎉 Task B is most likely correct");
} else {
    console.log("😱 Task B has some issues, but you can fix it 👍");
}


/* -----------------------------------------------------------------------------
    Task: C
    You are given a list (Array) named "andreTall."
    Write the code that will ensure the variable "differans" contains the difference of all the numbers in the list (i.e., tal1 - tal2 - tal3 - tal4 - ... and so on).
*/
console.log("Task: C");

const andreTall = [6, 7, 8, 9]

let differans = andreTall[0];
for (let i = 1; i < andreTall.length; i++){
    differans -= andreTall[i];
}

console.log("Difference of all numbers in the array", differans);
/* -----------------------------------------------------------------------------
    Task: D
    Below is a function "differansier," which is incomplete; it should return the difference of the numbers it receives in a list.
    Your task is to complete the function so that it does that.
*/
console.log("Task: D");

function differansier(liste) {

    /* What should go here?? */
    let diff = 0;
    for (let i = 1; i < liste.length; i++){
        diff -= liste[i];
    }
    return diff;
}

const diff = differansier(andreTall);

if (diff === -18) {
    console.log("🎉 Task D is most likely correct");
} else {
    console.log("😱 Task D has some issues, but you can fix it 👍");
}


/* -----------------------------------------------------------------------------
    Task: E
    Create a function named "multipliser." This function should take (as a parameter) a list of numbers.
    The function should return the product of the numbers (i.e., tal1 * tal2 * tal3 * ... and so on).
*/

console.log("Task E");

function multipliser(liste){
    let product = 1;
    for (let i =  0; i < liste.length; i++) {
        product *= liste[i];
    }
    return product;
}

const tallForMultiplication = [1, 8, 9];
const productResults = multipliser(tallForMultiplication);
console.log("Product of the numbers in the list: ", productResults);
