var fs = require('fs');

function createEvent(examSchedule){
		this.date = examSchedule.examDate,
		this.fullSched = examSchedule.examSched,

		this.hours = "",
		this.mins  = "",
		this.startTime = "",
		this.endTime = "",
		this.string = "",
		this.DSTAMP  = "",
		this.DTSTART = "",
		this.DTEND = "",

		this.parseHoursAndMins = function() {
			if (this.fullSched[1] === ':') {
				this.hours  = "0" + this.fullSched[0]
				this.mins = this.fullSched.substr(2, 2)
			}
			else {
				this.hours  = this.fullSched.substr(0, 2)
				this.mins = this.fullSched.substr(3, 2)
			}
		},

		this.padding = function(number) {
			if (number < 10) return '0' + number
			else return	number
		},

		this.getFullMonth = function(){
			var month = this.date.getMonth() + 1
			if (month < 10) return "0" + month
			else return month
		},
		
		this.parsedDate = function(){
			this.string += this.date.getFullYear()
			this.string += this.getFullMonth()
			this.string += this.date.getDate()
			this.string += 'T'
			return this.string
		},

		this.getHours = function(){
			this.parseHoursAndMins()
			if (this.fullSched.indexOf('am') === -1) this.hours = (parseInt(this.hours) + 12).toString()
			this.startTime = this.hours + this.mins + "00"
			this.endTime = this.padding((parseInt(this.hours) + 2)).toString() + this.mins + "00"
		},

		this.getDStamp = function () {
			var today = new Date();
			this.DSTAMP = today.toISOString().split('-').join("").split('.').join("").split(':').join("").slice(0, -4) + 'Z'
		},

		this.getSchedules = function() {
			this.parsedDate()
			this.getHours()
			this.DTSTART = this.string + this.startTime
			this.DTEND = this.string + this.endTime
			this.getDStamp()
		}

		this.eventString = function() {
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

var eventContents = function(arr){
	var calendar = ""
	arr.forEach(function(element){
		var obj = new createEvent(element)
		obj.getSchedules()
		calendar += obj.eventString()
	})
	return calendar
}

var calendarString =
		"BEGIN:VCALENDAR" 			+ '\n' +
		"VERSION:2.0"				+ '\n' +
		"CALSCALE:GREGORIAN"		+ '\n' +
		"X-WR-CALNAME:My FINALS"    + 
		eventContents(array)		+
		'\n' + "END:VCALENDAR";

// console.log(calendarString)

// fs.writeFile('finals.ics', calendarString, function(err){
//   if (err) throw err;
//   console.log('It\'s saved!');
// });

