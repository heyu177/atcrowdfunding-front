import axios from 'axios'

const baseUrl="/api";

export const login= (params) => axios.post(`${baseUrl}/doLogin`,{params});

export const getUsername= () => axios.post(`${baseUrl}/getUsername`);

export const doLogout= () => axios.post(`${baseUrl}/doLogout`);