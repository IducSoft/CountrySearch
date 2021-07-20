

export function ListCountryForRegion(){

    const $ListCountryForRegion = document.createElement("div")
    
    $ListCountryForRegion.classList.add("container", "mt-5");

    $ListCountryForRegion.innerHTML = `
    
    
        <div class="row row-cols-4 row-cols-md-3 row-cols-lg-2 justify-content-center" id="countryForRegion">
            
        </div>
    `;

    return $ListCountryForRegion;
}