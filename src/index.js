

import { fetchBreeds } from "./cat-api";
const selectBreed = document.querySelector(".breed-select");
fetchBreeds().then(data => selectBreed.innerHTML = creatSelect(data))
             .catch(err => console.log(err));

function creatSelect(arr) {
    return arr.map(({ id, name }) => `<option value =${id} >${name}</option>`
    );
}