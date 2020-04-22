import axios from 'axios'

const baseUrl="/api";

export const login=(params) => axios.post(`${baseUrl}/doLogin`,{params});