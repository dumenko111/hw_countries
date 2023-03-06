import fetchCountries from "./js/fetchCountries";
import debounce from 'lodash.debounce'

const refs = {
  searchInput: document.querySelector('input[data-search="search"]'),
  countryList: document.querySelector('.countries')
}

refs.searchInput.addEventListener('input', debounce(onSearchCountries, 1000))


function onSearchCountries(e) {
  const searchQuery = e.target.value;

  fetchCountries(searchQuery).then(country => {
    console.log(country)
    const markup = countryMarkup(country)
    refs.countryList.innerHTML = markup
  }).catch(error => alert('Помилка відповіді серверу', error))

}

function countryMarkup(country) {
  return country.map(({name: {common}, capital, languages, population, flags: {svg} }) => {
    return `<li>
        <h2>Name country: ${common}</h2>
        <img src="${svg}" alt="${common}" width="30" height="30"/>
        <p>Capital: ${capital}</p>
        <p>Population: ${population}</p>
        <p>Languages: <span>${[...Object.values(languages)]}</p>
        </li>`;
    }).join('');
}
