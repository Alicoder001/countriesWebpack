const formEl = document.querySelector(".search");
const searchItem = document.querySelectorAll(".search__select li");
const searchSelect = document.querySelector(".search__select span");

searchItem.forEach((item) => {
	item.addEventListener("click", (e) => {
		e.preventDefault();
		const searchValue = e.target.innerHTML.toLowerCase().trim();
		searchSelect.textContent = searchValue;
		const cardsItem = document.querySelectorAll(".cards__item");
		const cardsRegion = document.querySelectorAll(".region span");
		cardsRegion.forEach((region, i) => {
			if (region.textContent.toLowerCase().includes(searchValue)) {
				cardsItem[i].style.display = "block";
			} else {
				cardsItem[i].style.display = "none";
			}
		});
	});
});
formEl.addEventListener("input", () => {
	const searchValue = formEl.search.value.toLowerCase();
	const cardsItem = document.querySelectorAll(".cards__item");
	const searchTitle = document.querySelectorAll(".cards__title");
	searchTitle.forEach((title, i) => {
		if (title.textContent.toLowerCase().includes(searchValue)) {
			cardsItem[i].style.display = "block";
		} else {
			cardsItem[i].style.display = "none";
		}
	});
});
