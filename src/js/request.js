import loaderF from "./loader";
async function getData(recourse) {
	loaderF(true);
	const request = await fetch(recourse);
	if (!request.ok) {
		// loaderF(false);
		throw new Error("Nimadir xato !!!");
	}
	const data = await request.json();
	loaderF(false);
	return data;
}
export default getData;
