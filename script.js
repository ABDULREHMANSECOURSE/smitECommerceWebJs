function displayNoneOrOther(element, currentDisplay) {
    const el = document.querySelector(element)
    el.style.display = el.style.display === currentDisplay ? "none" : currentDisplay
}

const productsContainer = document.querySelector('.products');

function loadProduct(category) {
    if (category) {
        document.querySelector('.showAll').style.display = "block"
    } else {
        document.querySelector('.showAll').style.display = "none"

    }
    productsContainer.innerHTML = "";

    const products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach(product => {

        if (category && product.category !== category) return;

        productsContainer.innerHTML += `
        <span class="productOverView product">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>${"Price: $" + product.price}</p>
        <p>${"Category: " + product.category}</p>
        </span>
    `;
    });
}
loadProduct();