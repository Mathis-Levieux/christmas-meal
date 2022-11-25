const inputList = document.querySelector("#inputlist")
const inputModel = document.querySelector("#inputmodel")
const addGuestButton = document.querySelector("#addguest")
const delAllGuestButton = document.querySelector("#delallguest")
const delGuestButton = document.querySelector(".delguest")
const inputFirstName = document.getElementById("firstname")
const inputLastName = document.getElementById("lastname")
const inputModelTest = `<div id="inputmodel"><input placeholder="Nom" type="text" id="lastname" name="name">
    <input placeholder="Prénom" type="text" id="firstname" name="name">
    <img id="delguest" class="delguest" src="/icons8-signe-moins-18.png"></div>`
inputList.innerHTML = inputModelTest

// Ajoute un invité à chaque clic
addGuestButton.addEventListener("click", event => {
    inputList.appendChild(inputModel.cloneNode(true));
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

// Ajoute nom & prénom dans un tableau à chaque clic du bouton confirmer

const AddGuestListButton = document.querySelector("#addGuestListButton")
const lastNameArray = []
const firstNameArray = []
AddGuestListButton.addEventListener("click", () => {
    let lastNameList = document.querySelectorAll('#lastname')
    lastNameList.forEach(lastname => lastNameArray.push(lastname.value))
    let firstNameList = document.querySelectorAll('#firstname')
    firstNameList.forEach(firstname => firstNameArray.push(firstname.value))
    let i = 0
    const fullNameArray = []
    while (i < firstNameArray.length) {
        fullNameArray.push(`${lastNameArray[i]}  ${firstNameArray[i]}`)
        i++
    }
    console.log(fullNameArray)
})

//  console.log(`${lastNameArray[0]} ${firstNameArray[1]}`)

// const fullNameArray = (`${lastNameArray[0]}${firstNameArray[2]}`)

// let i = 0
// while (i < firstNameArray.length) {
//     fullNameArray.push(`${lastNameArray[0]}${firstNameArray[2]}`)
//     i++
// }