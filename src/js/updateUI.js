const cardsEl = document.querySelector(".cards");
const countryInfo = document.querySelector(".country-info");
function updateUL(data) {
	cardsEl.innerHTML = "";
	data.forEach((item) => {
		const commonName = item.name;
		const nativeName = item.nativeName;
		const population = item.population;
		const capital = item.capital ? item.capital : "No Capital";
		const flags = item.flags.svg;
		const region = item.region;
		cardsEl.innerHTML += ` <li class="cards__item">
        <a href="./about.html?country=/name/${commonName}">
            <img
                src="${flags}"
                alt="${commonName}-flag"
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
function aboutUI(data) {
	console.log(data);
	const {
		name,
		nativeName,
		flags,
		currencies,
		languages,
		population,
		region,
		tld,
		borders,
		capital,
		subregion,
		topLevelDomain,
	} = data;
	countryInfo.innerHTML = `
    <img
        class="country-info__img"
        src="${flags.svg}"
        alt="${name}-flag"
        width="560"
        height="400" />
    <div class="country-info__content">
        <h2>${name}</h2>
        <ul class="country-info__list">
            <li class="country-info__item">
                <p class="name">
                    Native Name
                    <span>${nativeName}</span>
                </p>
                <p class="population">
                    Population:
                    <span>${population}</span>
                </p>
                <p class="region">
                    Region:
                    <span>${region}</span>
                </p>
                <p class="sub-region">
                    Sub Region:
                    <span>${subregion}</span>
                </p>
                <p class="capital">
                    Capital:
                    <span>${capital ? capital : "No Capital"}</span>
                </p>
            </li>
            <li class="country-info__item">
                <p class="name">
                    Top Level Domain:
                    <span>${topLevelDomain}</span>
                </p>
                <p class="population">
                    Currencies:
                    <span>${currencies[0].name}</span>
                </p>
                <p class="region">
                    Languages:
                    <span>${Object.values(languages[0])}</span>
                </p>
            </li>
        </ul>

        <div class="country-info__borders">
            <h3>Border Countries:</h3>
            ${
				borders
					? borders.map((border) => {
							return `<a href="./about.html?country=/alpha/${border}">${border}</a>`;
					  })
					: "No borders"
			}
        </div>
    </div>
`;
}
export { updateUL, aboutUI };
