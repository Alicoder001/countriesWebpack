import "../css/main.css";
import "./mode";

import { localChecker } from "./mode";
import getData from "./request";
import { aboutUI } from "./updateUI";
localChecker();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const country = urlParams.get("country");
console.log(country);
const aboutApi = `https://restcountries.com/v2/${country}`;
console.log(aboutApi);
getData(aboutApi)
	.then((data) => {
		if (Array.isArray(data)) {
			aboutUI(data[0]);
		} else {
			aboutUI(data);
		}
	})
	.catch((err) => {
		alert(err);
	});
