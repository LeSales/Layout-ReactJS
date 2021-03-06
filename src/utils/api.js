import axios from 'axios';

const apikey = '603ec5e9acc40f765fede363';

let restdb = axios.create({
    baseURL: 'https://desafiocsp-777b.restdb.io/rest',
    timeout: 10000,
    headers: { 'x-apikey': apikey }
});

export { apikey, restdb };