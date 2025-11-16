function displayNoneOrOther(element, currentDisplay) {
    const el = document.querySelector(element)
    el.style.display = el.style.display === currentDisplay ? "none" : currentDisplay
}

const productsContainer = document.querySelector('.products');

function loadProduct(category = "") {
    productsContainer.innerHTML = "";

    const products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach(product => {
        // If category is selected, filter
        if (category && product.category !== category) return;

        productsContainer.innerHTML += `
            <span class="product">
                <img src="${product.image}" alt="">
                <h6>${product.name}</h6>
                <h2>${product.price}</h2>
            </span>
        `;
    });
}
loadProduct();