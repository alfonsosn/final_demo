app.factory('classesFactory', function($http){
	return {
		getClasses: function(queryObj) {
			var config = {} 
			config.params = queryObj;

			return $http.get('/classes', config)
        	.then(function (res) {
          		return res.data;
        	});
		}
	}
})