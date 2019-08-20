import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likeView from './views/likesView';

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
         recipeView.renderRecipe(
            state.recipe,
            state.likes.isLiked(id)
            );
      }catch(error){
         //console.log(error);
         alert('Error processing went wrong');
      }
   }
}



const controlLike = () => {
   if(!state.likes) state.likes = new Likes();
   const currentID = state.recipe.id;
   if(!state.likes.isLiked(currentID)){
     const newLike = state.likes.addLike(
         currentID,
         state.recipe.title,
         state.recipe.author,
         state.recipe.img
      );
      likeView.toggleLikeBtn(true);
      likeView.renderLike(newLike);
   }else{
      state.likes.deleteLike(currentID);
      likeView.toggleLikeBtn(false);
      likeView.deleteLike(currentID);
   }
   likeView.toggleLikeMenu(state.likes.getNumLikes());
}

//window.addEventListener('hashchange', controlRecipe);

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

const controlList = () => {
   if(!state.list) state.list = new List();

   state.recipe.ingredients.forEach(el => {
      const item = state.list.addItems(el.count, el.unit, el.ingredient);
      listView.randerItem(item);
   });
}

elements.shopping.addEventListener('click', e => {
   const id = e.target.closest('.shopping__item').dataset.itemid;
  
   if(e.target.matches('.shopping__delete, .shopping__delete *')){
      state.list.deleteItem(id);

      listView.deleteItem(id);
   }else if(e.target.matches('.shopping__count-value')){
      const val = parseFloat(e.target.value, 10);
      state.list.updateCount(id, val);
   }
});

window.addEventListener('load', () => {
   state.likes = new Likes();
   state.likes.readStorage();

   likeView.toggleLikeMenu(state.likes.getNumLikes());

   state.likes.likes.forEach(like => likeView.renderLike(like));
});


elements.recipe.addEventListener('click', e => {
   if(e.target.matches('.btn-decrease, .btn-decrease *')){
      if(state.recipe.servings > 1){
         state.recipe.updateServings('dec');
         recipeView.updateServingsIngredients(state.recipe);
      }
   }else if(e.target.matches('.btn-increase, .btn-increase *')){
      state.recipe.updateServings('inc');
      recipeView.updateServingsIngredients(state.recipe);
   } else if(e.target.matches('.recipe__btn--add, .recipe__btn *')){
      controlList();
   }else if(e.target.matches('.recipe__love, .recipe__love *')){
      controlLike();
   }
  // console.log(state.recipe);
});

