import api from "./api";

export const Service = {
    login: async (credenciais) => {
        try {
            const response = await api.post('/auth', credenciais);
            return response;
        } catch (error) {            
			return Promise.reject(error);
        }
    },

    listaRotas: async () => {
        try {
            // const response = await api.get('/rotas');
            return await api.get('/rotas');
        } catch (error) {
			return Promise.reject(error);
        }
    },

    pegarRota: async (id) => {
        try {
            return await api.get(`/rotas/${id}`);
        } catch (error) {
            return Promise.reject(error);
        }
    }

}