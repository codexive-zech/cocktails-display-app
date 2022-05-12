import { hideLoading } from './toggleLoading.js';
import getElement from './getElement.js';

// func that display single drink
const displaySingleDrink = (data) => {
  // hide the loading based on the fact that it is displaying data
  hideLoading();
  // getting each single details regarding the drink selected
  const drink = data.drinks[0];
  // destructing each single drink property in the server so as to use it dynamically
  const {
    strDrink: name,
    strInstructions: description,
    strDrinkThumb: image,
  } = drink;
  // destructure the ingredient list in the single drink object so as to be able to iterate over it
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];

  // changing the head title section of the HTML to the link clicked
  document.title = name;
  // getting the HTML that will take in effect
  const drinkImage = getElement('.drink-img');
  const drinkName = getElement('.drink-name');
  const drinkDescription = getElement('.drink-description');
  const drinkIngredient = getElement('.drink-ingredients');

  // getting and changing the image of the clicked cocktail based on it id
  drinkImage.src = image;
  // getting and changing the name of the clicked cocktail based on it id
  drinkName.textContent = name;
  // getting and changing the description of the clicked cocktail based on it id
  drinkDescription.textContent = description;
  // iterate over the ingredient list and display it
  const displayIngredient = list
    .map((item) => {
      // checking if the ingredient does not exist i.e null
      if (!item) {
        // then return nothing
        return;
      }
      // checking to see if ingredients does exist in the list
      else {
        // then return the list of those ingredient from the server
        return `<li><i class="far fa-check-square"></i>${item}</li>`;
      }
    })
    .join('');
  // dynamically displaying the ingredients into the single drink page
  drinkIngredient.innerHTML = displayIngredient;
};

export default displaySingleDrink;
