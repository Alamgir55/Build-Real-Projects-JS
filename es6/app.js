
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

function mapForEach(arr, fn){
    let newArr = [];

   for(let i = 0; i < arr.length; i++){
        newArr.push(
            fn(arr[i])
        )
   };
   return newArr;
}



let arr1 = [1,2,3];
console.log(arr1);

let arr2 = mapForEach(arr1, function(item){
    return item * 2;
});

console.log(arr2);

let checkPastLimit = function(limiter, item){
    return item > limiter;
}
let arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

let checkPastLimitSimplified = function(limiter){
    return function(limiter, item){
        return item > limiter;
    }.bind(this, limiter);
};

let arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);