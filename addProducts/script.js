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
        <h3>${pName.value || ""}</h3>
        <p>${pPrice.value ? "Price: $" + pPrice.value : ""}</p>
        <p>${pCategory.value && pCategory.selectedIndex !== 0 ? "Category: " + pCategory.value : ""}</p>
    `;
}