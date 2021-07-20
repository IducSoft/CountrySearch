

export function Error(){


    const $errorAjax= document.createElement("div")
    $errorAjax.classList.add("container") 
    $errorAjax.innerHTML= `
    
    <div class="container" style="min-width: 10rem; max-width: 30rem;">
        <img src="./APP/assets/images/3804918.jpg" class="img-fluid" alt="error">
        <h2 class="text-center display-3">Not found</h2>
    </div>
    `;

    return $errorAjax;
}