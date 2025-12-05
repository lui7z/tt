import axios from "axios";

const API_IP = "127.0.0.1";   // configure conforme necessário
const API_PORTA = 3001;

export const api = axios.create({
    baseURL: `http://${API_IP}:${API_PORTA}`
});

export default api;
