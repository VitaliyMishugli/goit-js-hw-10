import debounce from 'lodash.debounce';
import './css/styles.css';
import { fetchCountries, RES_LEN } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';


const DEBOUNCE_DELAY = 300;
// fetchCountries('spain');

const refs = {
  searchInput: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.searchInput.addEventListener(
  'input',
  debounce(searchCountries, DEBOUNCE_DELAY)
);

function searchCountries(e) {
  e.preventDefault();
  let inputValue = refs.searchInput.value.trim();
  // console.log(inputValue);
  if (inputValue) {
    fetchCountries(inputValue)
      .then(res => {
      // console.log(r.RES_LEN);
        if (res.RES_LEN > 10) {
         
          Notiflix.Notify.info(
           `✅ Too many matches found. Please enter a more specific name.`
          );
          refs.countryList.innerHTML = '';
        }
        else if (res.RES_LEN <= 10 && res.RES_LEN >=2 ) {
          countriesListRender(res.r);
          // console.log(r);
          // let countries = res.r;
          // const markUp = countries.map(country => {
          //   // console.log(country.name.official, country.capital[0], country.population, country.flags.svg, country.languages);
          //   // console.log(country.name.official, country.flags.svg);
          //   return `<li><img src="${country.flags.svg}" width="50"/><h3 class="list-h">${country.name.official}</h3></li>`;
          // }).join('');
          // refs.countryList.innerHTML = markUp;
        }
        else {
          countryRender(res.r);
        }
      })
  }
  else {
    Notiflix.Notify.info(
      `✅ Введіть кілька символів для пошуку країни.`
    );
  }
}



function countryRender(data) {
  console.log(data);
  
}

function countriesListRender(data) {
  console.log(data);
   let countries = data;
   const markUp = countries
     .map(country => {
       // console.log(country.name.official, country.capital[0], country.population, country.flags.svg, country.languages);
       // console.log(country.name.official, country.flags.svg);
       return `<li><img src="${country.flags.svg}" width="50"/><h3 class="list-h">${country.name.official}</h3></li>`;
     })
     .join('');
   refs.countryList.innerHTML = markUp;
}