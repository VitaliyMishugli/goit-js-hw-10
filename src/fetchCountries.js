
let RES_LEN = 0;
function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
    .then(r => {
      return r.json();
    })
    .then(r => {
      RES_LEN = r.length;
      return {r, RES_LEN};
    })
}

export { fetchCountries, RES_LEN };



