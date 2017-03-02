var app = angular.module('starter.controllers', []);

app.controller('AppCtrl', function($scope, Sessao, $timeout, $ionicModal) {
	$scope.bandeja = Sessao.bandeja;
	
	$scope.modal = {};

	$scope.data = {};
	$ionicModal.fromTemplateUrl('bandeja.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(m){
		$scope.data.item = 0;
		$scope.modal = m;
	});

	$scope.abreModal = function(){
		if($scope.bandeja.length > 0)
			$scope.modal.show();		
	}

	$scope.fechaModal = function(){
		$scope.modal.hide();	
	}

	//Inserção de Edição
	$scope.input = {};
	$scope.input.quant = 1;

	$ionicModal.fromTemplateUrl('modal-edicao.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(m){
		$scope.modalNumber = m;
	});

	

	$scope.editarItem = function(){
		$scope.input.quant = Sessao.bandeja[$scope.data.item].quantidade;
		$scope.modalNumber.show();
	}

	$scope.confirmarEdicao = function(){
		Sessao.bandeja[$scope.data.item].quantidade = $scope.input.quant;
		Sessao.bandeja[$scope.data.item].valor =  $scope.input.quant * Sessao.bandeja[$scope.data.item].item.preco;
		$scope.modalNumber.hide();
	}

	$scope.cancelarEdicao = function(){
		$scope.modalNumber.hide();
		$scope.input.quant = 1;
	}
	//FIM/Inserção de Edição


});
