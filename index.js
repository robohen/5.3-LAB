// const personOne = {
//     name: {
//         first: 'Timmy',
//         last: 'Timtim'
//     },
//     age: 30,
//     location: {
//         city: 'New York',
//         state: 'New York',
//         zip: 10001
//     }
// };

// const personTwo = {
//     name: {
//         first: 'Julie',
//         last: 'July'
//     },
//     age: 28,
//     location: {
//         city: 'Albany',
//         state: 'New York',
//         zip: 12201
//     }
// };


// //People move location frequently. Create a new function moveLocation().

// //moveLocation() should take one of our person objects as its first parameter and a location object as the second parameter.
// //The location object will have the properties city, state, and zip.
// //The function should change the city, state, and zip properties of the person to match those of the new location.
// //Test your function by using the following code. Does personTwo now live in Rochester? (They should.)
// // function moveLocation(person, location){
// //     person.location.city = location.city;
// //     person.location.state = location.state;
// //     person.location.zip = location.zip;
// // };
// // const newLoc = {
// //     city: 'Rochester',
// //     state: 'New York',
// //     zip: 14604
// // };

// // moveLocation(personTwo, newLoc);
// // console.log(personTwo.location.city);

// // Julie and Timmy have gotten married! Since they'll be living together, we should give them the same location. However, since they'll be living together forever, let's save ourselves the hassle of updating both of their locations every time they move.

// // Set Julie's location to Timmy's location by reference.
// // Test this new link by using the following code, which utilizes our already-completed moveLocation() function with no changes necessary. Do both people now live in California? (They both should.)
// // function moveLocation(person, location){
// //     location.city = 'Mountain View',
// //     location.state = 'California',
// //     location.zip = 94035
// // }
// // moveLocation(personOne, personOne.location);
// // personTwo.location = personOne.location; //making them equal something else means that it was changed by reference
// // console.log(personTwo.location);

// // The happy couple are having a baby! Create a new object personThree.

// // Set personThree.name.first to whatever you'd like, and personThree.name.last to a hyphenated combination of personOne and personTwo's last names.
// // Give personThree an age of 0.
// // Set personThree's location to that of their parents, by reference so that the baby stays with its family.
// // Test your code's behavior by using your moveLocation() function.
// const personThree = {
//     name: {
//         first: 'Son',
//         last: 'Timetime-July'
//     },
//     age: 0,
//     location: {
//         city: 'Albany',
//         state: 'New York',
//         zip: 12201
//     }
// };
// personThree.location = personOne.location;
// console.log(personThree.location);
// function moveLocation(person, location){
//         location.city = 'Mountain View',
//         location.state = 'California',
//         location.zip = 94035
//     }
// moveLocation(personOne, personOne.location);
// personThree.location = personOne.location;
// console.log(personThree.location);
// function add20(person, age){
//     person.age +=20;
// }
// add20(personOne);
// add20(personTwo);
// add20(personThree);
// console.log(personOne.age,personTwo.age,personThree.age);
// const locationCopy = Object.assign({}, personThree.location);
// personThree.location = locationCopy;
// console.log(personThree.location === locationCopy); 
// function moveLocation(person, location){
//         location.city = 'Backyardville',
//         location.state = 'Texas',
//         location.zip = 22222
//     }
// moveLocation(personThree, personThree.location);
// console.log(personThree.location);
// console.log(personOne.location);
// function add300(person, age){
//     person.age +=300;
// }
// add300(personOne);
// add300(personTwo);
// add300(personThree);
// console.log(personOne.age, personTwo.age, personThree.age);
// function clonePerson(person){
//     const clonedPerson = JSON.parse(JSON.stringify(person));
//     clonedPerson.age=0;
//     return clonedPerson;
// }
// const aClone = clonePerson(personThree);
// console.log(aClone);
// // console.log(personThree); age is the same and unaffected by cloning
// function moveLocation(person, location){
//         location.city = 'Backyardville',
//         location.state = 'Texas',
//         location.zip = 22222
//     }
//     moveLocation(aClone, aClone.location);
//     console.log(aClone);
// const thoughts ={
//     someThoughts :"a,v,b,d,s,w,e",
//     aThought : "wow",
//     moreThoughts : "y,h,d,s,w,q"
// };
// personOne.thoughts = thoughts;
// personTwo.thoughts = thoughts;
// personThree.thoughts = thoughts;
// aClone.thoughts = thoughts;
// console.log(personOne.thoughts, personTwo.thoughts, personThree.thoughts, aClone.thoughts);