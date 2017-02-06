var app = angular.module('starter.controllers', []);

app.controller('AppCtrl', function($scope, Sessao, $ionicModal, $timeout) {
	//Nenhuma function
	$scope.bandeja = Sessao.bandeja;
	$scope.bandeja = [];
});
