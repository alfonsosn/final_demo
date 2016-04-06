var finalsAdded = [];

var findByHashPushOrDelete = function(arr, obj){
  		for (var i = 0; i < arr.length; i++) {
    		if (arr[i].$$hashKey === obj.$$hashKey) {
      			arr.splice(i, 1)
      			return arr
    		}
  		}
  		arr.push(obj)
	}

app.factory('finalsFactory', function($http){
	return {
		addFinals: function(obj){
			findByHashPushOrDelete(finalsAdded, obj)
		},
		obtainFinals: function(){
			return finalsAdded;
		},
		downloadFinals: function(obj){
			var obj = {
				params: finalsAdded
			}
			return $http.post('/', obj, {responseType:'arraybuffer'})
		},
		clearFinals: function(){
			finalsAdded = []
		}
	}
})
