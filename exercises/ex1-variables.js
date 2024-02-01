// * Module 2 Exercises

/**
 * Create a variable called firstName and another
 * variable called lastName. Then, use console.log() 
 * to output "Hi, my name is [firstName] [lastName]"
 */
function createVariables() {

    let firstName="Yaminah";
    let lastName="Alanis";
    // TODO Write your answer here
    console.log("Hi, my name is " + firstName  + " " + lastName);
}   
createVariables();

/**
 * Create a variable called num1 and assign it a 
 * value of 10. Then create a variable called num2 
 * and assign it a value of 5. Finally, use console.log() to
 * add their sum together
 */
function addVariables() {
    let num1=10;
    let num2=5;
    console.log(num1 + num2);
    // TODO Write your answer here
}
addVariables();


/**
 * Create a variable called x and give it a value of 10. The, reassign
 * x to a value of 5. Use console.log() to see which value the variable 
 * ends up with.
 */
function reassignVariable() {
    let x=10;
    x=5;
    console.log(x);
    // TODO Write your answer here
}
reassignVariable();


/**
 * Create a const variable called y and assign it a value of 15.
 * Then, reassign it a value 50. Use console.log() to print out
 * the value of y.
 * 
 *  What Happens? 
 */
function reassignConst() {
    const y=15;
    y=50;
    console.log(y);
    // TODO Write you answer here
}
reassignConst();

// Finished exercise 1. uncaught type error invalid assignmnet to const 'y'


