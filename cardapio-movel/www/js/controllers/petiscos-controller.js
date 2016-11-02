app.controller('PetiscosCtrl', function($scope, CardapioServices){

	// $scope.petiscos = [
	// {'nome': 'Filé ao molho madeira', 'id' : 01, 'preco' : '60,00'},
	// {'nome': 'Camarão ao alho', 'id' : 02, 'preco' : '21,00'},
	// {'nome': 'Lagosta assada', 'id' : 03, 'preco' : '100,00'}
	// ]

	$scope.petiscos = CardapioServices.getPetiscos();

	// $scope.buscarPetiscos = function(){

	// }
});