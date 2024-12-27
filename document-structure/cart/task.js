const products = document.querySelectorAll('.product');
const cart = document.querySelector('.cart');
const cartProducts = document.querySelector('.cart__products');

const updateCartVisibility = () => {
    cart.style.display = cartProducts.children.length > 0 ? 'block' : 'none';
};

products.forEach(product => {
    const decButton = product.querySelector('.product__quantity-control_dec');
    const incButton = product.querySelector('.product__quantity-control_inc');
    const quantityValue = product.querySelector('.product__quantity-value');
    const addButton = product.querySelector('.product__add');

    decButton.addEventListener('click', () => {
        const currentQuantity = parseInt(quantityValue.textContent, 10);
        if (currentQuantity > 1) {
            quantityValue.textContent = currentQuantity - 1;
        }
    });

    incButton.addEventListener('click', () => {
        const currentQuantity = parseInt(quantityValue.textContent, 10);
        quantityValue.textContent = currentQuantity + 1;
    });

    addButton.addEventListener('click', () => {
        const productId = product.dataset.id;
        const productImage = product.querySelector('.product__image').src;
        const productQuantity = parseInt(quantityValue.textContent, 10);

        let cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

        if (cartProduct) {
            const cartProductCount = cartProduct.querySelector('.cart__product-count');
            cartProductCount.textContent = parseInt(cartProductCount.textContent, 10) + productQuantity;
        } else {
            cartProduct = document.createElement('div');
            cartProduct.className = 'cart__product';
            cartProduct.dataset.id = productId;
            cartProduct.innerHTML = `
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${productQuantity}</div>
                <button class="cart__product-remove">Удалить</button>
            `;
            cartProducts.appendChild(cartProduct);

            const removeButton = cartProduct.querySelector('.cart__product-remove');
            removeButton.addEventListener('click', () => {
                cartProduct.remove();
                updateCartVisibility();
            });
        }

        updateCartVisibility();
    });
});

updateCartVisibility();