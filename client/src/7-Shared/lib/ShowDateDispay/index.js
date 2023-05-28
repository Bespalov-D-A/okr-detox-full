export const ShowDateDisplay = (date, time) => {
	if(date && time) {
		if(date && !time) return ` - ${date}`
		else if(!date && time) return ` - ${time}`
		else return ` - ${date} ${time}`
	}else return " "
}
