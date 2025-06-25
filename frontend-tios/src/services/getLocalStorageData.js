import jwtDecode from "jwt-decode";

export const getTokenData = () =>{
    const token = localStorage.getItem("authToken")
    const data = jwtDecode(token);
    return data;
}