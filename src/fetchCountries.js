
let RES_LEN = 0;
function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
    .then(r => {
      if (!r.ok) {
        throw new Error(r.status);
      }
      return r.json();
    })
    .then(r => {
      RES_LEN = r.length;
      return {r, RES_LEN};
    }).catch(err => {
      
    })
}

export { fetchCountries, RES_LEN };



