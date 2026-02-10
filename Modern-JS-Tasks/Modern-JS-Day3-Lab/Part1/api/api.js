/*
1- use rest countries API to get any country’s data by country name
https://restcountries.com/v2/name/{countryname}
and display the result as follow
for example: https://restcountries.com/v2/name/Egypt
*/

export function getCountryData(countryName) {
  const countriesDiv = document.querySelector('.countries');
  const mainCountry = document.querySelector('.country');

  const img = mainCountry.querySelector('.country-img');
  const nameEl = mainCountry.querySelector('.counter-name');
  const regionEl = mainCountry.querySelector('.counter-region');
  const rows = mainCountry.querySelectorAll('.country-row');

  const peopleEl = rows[0];
  const langEl = rows[1];
  const currEl = rows[2];

  // Remove old neighbor card if exists
  const oldNeighbor = document.querySelector('.country.neighbor');
  if (oldNeighbor) {
    oldNeighbor.remove();
  }

  // 1) Fetch main country
  fetch(`https://restcountries.com/v2/name/${countryName}`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Country not found');
      }
      return response.json();
    })
    .then(function (data) {
      const country = data[0];

      // Fill HTML for main country
      img.src = country.flag;
      img.alt = country.name;

      nameEl.textContent = country.name;
      regionEl.textContent = country.region;

      const populationM = (country.population / 1000000).toFixed(1);
      peopleEl.innerHTML = '<span>🧑‍🤝‍🧑</span> ' + populationM + ' M people';

      const languageName = country.languages[0].name;
      langEl.innerHTML = '<span>🗣️</span> ' + languageName;

      const currencyName = country.currencies[0].name;
      currEl.innerHTML = '<span>💰</span> ' + currencyName;

      countriesDiv.style.opacity = 1;

      // Get first neighbour code
      if (!country.borders || country.borders.length === 0) {
        // No neighbor, stop here
        return null;
      }

      const neighborCode = country.borders[1];

      // Return the fetch promise (chaining)
      return fetch(`https://restcountries.com/v2/alpha/${neighborCode}`);
    })
    .then(function (response) {
      // If previous .then returned null (no neighbor)
      if (!response) {
        return null;
      }
      if (!response.ok) {
        throw new Error('Neighbor not found');
      }
      return response.json();
    })
    .then(function (neighbor) {
      if (!neighbor) {
        return;
      }

      // 2) Create neighbor card
      const neighborArticle = mainCountry.cloneNode(true);
      neighborArticle.classList.add('neighbor');

      const nImg = neighborArticle.querySelector('.country-img');
      const nName = neighborArticle.querySelector('.counter-name');
      const nRegion = neighborArticle.querySelector('.counter-region');
      const nRows = neighborArticle.querySelectorAll('.country-row');

      const nPeople = nRows[0];
      const nLang = nRows[1];
      const nCurr = nRows[2];

      nImg.src = neighbor.flag;
      nImg.alt = neighbor.name;

      nName.textContent = neighbor.name;
      nRegion.textContent = neighbor.region;

      const nPopulationM = (neighbor.population / 1000000).toFixed(1);
      nPeople.innerHTML = '<span>🧑‍🤝‍🧑</span> ' + nPopulationM + ' M people';

      const nLanguageName = neighbor.languages[0].name;
      nLang.innerHTML = '<span>🗣️</span> ' + nLanguageName;

      const nCurrencyName = neighbor.currencies[0].name;
      nCurr.innerHTML = '<span>💰</span> ' + nCurrencyName;

      countriesDiv.appendChild(neighborArticle);
    })
    .catch(function (error) {
      alert(error.message);
      console.log(error);
    });
}
