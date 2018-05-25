'use strict';

const WEMO_API    = 'https://wemo.kampusgo.xyz/v1';
const GUDANG_API = '';

const API  = {
    loginUser(username, password) {
    	let formBody = new FormData();

	    formBody.append("username", username)
	    formBody.append("password", password)

        return fetch(WEMO_API+"/user/login", {
            method: "POST",
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formBody
        })
    }
}

export default API;