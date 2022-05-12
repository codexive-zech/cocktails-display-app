import displaySingleDrink from './src/displaySingleDrink.js';
import fetchDrinks from './src/fetchDrink.js';

// the url to fetch single drink from the server
const url = 'https://thecocktaildb.com/api/json/v1/1/lookup.php?i=';

// a function that present each sing drink
const presentDrink = async () => {
  // get each drink key id that was first set in the local storage
  const id = localStorage.getItem('drink');
  //   checking to see if the id exist in the url inputted
  if (!id) {
    //   if the id is not in the url then return back to the index page
    window.location.replace('index.html');
  }
  //   if the id does exist in the url then fetch the single drink data from the server
  else {
    //   fetch the drink data from the server with the url and id saved in the local storage
    const drink = await fetchDrinks(`${url}${id}`);
    //   display each single fetched drink into the HTML
    displaySingleDrink(drink);
  }
};

// an event that listen for a load so as to display the present drink func
window.addEventListener('DOMContentLoaded', presentDrink);
