import axios from 'axios'
import qs from 'qs'

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

// 修改用户
export const editUser= params => axios.put(`${baseUrl}/user/update`,params);

// 删除一个用户
export const deleteUser= params => axios.delete(`${baseUrl}/user/delete`,{params});

// 删除多个用户
export const deleteUsers= params => axios.delete(`${baseUrl}/user/deletes`,{params,
paramsSerializer:params => qs.stringify(params,{indices:false})});

// 获取角色列表
export const getRoles= params => axios.get(`${baseUrl}/user/getRoles`,{params});

// 分配角色
export const assignRole= params => axios.post(`${baseUrl}/user/doAssign`,params);

// 解除分配的角色
export const unAssignRole= params => axios.delete(`${baseUrl}/user/doUnAssign`,{params});

// 获取许可信息
export const async={
    enable:true,
    url:`${baseUrl}/permission/loadData`
}

// 添加许可信息
export const addPermission= params => axios.post(`${baseUrl}/permission/insert`,params);

// 修改许可信息
export const editPermission= params => axios.put(`${baseUrl}/permission/update`,params);