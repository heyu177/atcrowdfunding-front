import axios from 'axios'

const baseUrl="/api";

/* const formDataAxios=axios.create({
    baseURL:baseUrl,
    headers:{'Content-Type': 'application/x-www-form-urlencoded'}
}); */
// 登陆
export const login= params => axios.post(`${baseUrl}/doLogin`,params);

// 从会话当中得到用户名
export const getUsername= () => axios.post(`${baseUrl}/getUsername`);

// 退出
export const doLogout= () => axios.post(`${baseUrl}/doLogout`);

// 分页查询用户信息
export const getUsers= params => axios.get(`${baseUrl}/user/index`,{params});

// 新增用户
export const addUser= params => axios.post(`${baseUrl}/user/insert`,params); 