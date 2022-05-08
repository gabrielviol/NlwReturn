import axios from "axios"

export const api = axios.create({
    baseURL: 'http://172.30.168.249:3333'
})