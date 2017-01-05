app.controller('DetalharCtrl', function($scope, $stateParams, CardapioServices){
	$scope.item = {};


	CardapioServices.getDetalheItem($stateParams.itemID, function(item){
		$scope.item = item;
	});
	
})