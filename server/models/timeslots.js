var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	length:{
		type: Number
	},
	weeklySched: {
		type: String
	},
	classHours: {
		type: String
	},
	finalClass: {
		type: String
	},
	finalDate: {
		type: Date
	},
	examDay: {
		type: String 
	},
	examDate: {
		type: Date
	},
	examSched: {
		type: String
	}
});

module.exports = mongoose.model('timeslots', schema);

