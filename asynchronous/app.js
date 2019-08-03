
dothings();

async function dothings(){
    let p = await delay(1000);
    console.log(p);
}


function delay(ms){
    return new Promise((resolve, reject) => {
        resolve(ms);
         reject(new Error('bad things happened'))
         setTimeout(resolve, ms, 42 );   
    });
}


// let datafile1 = fetch('./data.json');
// let datafile2 = fetch('./data.json');

// Promise.all([datafile1, datafile2])
//     .then(files =>{
//         files.forEach(file=>{
//             process(file.json());
            
//         })
//     })
//     .catch(err =>{

//     });
//     let process = (prom) => {
//         prom.then(data=>{
//             let p = document.createElement('p');
//             p.textContent = data.numbers.join(", ");
//             document.getElementById('output').appendChild(p);
//         });
//     }

// let a3 = 100;
// setTimeout(function(){ a3++; }, 0);
// console.log(a3);
// setTimeout(function() { console.log(a3)}, 0);

// let p = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve("Yo");
//     }, 0)
// });
// console.log(p);

// setTimeout(function(){
//     console.log(p);
// }, 10);
// console.log(p);
// p.then(function(val){
//     console.log(val);
// });

// let url = 'https://jsonplaceholder.typicode.com/comments?postId=42';

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         let str = JSON.stringify(data, null, '\t'); 
//         //document.querySelector('#output pre').textContent = str;
//         document.querySelector('#output').textContent = data[0].postId;
//     })
//     .catch(err => {
//         let nm = err.name;
//         let msg = err.message;
//         alert(`Fail ${nm} ${msg}`);
//     })

// let p1 = Promise.reject(111);
// let p2 = Promise.resolve(222);
// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 1000, 333);
// });
// Promise.race([p1, p2, p3 ])
//     .then((res)=>{
//         console.log('Win:', res);
//     }).catch((res)=>{
//         console.log('Failed:', res);
//     });

// let p1 = () => Promise.resolve('Got the users');
// let p2 = () => Promise.resolve('Got the list');
// let p3 = Promise.resolve('Got the weather');

// Promise.all([p1(), p2(), p3]).then((resultArr) => {
//     console.log(resultArr[0]);
//     console.log(resultArr[1]);
//     console.log(resultArr[2]);
// }).catch(()=> {
//     console.log('Error');
// });


// let p1 = new Promise((resolved, rejected)=>{
//     if(true){
//         resolved('P1 resolved');
//     }else{
//         rejected('P1 rejected');
//     }
// });

// let p2 = Promise.resolve('P2 Resolved');
// let p3 = () => Promise.resolve('P3 Resolved');
// let p4 = () => Promise.reject('p4 rejected');

// p1.then((result)=>{
//     console.log(result);
// }).catch((reject) =>{
//     console.log(reject);
// });
// p2.then((result)=>{
//     console.log(result);
// });
// p3().then( result => console.log(result) );

// p4().then(()=>{
//     console.log('Not resolved');
// }).catch((res)=>{
//     console.log(res);
// });

// const rand = () => Math.floor(Math.random() * 10) + 1;

// let p1 = new Promise((resolve, reject) =>{
//     let x = 5;
//     let num = rand();
//     setTimeout(resolve, 1500, num);
// });

// p1.then((ex) => {
//     console.log(ex);
//     return ex * 2;
// }).then((x)=>{
//     console.log(x);
// }).catch((exx)=>{
//     console.log('caught', exx);
// });



// const second = () => {
//     setTimeout(()=>{
//         console.log('Second');
//     }, 2000);

// }

// const first = () => {
//     console.log('Hey there');
//     second();
//     console.log('The end');
// }
// first();




// function getRecipe(){
//     console.log("DOm");
//     setTimeout(()=>{
//         recipeId = [500, 600, 700, 900];
//         console.log(recipeId);

//         setTimeout(id => {
//             const recipe = {
//                 title: 'Frash Tomoto Pasta',
//                 publisher: 'Rick'
//             };
//             console.log(`${id}: ${recipe.title} </br> ${recipe.publisher}`);

//             setTimeout(publisher => {
//                 const recipe2 = {
//                     title: 'Italian pizza',
//                     publisher: 'Alex'
//                 };
//                 console.log(recipe2);
//                 console.log(publisher);

//             }, 100, recipe.publisher);
    
//         }, 1500, recipeId[2] );

//     }, 1500);
// }
// getRecipe();