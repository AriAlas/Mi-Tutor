import axios from "axios"
export const register = newUser => {
    return axios
    .post("users/register", {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password,
            age: newUser.age,
            remote: newUser.remote,
            inperson: newUser.inperson,
            subjects: newUser.subjects,
            bio: newUser.bio,
    })
    .then(res => {
        console.log("Registered")
    })
}

export const login = user => {
    return axios.post("users/login", {
        email: user.email,
        password : user.password
    })
    .then(res=> {
        localStorage.setItem("userToken", res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}