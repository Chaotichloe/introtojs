//Ask for first name of user
const firstName = prompt('What is your first name?');

//Ask for last name of user
const lastName = prompt('What is your last name?');

//Log firstName 
console.log(`Your first name is ${firstName}.`);

//Alert lastName
alert(`So you\'re REALLY gunna tell me that ${lastName} is your last name?`);

//Ask for birthday 
const birthDay = prompt('What is your date of birth?');

//Confirm validity
confirm(`${birthDay} better be your real birthday. If not, surrender now.`);

//Alert resulting birthday
const birthDate = new Date(birthDay);
alert(`Your birth date is ${birthDate}`);