import axios from "axios";

export const api = axios.create({
    //baseURL: "http://192.168.0.113:19000",
    //baseURL: "http://0.0.0.0:3333",
    //baseURL: "http://192.168.1.18:2222",
    baseURL: "http://localhost:3333",
    //baseURL: "http://localhost:5555/",
});

api.defaults.baseURL = "http://localhost:3333";
