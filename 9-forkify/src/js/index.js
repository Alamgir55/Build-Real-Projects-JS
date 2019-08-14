import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import {elements, renderLoader, clearLoader } from './views/base';

/** Global state of the app 
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
*/
const state = {};

const controlSearch = async () => {
    // 1) Get query form view
    const query = searchView.getInput();
    
    //console.log(query);
    if(query){
       // 2) New search object and to state
       state.search = new Search(query); 

       // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

      try{
         // 4) Search for recipes
         await state.search.getResults();
  
         // 5) Render results on UI
         //console.log(state.search.result);
         clearLoader();
         searchView.renderResults(state.search.result);
      }catch(error){
         alert("Something went wrong??");
         clearLoader();
      }

    }
 }

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


elements.searchResPages.addEventListener('click', e => {
   const btn = e.target.closest('.btn-inline');
   if(btn){
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
        
        console.log(goToPage); 
   }
});

const controlRecipe = async () => {
   

   const id = window.location.hash.replace('#', '');
   //console.log(id);

   if(id){
      recipeView.clearRecipe();
      renderLoader(elements.recipe);
     
     if(state.search) searchView.highlightSelected(id);

      state.recipe = new Recipe(id);
      
      try{
         await state.recipe.getRecipe();
         state.recipe.parseIngredients();   

         state.recipe.calcTime();
         state.recipe.calcServings();
   
         clearLoader();
         recipeView.renderRecipe(state.recipe);
      }catch(error){
         alert('Error processing went wrong');
      }
   }
}

//window.addEventListener('hashchange', controlRecipe);

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

elements.recipe.addEventListener('click', e => {
   if(e.target.matches('.btn-decrease, .btn-decrease *')){
      if(state.recipe.servings > 1){
         state.recipe.updateServings('dec');
         recipeView.updateServingsIngredients(state.recipe);
      }
   }  
   if(e.target.matches('.btn-increase, .btn-increase *')){
      state.recipe.updateServings('inc');
      recipeView.updateServingsIngredients(state.recipe);
   }
   console.log(state.recipe);
});