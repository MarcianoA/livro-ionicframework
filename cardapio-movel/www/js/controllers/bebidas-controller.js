app.controller('BebidasCtrl', function($scope, Sessao, CardapioServices){
	$scope.bebidas = CardapioServices.getBebidas();
});