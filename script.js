const inputList = document.querySelector("#inputlist")
const inputModel = document.querySelector("#inputmodel")
const addGuestButton = document.querySelector("#addguest")
const delAllGuestButton = document.querySelector("#delallguest")
const delGuestButton = document.querySelector(".delguest")
const inputFirstName = document.getElementById("firstname")
const inputLastName = document.getElementById("lastname")


const inputModelTest = `<div id="inputlist"><div id="inputmodel"><input placeholder="Nom" type="text" id="lastname" name="name">
    <input placeholder="Prénom" type="text" id="firstname" name="name">
    <img id="delguest" class="delguest" src="/icons8-signe-moins-18.png"></div>`
inputList.innerHTML = inputModelTest

// Ajoute un invité à chaque clic

addGuestButton.addEventListener("click", event => {
    inputList.appendChild(inputModelTest.cloneNode(true));
})



// Supprime toute la liste, puis recrée un invité

delAllGuestButton.addEventListener("click", () => {
    inputList.innerHTML = ""
    inputList.appendChild(inputModel.cloneNode(true));
})


// Supprime l'invité choisi

inputList.addEventListener("click", event => {
    if (event.target.classList.contains("delguest")) {
        event.target.parentElement.remove()
    }
})