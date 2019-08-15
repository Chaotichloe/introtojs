//var firstName = 'Chloe';
var age = 16;

const firstName = 'Chloe';
const areYouMarried = false;
console.log(firstName.length);

const question = prompt('Are you married?');
if (question === areYouMarried) {
    console.log('Bitch, the FUCK you are.');
} else {
    console.log('Sorry bout it g');
}
//Old Way
//console.log('My name is ' + firstName + ' and I am ' + age + ' years old.');
//Better Way
//console.log(`My name is ${firstName} and my age is ${age}`);

//alert(`Hello, I am ${firstName}`);

// const birthday = '11/24/2002';
// let fixDate = new Date(birthday);
// console.log(fixDate);

//console.log(typeof());

const topThreeMovies = ['The House Bunny', ''];
console.log(topThreeMovies);
console.log(`my second fav movie is: ${topThreeMovies[1]}`)