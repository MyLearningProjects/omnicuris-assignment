import BaseApi from "./baseApi.services";
import { API_ROUTES} from "./api.Constants";

class Api extends BaseApi {

    getModuleList = async (queryParams = {}) => {
		const endPoint = API_ROUTES.COURSES;
        const url = this.makeUrl(endPoint);
        const headers = this.getHeaders();
		try {
			const { data } = await this.makeRequest( queryParams,url,"GET",headers);
			return data;
		} catch (error) {
			console.log(error);
			throw error;
		}
    };
    
}


const ApiService = new Api();
Object.freeze(ApiService);

export default ApiService;