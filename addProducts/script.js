function popup(text) {
    const popup = document.createElement('span');
    popup.className = 'popup';
    const p = document.createElement('p');
    p.textContent = text;
    popup.appendChild(p);
    document.body.appendChild(popup);
}
function popupGreen(text) {
    const popup = document.createElement('span');
    popup.className = 'popup';
    popup.style.backgroundColor = 'green';
    const p = document.createElement('p');
    p.textContent = text;
    popup.appendChild(p);
    document.body.appendChild(popup);
}

const viewBox = document.querySelector(".productOverView");
const pImg = document.getElementById("pImg");
const pName = document.getElementById("pName");
const pPrice = document.getElementById("pPrice");
const pCategory = document.getElementById("pCategory");
let imgURL = "";
pImg.addEventListener("change", () => {
    const file = pImg.files[0];
    imgURL = URL.createObjectURL(file);
    updatePreview();
});
pName.addEventListener("input", updatePreview);
pPrice.addEventListener("input", updatePreview);
pCategory.addEventListener("change", updatePreview);
function updatePreview() {
    viewBox.innerHTML = `
        ${imgURL ? `<img src="${imgURL}">` : ""}
        <h3>${pName.value}</h3>
        <p>${"Price: $" + pPrice.value}</p>
        <p>${"Category: " + pCategory.value}</p>
    `;
}

function addProductFunc() {
    const imageFile = pImg.files[0];
    if (!imageFile) {
        popup("No image selected! Please choose an image.");
        return;
    }
    const image = new Image();
    image.src = URL.createObjectURL(imageFile)
    image.onload = function () {
        if (image.height !== image.width) {
            popup("Image is not square!");
            return;
        }
        if (pName.value === "") {
            popup("Product ka kia name he")
            return;
        }
        if (pPrice.value === "") {
            popup("Product ki kia price he")
            return;
        }
        if (pCategory.value === "") {
            popup("Select product category")
            return;
        }

        const imageReader = new FileReader();
        imageReader.onload = function (e) {

            const products = JSON.parse(localStorage.getItem('products')) || []

            const product = {
                image: e.target.result
                , name: pName.value
                , price: pPrice.value
                , category: pCategory.value
            }
            
            pImg.value = "";
            pName.value = "";
            pPrice.value = "";
            pCategory.value = "";
            imgURL = "";

            products.push(product)
            localStorage.setItem('products', JSON.stringify(products))
            popupGreen("Product added!");
        }
        imageReader.readAsDataURL(imageFile)

        updatePreview();
    }
}
updatePreview();