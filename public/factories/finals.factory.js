var finalsAdded = []

app.factory('finalsFactory', function($http){
	return {
		addFinals: function(obj){
			finalsAdded.push(obj)
		},
		obtainFinals: function(){
			return finalsAdded;
		},
		downloadFinals: function(obj){
			var obj = {
				params: finalsAdded
			}
			
			return $http.post('/schedule', obj)
			.then(function (res) {
				console.log(res)
			})
		},
		clearFinals: function(){
			finalsAdded = []
		}
	}
})
