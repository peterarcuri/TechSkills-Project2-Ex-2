
// ---------------------------------------------------------------------------
// // QUESTION 1(potential variables needed for Julius Caesar's secret party):
// ---------------------------------------------------------------------------
partyLocation
shiftValue
encrypt
decode
isPartySafe

// ----------------------------------------------------------------------
// // QUESTION 2(specify primitive data type & provide a value for each):
// ----------------------------------------------------------------------
let partyLocation = "garden"; // string
const shiftValue = 3; // (number)
let encrypt = "sdafsad"; // (string)
let decode = "garden"; // (string)
let isPartySafe = true; // (boolean)

// ----------------------------------------------------------------------------------------------------------------
// // QUESTION 3(determine which variables should be declared as "const" or which ones should be declared as "let"):
// ----------------------------------------------------------------------------------------------------------------

// (party location could change)
let partyLocation = "garden"  

// (only variable that remains constant. Always shifting the value by 3)
const shiftValue = 3; 

// The encrypted message could change to any location
let encrypt = "sdafsad"; (string)

// The decoded message could change as well
let decode = "garden"; (string)

// The partys' safety could be either true or false (not constant)
let isPartySafe = true; (boolean)

// --------------------------------------------------------------------------------------------------------
// // QUESTION 4(Given the variable shiftValue, write a piece of code to check if its value is an integer):
// --------------------------------------------------------------------------------------------------------
const shiftValue = 3;
Number.isInteger(shiftValue);