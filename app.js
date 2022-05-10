import presentDrinks from './src/presentDrink.js';
import './src/searchForm.js';

// URL the data is going to be fetching from
const url = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=a';

// displaying data on the server when the browser loads up the page
window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(url);
});
