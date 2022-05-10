import getElement from './getElement.js';

//a display drink func to show drinks dynamically on the web page the { drink } is there so as to access the data in the server
const displayDrinks = ({ drinks }) => {
  // selected classes that will take in action and effect
  const sectionCenter = getElement('.section-center');
  const title = getElement('.title');

  // checking to see if the drink from the server does exist
  if (!drinks) {
    //  TODO!!!!! Hide Loading
    // displaying an error message when it does not exist
    title.textContent = `Sorry, Cocktail does not exist`;
    // do not want to display rest drinks and error msg together
    sectionCenter.innerHTML = null;
    return;
  }
  // function expression for getting new drink from the server via it stated url
  const newDrink = drinks
    // iterate over the drinks object in the server
    .map((drink) => {
      // destructured the need propertied from the object so as to use it here
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      // dynamically display the each drinks from the server via the url and added the destructed value where needed
      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join('');
  // make the error message section be an empty string (blank)
  title.textContent = '';
  // dynamically insert the new drink func into the section center for the HTML
  sectionCenter.innerHTML = newDrink;
  // return back the section center
  return sectionCenter;
};

export default displayDrinks;
