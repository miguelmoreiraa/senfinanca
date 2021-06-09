import axios from "axios";

const api = axios.create({
    baseURL: "https://60b8f73980400f00177b5f1b.mockapi.io/semfinanca/gastos"
})

export default api;