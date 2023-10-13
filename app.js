if (!localStorage.item) {
    localStorage.setItem("item", "0");
}
let itemNumbers = parseInt(localStorage.item);
document.querySelector('.click').innerText = itemNumbers;


document.querySelector(".button").addEventListener("click", AddItemLoc);
function AddItemLoc() {
    itemNumbers++;
    localStorage.setItem("item", itemNumbers);
    document.querySelector('.click').innerText = itemNumbers;
}
