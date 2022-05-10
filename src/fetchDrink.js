import { showLoading } from './toggleLoading.js';
// func fetching drinks from the server with the url as param
const fetchDrinks = async (url) => {
  // show the loading by removing the loading hide class that is places by default in the HTML
  showLoading();
  // a try/catch block to make effective use of the url or to reject it
  try {
    // fetching data from a server {returns a promise}
    const response = await fetch(url);
    // checking the fetch promise data to see if the response type is ok or not
    if (!response.ok) {
      // throw the error message when the browser was unable to fetch any data from the server
      throw Error();
    }
    // convert the fetched text data into a json format
    const data = await response.json();
    // returned converted list of array data from the server
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
