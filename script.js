const inputList = document.querySelector("#inputlist")
const inputModel = document.querySelector("#inputmodel")
const addGuestButton = document.querySelector("#addguest")
const delAllGuestButton = document.querySelector("#delallguest")
const delGuestButton = document.querySelector("#delguest")

// Ajoute un invité à chaque clic

addGuestButton.addEventListener("click", () => {
    inputList.appendChild(inputModel.cloneNode(true));
})



// Supprime toute la liste, puis recrée un invité

delAllGuestButton.addEventListener("click", () => {
    inputList.innerHTML = ""
    inputList.appendChild(inputModel.cloneNode(true));
})


// Supprime l'invité

// delGuestButton.addEventListener("click", () => {
//     inputModel.parentNode.removeChild(inputModel);
// })