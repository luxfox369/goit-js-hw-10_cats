import { fetchBreeds,fetchCatByBreed,fetchImgByRefId } from "./cat-api";
import { refs } from "./refs";
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';

new SlimSelect({
  select: '#selectElement',
})

let linkImg = '';
onShow();

fetchBreeds().then(data => {
    console.log(data);  
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

    function creatInfo({ name, description, origin, temperament, intelligence,life_span}) { 
      //  console.log(`link on image :${IMG_URL}/${item.reference_image_id}`);
        return(`<h2>${name}</h2>
         <p><i>${description}</i></p>
            <h3>Origin: <span><b>${origin}</b> </span></h3>
           
         <h3>Temperament:<span><i>${temperament}</i> </span></h3>
            
         <h3>Intelligence:<span><i>${intelligence}</i> </span></h3>
         
         <h3>life_span:<span><i>${life_span}</i> </span> </h3>
           
         <p><image src =${linkImg} alt = ${name} width="500px" height="500px"></p>` 
        );
    
}
function onload() {
    refs.loader.hidden = false;
    refs.select.hidden = true;
    refs.info.hidden = true;
    refs.error.hidden = true;
    
}
function onShow() {
    refs.select.hidden = false;
    refs.info.hidden = false;
    refs.loader.hidden = true;
    refs.error.hidden = true;
    }
