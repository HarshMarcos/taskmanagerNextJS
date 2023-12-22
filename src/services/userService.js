import { httpAxios } from "@/helper/httpHelper";

export async function signUp(user){
    const userInfo = await httpAxios
        .post("/api/user",user)
        .then((res)=>res.data)
        .catch((e)=>console.log(e));
    return userInfo;
}


export async function login(loginData) {
    const result = await httpAxios
      .post("/api/login", loginData)
      .then((response) => response.data);
    return result;
  }
