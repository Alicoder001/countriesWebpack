const modeBtn = document.querySelector(".header__dark-mode");
const bodyEl = document.querySelector("body");

modeBtn.addEventListener("click", (e) => {
	e.preventDefault();
	bodyEl.classList.toggle("dark-mode");
	if (!localStorage.getItem("mode")) {
		localStorage.setItem("mode", "dark");
	} else {
		localStorage.clear();
	}
	console.log();
});
export function localChecker() {
	if (localStorage.getItem("mode")) {
		bodyEl.classList.toggle("dark-mode");
	}
}
