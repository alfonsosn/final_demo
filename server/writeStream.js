var createEvent = function(exam) {
	this.date = exam.examDate,
	this.duration = exam.examSched,

	this.hour = "",
	this.min  = "",
	this.ISOstring = "",

	this.startTime = "",
	this.endTime = "",

	this.DSTAMP  = "",
	this.DTSTART = "",
	this.DTEND = "",

	/*
		functional for program - padding and month
	*/

	this.padding = function(number) {
		if (number < 10) return '0' + number
		else return	number
	},

	/////// PROPERTIES OF CONSTRUCTOR ////////

	/*
		obtains duration hours and mins where exam start
		has to parse due to colon
	*/

	this.parseHourAndMin = function() {
		if (this.duration[1] === ':') {
			this.hour  = "0" + this.duration[0]
			this.min = this.duration.substr(2, 2)
		}
		else {
			this.hour  = this.duration.substr(0, 2)
			this.min = this.duration.substr(3, 2)
		}
	},


	this.getExamDateISO = function(){
		this.ISOstring = this.date.split('-').join("")
								  .split('.').join("")
								  .split(':').join("")
								  .slice(0, -10);
	},

	this.getHourAndMin = function(){
		this.parseHourAndMin()
		if (this.duration.indexOf('am') === -1) 
			this.hour = (parseInt(this.hour) + 12).toString()
		
		this.startTime = this.hour + this.min + "00"
		this.endTime = this.padding((parseInt(this.hour) + 2)).toString() + this.min + "00"
	},

	this.getStamps = function () {
		this.DTSTART = this.ISOstring + this.startTime
		this.DTEND = this.ISOstring + this.endTime
		var today = new Date();
		this.DSTAMP = today.toISOString().split('-').join("")
										 .split('.').join("")
										 .split(':').join("")
										 .slice(0, -4) + 'Z'
	},

	this.getSchedules = function() {
		this.getExamDateISO()
		this.getHourAndMin()
		this.getStamps()
	}
	
	this.printEventString = function() {
		this.getSchedules();

		return '\n'+ "BEGIN:VEVENT" + '\n' +
		"DTSTAMP:" + this.DSTAMP 	+ '\n' + 
		"DTSTART:" + this.DTSTART 	+ '\n' + 
		"DTEND:"   + this.DTEND 	+ '\n' + 
		"SUMMARY:FINAL EXAM" 		+ '\n' +
		"LOCATION:HUNTER" 			+ '\n' +
		"UID:"		+ this.DSTAMP +  "@warm-mesa-70826.herokuapp.com" + '\n' +
		"END:VEVENT" 
	}
}

var createCalendarData = function(arr){
	var calendar = 	"BEGIN:VCALENDAR" 			+ '\n' +
					"VERSION:2.0"				+ '\n' +
					"CALSCALE:GREGORIAN"		+ '\n' +
					"X-WR-CALNAME:My FINALS";

	arr.forEach(function(element){
		var obj = new createEvent(element)
		calendar += obj.printEventString()
	})

	calendar += '\n' + "END:VCALENDAR";

	return calendar
}

module.exports = createCalendarData;

