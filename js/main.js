// const exampleString = 'I am a string.';
// const exampleObejctString = new String('1');
// const anotherString = 'I am a string.';
const H1 = document.getElementById('greeting');

// function checkExamples() {
//     if(exampleString == exampleObejctString) {
//         console.log(`Yes, ${exampleString} and ${exampleObejctString} are loosely equal.`);
//     } else {
//         console.log('Sorry, they do not equal at all.');
//     }
//     if(exampleString != anotherString) {
//         console.log(`Yes, ${exampleString} and ${anotherString} are loosely equal.`);
//     } else {
//         console.log('Sorry, they do not equal at all.');
//     }

// checkExamples();

// const luckyNumber = 5;

// if(luckyNumber === 5 || luckyNumber == 3) {
//     console.log('Sorry, your number is not lucky to me!');
// } else {
//     console.log(`Hey your lucky number ${luckyNumber}`);
// }

// const randomString = 'I am a random string!';
// const randomObjectString = new String('I am a string object!');

// if (randomString == randomObjectString || randomString === randomObjectString) {
//     console.log('You\'re a wizard harry!');
// } else {
//     console.log('Yeah, thats what I thought.')
// }

// let a = 1;
// let b = 2;
// let result = 0;
// result++;
// console.log(result);

// let hello = 'Hello ';
// let there = 'there!';
// let sentence = hello += there;
// console.log(sentence);

// let a = '5.99';
// let b = 2;

// let testModulo = 2 % 10;
// console.log(testModulo);

// let testNan = isNaN('hello');
// console.log(testNan);

// let transformMe = parseFloat(a, 2);
// let result = a += b;
// console.log(`Before: ${a}, After: ${transformMe}`, typeof(a), typeof(transformMe));
// console.log(result);

let valueNan = 10;
let testNan = isNaN(valueNan);

// testNan ? console.log('THIS IS TRUE') : console.log('THIS IS FALSE');
// if(testNan === false) {
//     let result = 'yup, correcto';
//     console.log('yup, correcto');
//     H1.innerHTML = result;
// } else {
//     let result = 'nope, no cake';
//     console.log('nope, no cake');
//     H1.innerHTML = result;
// }

// "Try It Out"
const askColor = prompt('Pick one of the following colors: Red, Blue, or Orange.');

switch(askColor) {
    case 'Red': 
        H1.innerHTML = `You chose ${askColor} which reminds me of that song, I SEE A RED DOOR AND I WANNA PAINT IT BLACK...`;
    break;
    case 'Blue': 
        H1.innerHTML = `You chose ${askColor}. IM BLUE IF I WAS GREEN I WOULD DIE IF I WAS GREEN I WOULD DIE`;
    break;
    case 'Orange':
        H1.innerHTML = `You chose ${askColor}, ion know what to tell you fam i just dont like orange.`;
    break; 
    default: 
        H1.innerHTML = 'You are scum of the earth, and your inability to follow rules will ultimately lead to your untimely demise.';

}

const userAge = prompt('Are you over 18? Answer Yes or No.');

switch(userAge) {
    case 'Yes':
    case 'yes':
        H1.innerHTML = 'Congrats for that one. Proceed...';
    break;
    case 'No':
    case 'no':
        H1.innerHTML = 'YOU SHALL NOT PASS, CHILD. Try again when you have reached the struggles of adulthood.';
    break;
    default: 
        H1.innerHTML = 'Your failure to comply and submit one of the two choices provided leads me to believe you are not of age. Leave or prove otherwise.';
}

let underEighty = prompt('Are you under 80 years old?');
let starWars = prompt('Do you like Star Wars?');
let prunes = prompt('Do you like prunes?');
underEighty ? starWars : prunes;

if(starWars == false) {
    
} 