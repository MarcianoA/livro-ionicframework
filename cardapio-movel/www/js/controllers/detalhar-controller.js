app.controller('DetalharCtrl', function($scope, $stateParams, CardapioServices, Sessao){
	$scope.item = {};


	CardapioServices.getDetalheItem($stateParams.itemID, function(item){
		$scope.item = item;
	});

	$scope.inserirPedido = function(quant){
		Sessao.bandeja.push({item: $scope.item, quantidade : quant, dataHora : new Date()});
	}
	
})