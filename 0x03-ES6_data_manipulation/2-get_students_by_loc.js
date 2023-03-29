export default function getStudentsByLocation(arr) {
	if (arr instanceof Array){
		return arr.filter((item) => item.location === 'San Francisco')
	}
	return []
}
