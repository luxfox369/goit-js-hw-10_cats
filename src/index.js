//Use it as the 'x-api-key' header when making any request to the API,
// or by adding as a query string parameter e.g.
//'api_key=live_Sz0lH9JVJZhPv0zekEloQ0y2xdRmDKvzSpyifFf6Cg0RvGBO0yR50cLeDElIuWV9'

//to get 10 random images https://api.thecatapi.com/v1/images/search?limit=10
// add your own API Key to get 10 bengal images
//  https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME
//You can retrieve an individual Image by using it's unique ID
//https://api.thecatapi.com/v1/images/0XYvRd7oD

//У разі успішного запиту, необхідно наповнити select.breed-select опціями так,
// щоб value опції містило id породи, а в інтерфейсі користувачеві відображалася назва породи.
//Напиши функцію fetchBreeds(), яка виконує HTTP-запит і повертає проміс із масивом порід - результатом
//запиту.Винеси її у файл cat - api.js та зроби іменований експорт.
import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_Sz0lH9JVJZhPv0zekEloQ0y2xdRmDKvzSpyifFf6Cg0RvGBO0yR50cLeDElIuWV9";
const BASE_URL = "https://api.thecatapi.com/v1/images/search";
const URL_BREEDS = 'https://api.thecatapi.com/v1/breeds';
export function fetchBreeds() {
    return fetch(`${URL_BREEDS}`)
        .tnen((resp) => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json();
        }
        );
}
console.log(fetchBreeds());