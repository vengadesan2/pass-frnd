import axios from 'axios'

const AxiosService = axios.create({
    baseURL: "https://pass-back-uvok.onrender.com",
    // baseURL:"https://chillhub.onrender.com",
    headers : {
        "Content-Type" : "application/json",
        Authorization:localStorage.getItem('token')
    }
})

AxiosService.interceptors.request.use((config)=>{
    const token = sessionStorage.getItem('token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},(error)=>{
    return Promise.reject(error)
})

export default AxiosService
