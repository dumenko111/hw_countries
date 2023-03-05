import fetchCountries from "./js/fetchCountries";

const refs = {
  searchForm: document.querySelector('.js-search-form')
}

fetchCountries('ukraine').then(console.log)