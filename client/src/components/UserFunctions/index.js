import axios from "axios";

export const register = newUser => {
    return axios.post("user/register", {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
    })
    .then(res => {
        console.log("registered")
    })
}

export const login = user => {
    return axios 
    .post("users/login", {
        email: user.email,
        password: user.password
    })
    .then(res => {
        localStorage.setItem("userToken", res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}