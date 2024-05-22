//Use it as the 'x-api-key' header when making any request to the API,
// or by adding as a query string parameter e.g.
//'api_key=live_Sz0lH9JVJZhPv0zekEloQ0y2xdRmDKvzSpyifFf6Cg0RvGBO0yR50cLeDElIuWV9'

//to get 10 random images https://api.thecatapi.com/v1/images/search?limit=10
// add your own API Key to get 10 bengal images
//  https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME
//You can retrieve an individual Image by using it's unique ID
//https://api.thecatapi.com/v1/images/0XYvRd7oD
import axios from "axios"; //http клієнт...... axious.get
axios.defaults.headers.common["x-api-key"] = "live_Sz0lH9JVJZhPv0zekEloQ0y2xdRmDKvzSpyifFf6Cg0RvGBO0yR50cLeDElIuWV9";
const BASE_URL = "https://api.thecatapi.com/v1/images/search";
const URL_BREEDS = 'https://api.thecatapi.com/v1/breeds';

export function fetchBreeds() {
    return fetch(`${URL_BREEDS}`)
        .then((resp) => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json();
        }
        );
}
