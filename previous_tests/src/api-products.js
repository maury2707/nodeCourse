import fetch from "../node_modules  ";

const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json();

export {products};