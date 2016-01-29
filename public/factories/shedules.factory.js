app.factory('scheduleFactory', function(){
	var threeHours = [ 'T, W, F', 'T, F', 'M, Th', 'M, W, Th', 'T, Th', 'M, W', 'W', 'W, S']
	var fourHours = ['M, Th', 'M, W', 'T, F', 'T, Th', 'W, S']

	return {
		getSchedule: function(){
			return schedule;
		},

		createSchedule: function(num){
			if (num === 3) schedule = threeHours 
			if (num === 4) schedule = fourHours
		
			return schedule.sort()
		},

		clearSchedule: function(){
			return schedule = []
		}
	}
})