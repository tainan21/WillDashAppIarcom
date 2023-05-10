import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_URL || "http://localhost:3333"
});

// Adiciona um interceptor para tratar erros de requisição
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // Erro de requisição (HTTP status code diferente de 2xx)
      if (error.response.status === 401) {
        // Erro de autenticação, redireciona para a tela de login
        // window.location.replace("/login")
      } else {
        // Outros erros de requisição
        console.error("Erro de requisição:", error.response.data);
      }
    } else if (error.request) {
      // Erro de rede (sem resposta do servidor)
      console.error("Erro de rede:", error.request);
    } else {
      // Outros erros
      console.error("Erro:", error.message);
    }
    return Promise.reject(error);
  }
);

export { api };
