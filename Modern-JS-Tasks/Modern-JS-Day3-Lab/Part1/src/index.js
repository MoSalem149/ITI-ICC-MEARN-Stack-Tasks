/*
Lab3
1- use rest countries API to get any country’s data by country name
https://restcountries.com/v2/name/{countryname}
and display the result as follow
for example: https://restcountries.com/v2/name/Egypt
2- from assignment 1 now using chaining promises (a promise that 
depends on another promise) to display one neighbor country
https://restcountries.com/v2/alpha/{neighbour}
as shown but make it dynamically called from the value that was 
returned from the Country promise (don’t type the name of the 
neighbor manually).
*/

import { getCountryData } from '../api/api.js';

const searchBtn = document.querySelector('#readData');
const searchInput = document.querySelector('#SearchCountry');

searchBtn.addEventListener('click', function () {
  const countryName = searchInput.value.trim();
  if (countryName) {
    getCountryData(countryName);
  } else {
    alert('Please enter a country name.');
  }
});