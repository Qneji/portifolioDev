// acessando a div contacts do footer
const contacts = document.querySelector("#contacts");

// criando um novo link dentro do contacts
const newContact = document.createElement("a")

// criando a div que vai dentro do a
const newContactDiv = document.createElement("div")

// criando o img dentro da div
const newContactImg = document.createElement("img")
// colocando class na img
newContactImg.classList.add("blue-img")

// criando o p dentro da div
const newContactP = document.createElement("p")

// criando o svg dentro da div
const newContactSvg = document.createElement("svg")



// Adcionando o a ao contacts
contacts.append(newContact);

// Adcionando a div ao a
newContact.append(newContactDiv)
//adicionando a img ao a
newContact.append(newContactImg)

// adicionando o svg e o p ao div
newContactDiv.append(newContactSvg)
newContactDiv.append(newContactP)

newContactP.textContent = "Linkedin"
newContactImg.src = "./assets/icons/contact/arrow.svg"