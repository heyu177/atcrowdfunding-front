import axios from 'axios'

const baseUrl="/api";

/* const formDataAxios=axios.create({
    baseURL:baseUrl,
    headers:{'Content-Type': 'application/x-www-form-urlencoded'}
}); */

export const login= (params) => axios.post(`${baseUrl}/doLogin`,params);

export const getUsername= () => axios.post(`${baseUrl}/getUsername`);

export const doLogout= () => axios.post(`${baseUrl}/doLogout`);

export const getUsers= (params) => axios.get(`${baseUrl}/user/index`,{params});