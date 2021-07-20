import {APP} from "./app.js";
import { getDataBycountryRegion } from "./helpers/ajaxFetch.js"



document.addEventListener("DOMContentLoaded", (e)=>{

    APP();
})

window.addEventListener("hashchange", (e)=>{

    APP();
})




document.addEventListener('change', (event) => {

    if(event.target.matches(".mySelect")){


        

        let local = event.target.value;
        localStorage.setItem("ubicationByRegion", local)

        getDataBycountryRegion(local)
        console.log(local)

        location.hash="#/search"
    }
    // const resultado = document.querySelector('.resultado');
    // resultado.textContent = `Te gusta el sabor ${event.target.value}`;
    
});


document.addEventListener("click", (event)=>{


    if(event.target.matches(".moreCountry")){

        localStorage.setItem("DataCountry", event.path[3].id)
        console.log(event.path[3].id)
    }

    if(event.target.matches(".dark-theme-btn")){

        console.log("funciona")
        const $selectors = document.querySelectorAll("[data-dark]")

        $selectors.forEach(el=>{el.classList.toggle("darkMode")})

        let finders = document.querySelector(".selecting")

        finders.classList.toggle("countryFinder")
    }
})
