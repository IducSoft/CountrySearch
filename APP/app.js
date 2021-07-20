
import { CountryFinder } from "./components/CountryFinder.js";
import { searchAndRegion } from "./components/searchAndRegion.js";
import { whereAndDarkMode } from "./components/whereAndDarkMode.js";
import { Router } from "./helpers/router.js";


export function APP(){

    const $root = document.getElementById("root");
    $root.innerHTML = null;
    $root.appendChild(whereAndDarkMode());
    $root.appendChild(searchAndRegion());
    $root.appendChild(CountryFinder());
    
    


    Router()
}




