let carts = document.querySelectorAll('addcart');

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartStorge();
    })
}

function getItem() {
    let itemNumbers = localStorage.getItem('item');
    if (itemNumbers) {
        document.querySelector('.click').textContent = itemNumbers;
    }
}

function cartStorge() {
    let itemNumbers = localStorage.getItem('item') || 0;
    itemNumbers = parseInt(itemNumbers);
    localStorage.setItem('item', itemNumbers + 1);

    document.querySelector('.click').textContent = itemNumbers + 1;
}

function AddItemLoc(item) {
    var itemNumbers = localStorage.getItem(item) || 0;
    itemNumbers = parseInt(itemNumbers);
    localStorage.setItem(item, itemNumbers + 1);
    document.querySelector('.click').textContent = itemNumbers + 1;
}

function displayCart() {
    let cartItem = localStorage.getItem("item")
    cartItem = parseInt(cartItem);
    let ifCart = document.querySelector(".checkoutmain");
    if (cartItem && ifCart) {
        console.log(cartItem);
    }
}

getItem();
displayCart();

