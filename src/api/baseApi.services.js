import request from "axios";

const baseUrl = process.env.REACT_APP_API_BASEURL;
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

class BaseApi {
	
	/*
	* http external call (GET|POST)
	* @param {object} payload
	* @param string url
	* @param string method
	* @param {object} extraHeaders
	* @param int timeout
	* @returns {Promise}
	*/
	makeRequest = async (
		queryParams = {},
		url= "",
		method = "GET",
		headers = {},
		timeout = 60000
		) => {
			const requestOptions = {
			method: method,
			url: url,
			headers: headers,
			params:queryParams,
			timeout:timeout,

		};
		return await request(requestOptions);
	};

	/*
	 * @description : getHeaders
	 * @returns {object}
	 */
	getHeaders = () => {
		return {
			"hk-access-token" : accessToken
		};
    };
    
    /*
	 * @description : makeUrl
	 * @param string endPoint
	 * @returns string
	 */
	makeUrl = (endPoint) => {
		return `${baseUrl}${endPoint}`;
	};


}

export default BaseApi;
