
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