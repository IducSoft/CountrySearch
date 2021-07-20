import { APP } from "../app.js";
import { getDataBycountryRegion } from "./ajaxFetch.js";
import { getDataCountry } from "./ajaxFetch.js";


export function Router(){

    let {hash} = location;


    if(hash === ""){


    }else if(hash === "#/search"){

        
        // let request = `https://restcountries.eu/rest/v2/name/${inputForSearch}`;

        // getDataByCountryName()

        let sessions = localStorage.getItem("ubicationByRegion")
        let selected=document.querySelector(".mySelect").value = sessions
        getDataBycountryRegion(sessions)
        console.log(sessions)

        document.querySelector("#insertBtn").innerHTML= `
            
            <a href="" class="btn btn-light" data-dark>
            <i class="fas fa-arrow-left" data-dark></i>
            Back To Home</a>
        `;
        


    }else if(hash === "#/country"){

        let countrySearch = localStorage.getItem("DataCountry")
        getDataCountry(countrySearch)

        
        
    }
}