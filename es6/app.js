
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function(){
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         });
//     }
// }
// //box5.clickMe();

// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
        
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }
// box5.clickMe();

// function Person(name){
//     this.name = name;
// }

// Person.prototype.myFriends = function(friends){
//     let arr = friends.map((el)=>
//          this.name + ' is frinends with ' + el
//     );
//     console.log(arr);
// }

// let friends = ['Bob', 'Jane', 'Mark'];
// // new Person('John').myFriends(friends);

// let john = ['John', 26];
// // let name = john[0];
// // let age = john[1];

// const [name, age] = ['John', 25];

// console.log(name);

// const obj = {
//     firstName: 'Alex',
//     lastName: 'Raynex'
// };

// const {firstName, lastName} = obj;

// console.log(firstName, lastName);

// const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);

// function calcAgeRetirment(year){
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age2, retirment] = calcAgeRetirment(1990);
// console.log(age2);
// console.log(retirment);

// function buildFunction(){
//     let arr = [];

//     for(var i = 0; i < 3; i++){
//         arr.push(function(){
//             console.log(i);
//         });
//     }
//     return arr;
// }

// let fs = buildFunction();

// fs[0]();
// fs[1]();
// fs[2]();



// function buildFunctions2(){
//     var arr = [];

//     for(var i = 0; i < 3; i++){
//         arr.push(
//             (function(j){
//                 return function(){
//                     console.log(j);
//                 }
//             }(i))
//         );
//     }
//     return arr;
// }

// var fs2 = buildFunctions2();

// fs2[0]();
// fs2[1]();
// fs2[2]();


// function makeGreeting(lan){

//     return function(firstName, lastName){
//         if(lan === 'en'){
//             console.log('Hello ' + firstName + ' ' + lastName );
//         }
//         if(lan === 'es'){
//             console.log('Hola ' + firstName + ' ' + lastName);
//         }
//     }
// }

// let greetEnglish = makeGreeting('en');
// let greetSpanish = makeGreeting('es');

// greetEnglish('John', 'Doe');
// greetSpanish('John', 'Doe');

// function sayHiLater(){
//     let greeting = 'hi';

//     setTimeout(function(){
//         console.log(greeting);
//     }, 3000);
// }

// sayHiLater();

// function tellMeWhenDone(callback){
//     let a = 1000;
//     let b = 2000;

//     callback();
// }

// tellMeWhenDone(function(){
//     console.log('All DOne');
// });

// tellMeWhenDone(function(){
//     alert('All ONs');
// });

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     getFullName: function(){
//         let fullname = this.firstName + ' ' + this.lastName;
//         return fullname;
//     }
// }

// let logName = function(lang1, lang2){
//     console.log('Logged: ' + this.getFullName());
//     console.log('Arguments: ' + lang1 + ' ' + lang2);
//     console.log('-----------------');
// }
// let logPersonName = logName.bind(person);

// logPersonName('en');

// logName.call(person, 'en', 'es');
// logName.apply(person, ['en', 'es']);

// let person2 = {
//     firstName: 'Jane',
//     lastName: ' Doe' 
// }

// let so = person.getFullName.apply(person2);
// console.log(so);

// function multiply(a, b){
//     return a * b;
// }

// let multiplyByTwo = multiply.bind(this, 5);
// console.log(multiplyByTwo(4));

// function mapForEach(arr, fn){
//     let newArr = [];

//    for(let i = 0; i < arr.length; i++){
//         newArr.push(
//             fn(arr[i])
//         )
//    };
//    return newArr;
// }



// let arr1 = [1,2,3];
// console.log(arr1);

// let arr2 = mapForEach(arr1, function(item){
//     return item * 2;
// });

// console.log(arr2);

// let checkPastLimit = function(limiter, item){
//     return item > limiter;
// }
// let arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
// console.log(arr4);

// let checkPastLimitSimplified = function(limiter){
//     return function(limiter, item){
//         return item > limiter;
//     }.bind(this, limiter);
// };

// let arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
// console.log(arr5);

// let person = {
//     firstName: 'Default',
//     lastName: 'Default',
//     getFullName: function(){
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// let john = {
//     firstName: 'John',
//     lastName: 'Doe'
// }

// john.__proto__ = person;

// for(let prop in john){
//     if(john.hasOwnProperty(prop)){
//         console.log(prop + ': ' + john[prop]);
//     }
// }

// let firstName = 'John';
// let lastName = 'Smith';

// const n = `${firstName} ${lastName}`;

// console.log(n.startsWith('Jo'));
// console.log(n.endsWith('th'));
// console.log(n.includes('o'));
// console.log(n.repeat(2));
// console.log(`${firstName} `.repeat(5));

// const years = [1990, 1965, 1985, 1937];

// let ages5 = years.map(function(el){
//     return 2019 - el;
// });
// console.log(ages5);

// let ages6 = years.map(els => 2019 - els);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}. `);

// console.log(ages6);

// ages6 = years.map((el, index) => {
//     let now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}`;
// });

// console.log(ages6);

// let box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         console.log(this.color);
//         let self = this;
//         document.querySelector('.green').addEventListener('click', function(){
//             let str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         });
//     }
// };

// box5.clickMe();

// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() => {
//         document.querySelector('.green').addEventListener('click', () => {
//             let str = `This is box number ` + this.color + ' and it is ' + this.position;
//             alert(str);
//         });
//     }
// };
// box6.clickMe();

// function Person(name){
//     this.name = name;
// }
// Person.prototype.myFriend66 = function(firends){

//     let arr = firends.map(function(el){
//         return this.name + ' is firends with ' + el;
//     }.bind(this));
//     console.log(arr);
// }
// let fr = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriend66(fr);

// Person.prototype.myFriend77 = function(friends){
//     let arr = friends.map((el) => `${this.name} is friends with ${el}` );
//     console.log(arr);
// }
// new Person('Mike').myFriend77(fr);

// let john = ['john', 26];
// let name = john[0];
// let age = john[1];
// console.log(age);

// const [name, age] = ['john', 30];

// console.log(age);

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// };
// const {firstName, lastName} = obj;
// console.log(firstName);
// console.log(lastName);

// const {firstName: a, lastName: b} = obj;
// console.log(b);
// console.log(a);

// function calcAgeRetirment(year){
//     let age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }
// const [age2, retirment] = calcAgeRetirment(1992);
// console.log(age2);
// console.log(retirment);

// let boxes = document.querySelectorAll('.box');
// let boxesArr = Array.prototype.slice.call(boxes);
// boxesArr.forEach(function(cur){
//     cur.style.backgroundColor = 'dodgerblue';
// });


// const boxesArr6 = Array.from(boxes);

// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// for(var i = 0; i < boxesArr.length; i++){
//     if(boxesArr[i].className === 'box blue'){
//        // continue;
//        break;
//     }
//     boxesArr[i].textContent = 'I changed to blue';
// }

// for(const curr of boxesArr6){
//     if(curr.className.includes('blue')){
//         continue;
//     }
//     curr.textContent = 'I changed it blue 6s';
// }

// var age = [12, 17, 8, 21, 14, 11];

// var full = age.map(function(cur){
//     return cur >= 18;
// });
// console.log(full);
// console.log(full.indexOf(true));
// console.log(age[full.indexOf(true)]);

// console.log(age.findIndex(curr => curr >= 18));

// console.log(age.find(curr => curr >= 18));

// function addFourSum(a, b, c, d){
//     return a + b + c + d;
// }

// const sum = addFourSum(100, 200, 300, 400);
// console.log(sum);

// let ar = [500, 600, 700, 800];

// const sum2 = addFourSum.apply(null, ar);
// console.log(sum2);

// const sum3 = addFourSum(...ar);
// console.log(sum3);

// const johnFamily = ['doe', 'jonny', 'johnson', 'jakie'];
// const mikeFamily = ['mike', 'mikes', 'mick', 'mock'];
// const bigFamily = [...johnFamily, 'likey', ...mikeFamily];
// console.log(bigFamily);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];

// Array.from(all).forEach(curr => curr.style.color = 'blue' );

// console.log(all);
// let so = Array.from(ar);
// console.log(so);

// function isFullAge5(){
//     //console.log(arguments);
//     let argsArr = Array.prototype.slice.call(arguments);

//     argsArr.forEach(function(cur){
//         console.log((2019 - cur ) >= 18);
//     });
// }

// //isFullAge5(1990, 1999, 1965);

// function isFullAge6(limit, ...years){
//     //console.log(years);
//     years.forEach(cur => console.log(2019 - cur >= limit));
// }
// isFullAge6(16, 1990, 1999, 1965, 1965, 2018);

// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american'){
    
//     this.firstName = firstName;
//     this.yearOfBirth = yearOfBirth;
//     this.lastName = lastName;
//     this.nationality = nationality;
// }
// let john = new SmithPerson('John', 1990);
// let emily = new SmithPerson('emily', 1983, 'Diaz', 'spanish');

const question = new Map();
question.set('question', 'What is the official name of the lateste major JavaScript Version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, Please try again!');

console.log(question.get('question'));
console.log(question.size);

// if(question.has(4)){
//     question.delete(4);
// }

// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));


for(let [key, value] of question.entries()){
    //console.log(`This is ${key}, and it's set to ${value}`);
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));.