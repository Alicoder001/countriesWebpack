import "../css/main.css";
import getData from "./request";
import { updateUL } from "./updateUI";
import "./filter";
const API = "https://restcountries.com/v2/all";
getData(API)
	.then((data) => {
		updateUL(data);
	})
	.catch((err) => {
		alert(err);
	});
