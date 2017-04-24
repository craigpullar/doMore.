/* API functions */

export const GETRequest = (url, callback) => {
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", url, false);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send();
	let response = JSON.parse(xhttp.responseText);
	callback(response);

};
