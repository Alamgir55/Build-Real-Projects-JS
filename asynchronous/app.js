
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

function getRecipe(){
    console.log("DOm");
    setTimeout(()=>{
        recipeId = [500, 600, 700, 900];
        console.log(recipeId);

        setTimeout(id => {
            const recipe = {
                title: 'Frash Tomoto Pasta',
                publisher: 'Rick'
            };
            console.log(`${id}: ${recipe.title} </br> ${recipe.publisher}`);

            setTimeout(publisher => {
                const recipe2 = {
                    title: 'Italian pizza',
                    publisher: 'Alex'
                };
                console.log(recipe2);
                console.log(publisher);

            }, 100, recipe.publisher);
    
        }, 1500, recipeId[2] );

    }, 1500);
}
getRecipe();