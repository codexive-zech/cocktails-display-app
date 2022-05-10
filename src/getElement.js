const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error(`Selection ${selection} does not exist`);
  }
};

export default getElement;
