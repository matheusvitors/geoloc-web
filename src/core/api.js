import axios from "axios";
import useHeaders from "hooks/useHeaders";


const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.request.use(async (config) => {

	const headers = await useHeaders();

	if(!config.url?.endsWith('login')) {
		config.headers.token = headers.headers.token;
	}

	return config;
	
}); 

export default api;