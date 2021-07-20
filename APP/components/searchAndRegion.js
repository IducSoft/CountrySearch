


export function searchAndRegion(){

    const $searchAndRegion = document.createElement("div");

    $searchAndRegion.classList.add("mt-5", "container")
    $searchAndRegion.id="panel"
    $searchAndRegion.innerHTML = `

    <div class="row justify-content-between">
            <div class="col-12 col-md-4" id="insertBtn">
                
            </div>

            <div class="col-12 col-md-4 my-padding">

                <select class="form-select mySelect" aria-label="Default select example" data-dark>
                    <option selected>Escoger una regiòn</option>
                    <option value="Americas">America</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Oceania">Oceanìa</option>
                </select>
            </div>

    </div>
    `;


    return $searchAndRegion;
}

