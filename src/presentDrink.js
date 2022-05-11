// importing the fetch drinks file into present drink so it can be used
import fetchDrinks from './fetchDrink.js';
import displayDrinks from './displayDrink.js';
import setDrink from './setDrink.js';

// a func that present drinks takes two func fetch drinks and display drink
const presentDrinks = async (url) => {
  // Fetch the drinks from the server
  const data = await fetchDrinks(url);
  // console.log(data);
  // display the drinks available in the server via the url
  const section = await displayDrinks(data);
  // if the result are correct then event should be added
  // checking to see if drinks data was returned and displayed
  if (section) {
    setDrink(section);
  }
};

export default presentDrinks;
