import { fetchBreeds,fetchCatByBreed,fetchImgByRefId } from "./cat-api";
import { refs } from "./refs";
import Notiflix from 'notiflix';
/*import SlimSelect from "slim-select";

new SlimSelect({
  select: '#selectElement',
})*/

let linkImg = '';
onShow();

fetchBreeds().then(data => {
   // console.log(data);  
    Notiflix.Notify.success("Cat's breeds loaded for use...");
    refs.select.innerHTML = creatSelect(data);
    })
    .catch(err => Notiflix.Notify.failure('Упс!Щось пішло не так ((('));
        
refs.select.addEventListener("change", onChange);

function onChange(event) {
    let targ = event.target;
   // console.log("id: ", targ.value);
   
    let idImg = '';
    fetchCatByBreed(targ.value).then(
        cat => {
            onload();
            idImg = cat.reference_image_id;
           // console.log("idImg ", idImg);
            return fetchImgByRefId(idImg).then(item =>
            {
                linkImg = item.url;
                // console.log("linkImg ", linkImg);
                //console.log(cat);
                refs.info.innerHTML = creatInfo(cat);
                Notiflix.Notify.success(`Keep info about ${cat.name}!`);
            onShow();
            })
                                       .catch(err => Notiflix.Notify.failure(`Упс!Нема гарного img для  ${cat.name} (((`));
        
        })
        .catch(err => Notiflix.Notify.failure(`Упс!Щось пішло не так для ${targ.value} (((`));
                                 
}
    

    function creatSelect(arr) {
        return arr.map(({ id, name }) => `<option value =${id} >${name}</option>`);
    }

    function creatInfo({ name, description, origin, temperament, intelligence,life_span,dog_friendly,child_friendly,hypoallergenic,affection_level,energy_level}) { 
      //  console.log(`link on image :${IMG_URL}/${item.reference_image_id}`);
        return (`<h3 class ="name">${name}</h3>
        <p class="wrap"><image src =${linkImg} alt = ${name} "></p>
        <h5>-~origin: <span>${origin} </span></h5>
        <h5>-~energy-level:<span> ${energy_level}</span> </h5> 
        <h5>-~temperament: <span>${temperament} </span></h5>
        <h5>-~intelligence: <span>${intelligence}</span></h5>
        <h5>-~affection_level:<span> ${affection_level}</span> </h5> 
        <h5>-~life_span: <span>${life_span}</span> </h5> 
        <h5>-~child_friendly:<span> ${child_friendly}</span></h5> 
        <h5>-~dog_friendly:<span> ${dog_friendly}</span> </h5> 
        <h5>-~hypoallergenic:<span>${hypoallergenic}</span></h5> 
        <p class="description">~~${description}</p>`
        );
    
}
function onload() {
    refs.loader.hidden = false;
    refs.info.hidden = true;
    refs.error.hidden = true;
    
}
function onShow() {
    refs.loader.hidden = true;
    refs.info.hidden = false;
    refs.error.hidden = true;
    }
