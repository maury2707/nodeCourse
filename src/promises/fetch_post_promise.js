import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function post_Data(urlAPI, data){
    const response = fetch(urlAPI, {
        method : 'POST',
        mode : 'cors',
        credentials : 'same-origin',
        headers : {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify(data)
    });
    return response;
}

const data = {
  "title": "Poke Mega Poyo de fuego",
  "price": 9999,
  "description": "Este Lagarto se consigue con sharkCodes",
  "categoryId": 1,
  "images": ["https://placehold.co/600x400"]
}

post_Data(`${API}/products`, data)
    .then((result) => result.json())
    .then(result => console.log(result))
    .catch((err) => console.log(err)); 