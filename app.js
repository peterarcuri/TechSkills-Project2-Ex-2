
const friend = "BRUTUS";
const shiftValue = 3;

// ================
// ==== STEP 1 ====
// ================

const alphabet = "abcdefghijklmnopqrstuvwxyz";

// ================
// ==== STEP 2 ====
// ================

const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase());


// ====================
// ==== QUESTION 1 ====
// ====================

// ANSWER: The reason it is 1 instead of 2 is because the index of a string always starts with 0.

// ================
// ==== STEP 3 ====
// ================

const newIndex = index + shiftValue;
const encryptedFirstLetter = alphabet[newIndex];

// ====================
// ==== QUESTION 2 ====
// ====================

// ANSWER: The modulus operator is what can help us wrap around and continue from the beginning of the alphabet

// ================
// ==== STEP 4 ====
// ================

const alphabetLength = alphabet.length;

// ================
// ==== STEP 5 ====
// ================

const alphabetLength = alphabet.length;
const newIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex];

// ================
// ==== STEP 6 ====
// ================

const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3);
