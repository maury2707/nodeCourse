import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1'

function fetch_Data(urlAPI){
    return fetch(urlAPI);
}

/*
fetch_Data(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })
    .then(() => {
        console.log("Prueba de fetch de información");
    })
    .catch(error => console.log(error));
*/


fetch_Data(`${API}/products`)
    .then(response => response.json())
    .then(products => {
//        console.log(products)
//        console.log("Prueba-------------------------------------------------------")
        return fetch_Data(`${API}/products/${products[0].id}`);
    })
    .then(response => response.json())
    .then(product => {
        console.log(product);
        console.log("Prueba 1 -------------------------------------------------------")
        return fetch_Data(`${API}/categories/${product.category.id}`);
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
        console.log("Prueba 2 -------------------------------------------------------")
    })
    .catch(err => console.log(err))
    .finally(() => console.log("Finalized Transaction"));