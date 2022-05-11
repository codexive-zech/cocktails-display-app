const setDrink = (section) => {
  // listening fro a click event on any clicked drink that is displayed in the section
  section.addEventListener('click', (e) => {
    //   preventing the default entering a new page behavior of the link
    // e.preventDefault();
    // traversing the section DOM consisting of article as parent, then img and title as child. Now getting the data-id attribute of the parent
    const id = e.target.parentElement.dataset.id;
    // used to pass in attribute into the drink and save it in the browser local storage
    localStorage.setItem('drink', id);
  });
};

export default setDrink;
