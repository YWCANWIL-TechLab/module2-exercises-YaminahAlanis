// * Assignment Operators

/**
 * Given the variables first and second, increase the value of first by the 
 * value of second using +=, then print out the value of first using 
 * console.log().
 */
function plusEquals() {
    let first = 20;
    let second = 30;
    first+=second;
    console.log(first);
    // TODO Write your answers here
}
plusEquals();
/**
 * Given variables num1 and num2, decrease the value of num1 by the value of 
 * num2 using -= , then print out the value of num1 using console.log().
 */
function minusEquals() {
    let num1 = 100;
    let num2 = 99;
    num1-=num2;
    console.log(num1);
    // TODO Write your answers here
}
minusEquals();

/**
 * Given variables var1 and var2, multiply the value of var1 by the value of 
 * var2 using *=, then print out the value of var1 using console.log().
 */
function timesEquals() {
    let var1 = 5;
    let var2 = 10;
    var1*=var2;
    console.log(var1);
    // TODO Write your answer here
}
timesEquals();

/**
 * Given variables x and y, divide x by the value of y using /=, then print out 
 * the value of x using console.log().
 */
function dividedEquals() {
    let x = 1000;
    let y = 20;
    x/=y;
    console.log(x);
    // TODO Write your answer here
}
dividedEquals();
/**
 * Given variables a and b, modulus divide a by the value of b using %=, then 
 * print out the value of a using console.log().
 */
function modEquals() {
    let a = 10;
    let b = 2;
    a%=b;
    console.log(a);
    // TODO Write your answer here
}
modEquals();

/**
 * Given variables base and exponent, take the base to the power of the exponent
 * using **=, then print out the value of base using console.log().
 */
function exponentEquals() {
    let base = 5;
    let exponent = 5;
    base**=exponent;
    console.log(base);
    // TODO Write your answer here
}
exponentEquals();

// * String Operators

/**
 * Given the variables string1 and string2, concatenate string2 to the end of
 * string1, then print out the value of string1 using console.log().
 */
function concatenateTwoString() {
    let string1 = "Hello";
    let string2 = "World";
    string1+=string2;
    console.log(string1);
    // TODO Write your answer here
}
concatenateTwoString();
/**
 * Given string3 and number1, concatenate number1 to the end of string3, then 
 * print out the value of string3 using console.log().
 */
function concatenateStringAndNumber() {
    let string3 = "What happens if a add a number to a string? "
    let number1 = 1;
    string3+=number1;
    console.log(string3);
    // TODO Write your answer here
}
concatenateStringAndNumber();
/**
 * Given the variables string4 and string5, reassign string4 to the value of 
 * string5. Then reassign string 5 to "Hmm, what will happen to the value of 
 * string4?". Finally, use console.log() to print out the value of both 
 * variables.
 * 
 * ? What do the variables end up as ?
 */
function reassign() {
    let string4 = "What's going to happen";
    let string5 = "howdy";
    string4=string5;
    string5="Hmm, what will happen to the value of string4?"
    console.log(string4);
    console.log(string5);
    // TODO Write your answer here
}
reassign();

//Finished exercise 3