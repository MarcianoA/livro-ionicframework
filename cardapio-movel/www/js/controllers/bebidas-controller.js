app.controller('BebidasCtrl', function($scope, CardapioServices){

	$scope.bebidas = CardapioServices.getBebidas();


});