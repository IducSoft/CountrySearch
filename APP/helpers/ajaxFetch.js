
import { ListCountryForRegion } from "../components/ListCountryForRegion.js";
import { CountryRender } from "../components/CountryRender.js";
import { Error } from "../components/Error.js";
import { whereAndDarkMode } from "../components/whereAndDarkMode.js";
import { DataCountry } from "../components/DataCountry.js";
import { searchAndRegion } from "../components/searchAndRegion.js";

export async function getDataBycountryRegion(region){

    let request = `https://restcountries.eu/rest/v2/region/${region}`;


    try{

        let res = await fetch(request),
            json = await res.json();

        
        if(!res.ok){

            throw {
                status: res.status,
                statusText: res.statusText
            }
        }
        

        console.log(json)

        document.getElementById("countryFinder").innerHTML=null;
        document.getElementById("countryFinder").appendChild(ListCountryForRegion());

        let list = document.getElementById("countryForRegion")
        console.log(list)



        json.forEach(el => {
            
            list.appendChild(CountryRender(el))
        });
        
    }catch(err){

        let message = err.statusText || "Ocurrio un error";

        document.getElementById("countryFinder").innerHTML=null
        document.getElementById("countryFinder").appendChild(Error())

    }
}





export async function getDataCountry(capital){

    let request = `https://restcountries.eu/rest/v2/capital/${capital}`;


    try{

        let res = await fetch(request),
            json = await res.json();

        
        if(!res.ok){

            throw {
                status: res.status,
                statusText: res.statusText
            }
        }
        

        console.log(json)

        document.querySelector("#root").innerHTML=null;
        document.querySelector("#root").appendChild(whereAndDarkMode())
        document.querySelector("#root").appendChild(searchAndRegion())

        document.querySelector("#insertBtn").innerHTML= `
            
            <a href="#/search" class="btn btn-light">
            <i class="fas fa-arrow-left"></i>
            Back search</a>
        `;
        
        json.forEach((el)=>{

            document.querySelector("#root").appendChild(DataCountry(el))
        })



        
        
    }catch(err){

        let message = err.statusText || "Ocurrio un error";
        document.getElementById("countryFinder").innerHTML=null
        document.getElementById("countryFinder").appendChild(Error())
    }
}
