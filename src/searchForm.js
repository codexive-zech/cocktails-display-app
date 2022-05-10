import getElement from './getElement.js';
// getting the module that handles fetching and displaying of drinks
import presentDrinks from './presentDrink.js';

// URL that fetches data based on search
const baseUrl = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=';

// selected classes that will take in action and effect
const form = getElement('.search-form');
const input = getElement('[name="drink"]');

// event that is listening for a keyup i.e when user is typing in the search part
form.addEventListener('keyup', (e) => {
  // preventing the default submit behavior of the form
  e.preventDefault();
  //   getting the value inputted in the search space
  const inputValue = input.value;
  //   if the input value is empty return nothing
  if (!inputValue) {
    return;
  }
  //if the input value space has text in it then run the fetch drink func and the display drink func based on the keyword inputted in the search box
  else {
    presentDrinks(`${baseUrl}${inputValue}`);
  }
});
