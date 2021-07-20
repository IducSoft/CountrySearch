

export function CountryRender(object){

    const $CountryRender = document.createElement("div")
    $CountryRender.id= object.capital
    $CountryRender.dataset.dark=""

    $CountryRender.classList.add("card", "mx-3", "my-2", "reset-padding", "my15rem");

    $CountryRender.innerHTML= `
    
        <img src=${object.flag} class="card-img-top" alt="flag">
        <div class="card-body">
        <h5 class="card-title"><a href="#/country" class="btn btn-warning moreCountry" >${object.name}</a></h5>
        <p class="card-text"><strong>Population: </strong> ${object.population}</p>
        <p class="card-text"><strong>Region: </strong>${object.region}</p>
        <p class="card-text"><strong>Capital: </strong>${object.capital}</p>
        </div>
    `;

    return $CountryRender;
}