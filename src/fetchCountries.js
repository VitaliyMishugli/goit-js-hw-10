
export function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=flagcdn.com/per.svg`
  )
    .then(r => {
      return r.json();
    })
    .then(r => console.log(r));
}

// https://restcountries.com/v2/{service}?fields={field},{field},{field}
// https://restcountries.com/v2/all?fields=name,capital,currencies
// capital,population,flags,languages
