import { products } from "./api-products.js";

const button = document.getElementById('click');

button.addEventListener("click", async function () {
    console.log(products);
})

// console.log(products);
console.log('hey');