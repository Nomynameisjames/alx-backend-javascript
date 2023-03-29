export default function hasValuesFromArray(setArr, arr) {
	return arr.every((elem) => setArr.has(elem));
}
