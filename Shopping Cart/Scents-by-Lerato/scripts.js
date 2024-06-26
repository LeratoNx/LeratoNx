// scripts.js
let cart = [];
let total = 0;

function addToCart() {
    const quantity = parseInt(document.getElementById('quantityInput').value);

    // Example price per item (you can replace this with actual logic)
    const price = 800.00;

    const itemTotal = quantity * price;

    cart.push({ quantity, price, itemTotal });

    total += itemTotal;

    updateCartDisplay();
}

function clearCart() {
    cart = [];
    total = 0;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.quantity} x $${item.price.toFixed(2)} = $${item.itemTotal.toFixed(2)}`;
        cartList.appendChild(li);
    });

    document.getElementById('cart-total').textContent = total.toFixed(2);
}
