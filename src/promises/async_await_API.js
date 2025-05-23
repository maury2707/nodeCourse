import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetch_Data(urlAPI) {
    const response = await fetch(urlAPI);
    const data = (await response).json();
    return data
}

const pull_data = async (urlAPI) => {
    try {
        const products = await fetch_Data(`${API}/products`);
        const product = await fetch_Data(`${API}/products/${products[0].id}`);
        const category = await fetch_Data(`${API}/categories/${product.category.id}/`);

        console.log(category.name)
    } catch(err) {
        console.log(err)
    }
}

pull_data(API);