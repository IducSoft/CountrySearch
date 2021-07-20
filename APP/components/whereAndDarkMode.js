

export function whereAndDarkMode(){

    const $whereAndDarkMode = document.createElement("div");
    $whereAndDarkMode.classList.add("shadow")
    $whereAndDarkMode.innerHTML = `
    <div class="d-flex justify-content-between container align-items-center py-3 flex-column flex-sm-row">
        <h1 class="fs-4 mb-sm-0 mb-3">Where in the world?</h1>
        <div>
        <input type="checkbox" id="toggle" class="toggle--checkbox dark-theme-btn">
        <label for="toggle" class="toggle--label">
        <span class="toggle--label-background"></span>
        </label>
        </div>
    </div>
    `;

    return $whereAndDarkMode;
}