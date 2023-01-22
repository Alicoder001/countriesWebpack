const loaderEl = document.querySelector(".loader");
function loaderF(data) {
	if (data) {
		loaderEl.classList.remove("hidden");
	} else {
		loaderEl.classList.add("hidden");
	}
}
export default loaderF
