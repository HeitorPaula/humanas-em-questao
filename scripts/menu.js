const dialogElement = document.querySelector("dialog");
const pagsLink = document.querySelector(".pags-link");
const escLink = document.querySelector(".esc-link");
const bodyElement = document.querySelector("body");

pagsLink.addEventListener("click", () => {
    dialogElement.showModal();
    bodyElement.classList.add("overfhidden");
})

escLink.addEventListener("click", () => {
    dialogElement.close();
    bodyElement.classList.remove("overfhidden");
})