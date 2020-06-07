let buttonSelected = document.querySelector("#page-home main a")
let modalSelected = document.querySelector("#modal")
let closeSelected = document.querySelector("#modal .header a")

buttonSelected.addEventListener("click", () => {
    modalSelected.classList.toggle("hide");
})

closeSelected.addEventListener("click", () => {
    modalSelected.classList.toggle("hide");
})