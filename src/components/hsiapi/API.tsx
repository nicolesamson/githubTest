const API_LINK = "http://127.0.0.1:8000/api";
let token;

async function register(fullname: string, email: string, password: string) {
	const response = await fetch(API_LINK + "/register", {
		method: "POST",
		body: JSON.stringify({
			fullname: fullname,
			email: email,
			password: password
		}),
		headers : {
			"Content-Type": "application/json",
		}
	});

	const data = await response.json();

	return response
}

async function login(email: string, password: string) {
	const response = await fetch(API_LINK + "/login", {
		method: "POST",
		body: JSON.stringify({
			email: email,
			password: password
		}),
		headers : {
			"Content-Type": "application/json",
		}
	});

	const data = await response.json();

	if(response.status == 200) sessionStorage.setItem('access_token', JSON.stringify(data.access_token));

	return response
}

async function logout() {
	token = JSON.parse(sessionStorage.getItem('access_token') || '{}');
	const response = await fetch(API_LINK + "/logout", {
		method: "POST",
		headers: {
			"Authorization": "Bearer " + token,
			"Content-Type": "application/json"
		}
	});

	if(response.status == 200) {
		sessionStorage.removeItem('access_token')
		sessionStorage.removeItem('user_data')
	}

	return response
}

function hasAccessToken() {
	if(sessionStorage.getItem('access_token') !== null) {
		return true;
	}
	else {
		return false;
	}
}

async function getUser() {
	if(hasAccessToken()) {
		token = JSON.parse(sessionStorage.getItem('access_token') || '{}');
		const response = await fetch(API_LINK + "/user", {
			method: "GET",
			headers: {
				"Authorization": "Bearer " + token,
				"Content-Type": "application/json"
			}
		});

		const data = await response.json();

		if(response.status === 200) sessionStorage.setItem('user_data', JSON.stringify(data));

		return response.status
	}
	else {
		return
	}
}

function hasUserData() {
	if(sessionStorage.getItem('user_data') !== null) {
		return true;
	}
	else {
		return false;
	}
}

export { register, login, logout, hasAccessToken, getUser, hasUserData }