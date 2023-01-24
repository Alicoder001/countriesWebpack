import "../css/main.css";
import getData from "./request";
import { updateUL } from "./updateUI";
import "./filter";
import "./mode";
import { localChecker } from "./mode";
const API = "https://restcountries.com/v2/all";
getData(API)
	.then((data) => {
		updateUL(data);
	})
	.catch((err) => {
		alert(err);
	});
localChecker();
