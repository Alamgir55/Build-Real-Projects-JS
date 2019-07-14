// let john2 = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };
// let Person = function(firstName, lastName, job, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.job = job;
//     this.age = age;
// }
// Person.prototype.calAge = function(year){
//     console.log(year - this.age);
// }

// let alex = new Person('Alex', 'raynax', 'Dev', 1992);

// alex.calAge(2019);

// const personProto = {
//     calAge: function(){
//         console.log(2019 - this.age);
//     }
// };
// const alex = Object.create(personProto);
// alex.name = 'John';
// alex.job = 'Dev';
// alex.age = '1994'

// const raynax = Object.create(personProto, 
//     {
//         firstName: {value: 'Some Name'},
//         lastName: {vlaue: 'SOme soem'},
//         age: {value: 1998}
//     });

// let a = 23;
// let b = a;
// a = 50;
// console.log(a);
// console.log(b);

// let obj1 = {
//     name: 'John',
//     age: 26
// };
// let obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);
// // fun
// let age = 27;

// let obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// function change(a, b){
//     a = 30;
//     b.city = 'San Fancisco';
// }
// change(age, obj);

// console.log(age);
// console.log(obj.city);

// let years = [1992,1994,1995,2018];

// function cal(arr, fun){
//     let arrKing = [];
//     for(let i = 0; i < arr.length; i++){
//         arrKing.push(fun(arr[i]));
//     }
//     return arrKing;
// }
// function myCal(el){
//     return 2019 - el;
// }
// function fullAge(el){
//     return el >= 18;
// }
// function maxHeartRate(el){
//     if(el >= 18 && el <= 81){
//         return Math.round(206.9 - (0.67 * el));
//     }else{
//         return -1;
//     }
// }

// let a = cal(years, myCal);
// let b = cal(a, fullAge);
// let c = cal(a, maxHeartRate);
// console.log(a);
// console.log(b);
// console.log(c);

// function interviewQA(job){
//     if(job === 'designer'){
//         return function(name){
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     }else if(job === 'teacher'){
//         return function(name){
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     }else{
//         return function(name){
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }
// const teacherQA = interviewQA('teacher');
// const designerQA = interviewQA('designer');

// teacherQA('Raynax');
// designerQA('Rakib');
// designerQA('Mark');

// interviewQA('teacher')('Qin');

// function collageQA(subject){
//     if(subject === 'cs'){
//         return function(name){
//             console.log(name + ', do you any knowlege about programming');
//         }
//     }else if(subject === 'cys'){
//         return function(name){
//             console.log('Hey , '+ name + 'do know linex?')
//         }
//     }else{
//         return function(name){
//             console.log(name + 'what do you want to study');
//         }
//     }
// }
// collageQA('cs')('rick');
// collageQA('cys')('raynax');

// function game(){
//     let score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// (function(){
//     let score = Math.random() * 10;
//     console.log(score >= 5);
// })();
// console.log(score);

// (function(goodLuck){
//     let score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck)
// })(5);

// function retirement(retirementAge){
//     let a = ' years left until retirment.';
//     return function(yearOfBirth){
//         let age = 2019 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }  
// }
// let retirementUS = retirement(66);
// let retirementGermany = retirement(65);
// let retirementIceland = retirement(67);


// retirementUS(1992);
// retirementGermany(1992);
// retirementIceland(1992);

// function interviewQA(job){
//         if(job === 'designer'){
//             return function(name){
//                 console.log(name + ', can you please explain what UX design is?');
//             }
//         }else if(job === 'teacher'){
//             return function(name){
//                 console.log('What subject do you teach, ' + name + '?');
//             }
//         }else{
//             return function(name){
//                 console.log('Hello ' + name + ', what do you do?');
//             }
//         }

//     }
// function interviewQA(job){
//     return function(name){
//         if(job === 'desinger'){
//             console.log(name + ', can you please explain what UX design is?');
//         }else if(job === 'teacher'){
//             console.log('What subject do you teach, ' + name + '?');

//         }else{
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// let teacherQA = interviewQA('teacher');
// let designerQA = interviewQA('desinger');
// let noneQA = interviewQA();


// teacherQA('Qin');
// designerQA('Ashike');
// noneQA('None');

let john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }else if(style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice '+ timeOfDay + '.');   
        }
    }
};
let emily ={
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');

let raynax = john.presentation.bind(john, 'friendly');

raynax('afternoon');
raynax('Morning');

let emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('evening');


let years = [1992,1994,1995,2018];

function cal(arr, fun){
    let arrKing = [];
    for(let i = 0; i < arr.length; i++){
        arrKing.push(fun(arr[i]));
    }
    return arrKing;
}
function myCal(el){
    return 2019 - el;
}
function fullAge(el, limit){
    return el >= limit;
}

let age = cal(years, myCal);
console.log(age);
let limitJP = cal(age, fullAge.bind(this, 20));
console.log(limitJP);