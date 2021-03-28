import axios from "axios";

//Define a URL base da origem para consumo das APIs

const api = axios.create({
    baseURL: 'https://www.qedu.org.br/api',
    headers: {
        'Accept': 'application/json, text/javascript, /; q=0.01',
        'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
        'Connection': 'keep-alive',
        'Cookie': 'PHPSESSID=jhjnd0gglj2fqdg9oktlquqlg4; _ga=GA1.3.1634986126.1616462762; _gid=GA1.3.1908195496.1616462762; _gat=1; _dc_gtm_UA-41291812-5=1; mp_5b377e1a83026071042a9b9e659df27f_mixpanel=%7B%22distinct_id%22%3A%20%221785cb05253609-017fc4365d873d8-7f23675c-1fa400-1785cb05254136%22%2C%22%24device_id%22%3A%20%221785cb05253609-017fc4365d873d8-7f23675c-1fa400-1785cb05254136%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%7D; _hjTLDTest=1; _hjid=ec9eac66-dc0a-493e-9f32-355e17252b3d; _hjFirstSeen=1; _hjAbsoluteSessionInProgress=0; _fbp=fb.2.1616462762841.1853404600; __atuvc=1%7C12; __atuvs=605943aadf97d22a000; __atssc=google%3B1; uvts=3c47d6a2-6d66-41df-5df7-f1df73db05c7; PHPSESSID=hip8d9qrgjhlmngq1t5ro4phu2',
        'Referer': 'https://www.qedu.org.br/busca',
        'TE': 'Trailers',
        'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:86.0) Gecko/20100101 Firefox/86.0',
        'X-NewRelic-ID': 'VQICWF9UABADUFZUAAUCXw==',
        'X-Requested-With': 'XMLHttpRequest'
    },
});


const api_materials = axios.create({
    baseURL: 'https://young-mountain-02170.herokuapp.com/api/',
    headers: {
        'Accept': 'application/json, text/javascript, /; q=0.01',
        'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
        'Connection': 'keep-alive',
        'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:86.0) Gecko/20100101 Firefox/86.0',
        'X-Requested-With': 'XMLHttpRequest'
    },
});




export default {api, api_materials};
