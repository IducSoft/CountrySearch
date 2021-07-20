


export function CountryFinder(){

    const $CountryFinder = document.createElement("div")
    $CountryFinder.id="countryFinder"
    $CountryFinder.classList.add("container", "mt-5")
    $CountryFinder.innerHTML= `
    
    
        <div class="container" style="min-width: 10rem; max-width: 30rem;">
            <img src="./APP/assets/images/coronavirus.svg" class="img-fluid" alt="error">
            <h2 class="text-center my-5 selecting fs-1" contenteditable="true" data-dark>Country finder</h2>
        </div>

        
    `;

    return $CountryFinder;
}