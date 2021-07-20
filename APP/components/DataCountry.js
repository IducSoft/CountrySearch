

export function DataCountry(object){


    const $dataCountry = document.createElement("div");
    $dataCountry.classList.add("container", "mt-5")
    $dataCountry.innerHTML= `
    
    <div class="row">

        <div class="col-12 col-md-6">
            <img src="${object.flag}" alt="flag" class="img-fluid">
        </div>

        <div class="col-12 col-md-6 mt-5 mt-md-0">
            <h2>${object.name}</h2>
            <div class="row">
                <div class="col-12 col-md-6">
                    <p><strong>Native Name: </strong>${object.name}</p>
                    <p><strong>Population: </strong>${object.population}</p>
                    <p><strong>Region: </strong>${object.region}</p>
                    <p><strong>sub-Region: </strong>${object.subregion}</p>
                    <p><strong>Capital: </strong>${object.capital}</p>
                </div>
                <div class="col-12 col-md-6">
                    <p><strong>Top level Domain: </strong>${object.topLevelDomain[0]}</p>
                    <p><strong>Moneda: </strong>${object.currencies[0].code}</p>
                    <p><strong>Languages: </strong>${object.languages[0].name}</p>
                </div>
            </div>
            
            <p class="mb-4">Border Countries:</p>
            <div>${BordersCountries(object.borders)}</div>
        </div>

    </div>
    `;

    return $dataCountry;
}



function BordersCountries(el){

    let link = ""

    for (let index = 0; index < el.length; index++) {
        const element = el[index];
        
        link += `<span class="alert alert-success mt-4 mx-2">${element}</span>`
    }

    return link;
    
}