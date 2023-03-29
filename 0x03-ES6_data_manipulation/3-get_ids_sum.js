
export default function getStudentIdsSum(arr) {
	const value =  arr.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
	return value
}
