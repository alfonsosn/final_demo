app.factory('scheduleFactory', function($http){
	return {
		getClassesSchedule: function(int){
			var config = {} 
			config.params = {length: int};

			return $http.get('/schedules', config)
        	.then(function (res) {
          		return res.data;
        	});
		}
	}
})