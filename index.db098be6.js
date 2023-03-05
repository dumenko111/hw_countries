document.querySelector(".js-search-form");var e;(e="ukraine",fetch(`https://restcountries.com/v2/name/${e}`).then((e=>e.ok?e.json():[])).catch((e=>{e({text:"Network error!"}),console.log(e)}))).then(console.log);
//# sourceMappingURL=index.db098be6.js.map
