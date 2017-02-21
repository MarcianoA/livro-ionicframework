var app = angular.module('starter.controllers', []);

app.controller('AppCtrl', function($scope, Sessao, $timeout, $ionicModal) {
	$scope.bandeja = Sessao.bandeja;
	
	$scope.modal = {};
	
	$ionicModal.fromTemplateUrl('bandeja.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(m){
		$scope.modal = m;
	});

	$scope.abreModal = function(){
		$scope.modal.show();		
	}

	$scope.fechaModal = function(){
		$scope.modal.hide();	
		$scope.input.quant = 1;	
	}
});
