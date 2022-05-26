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

}