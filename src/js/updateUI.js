const cardsEl = document.querySelector(".cards");

function updateUL(data) {
	cardsEl.innerHTML = "";
	data.forEach((item) => {
		console.log(item);

		const commonName = item.name;
		const nativeName = item.nativeName;
		const population = item.population;
		const capital = item.capital ? item.capital : "No Capital";
		const flags = item.flags.svg;
		const region = item.region;
		cardsEl.innerHTML += ` <li class="cards__item">
        <a href="./about.html">
            <img
                src="${flags}"
                alt="germany-flag"
                width="267"
                height="160" />
            <div class="cards__item-inner">
                <h3 class="cards__title">${commonName}</h3>
                <p class="nativeTitle">${nativeName}</p>

                <p class="population">
                    Population: <span>${population}</span>
                </p>
                <p class="region">
                    Region: <span>${region}</span>
                </p>
                <p class="capital">
                    Capital: <span>${capital}</span>
                </p>
            </div>
        </a>
    </li>`;
	});
}

export { updateUL };
