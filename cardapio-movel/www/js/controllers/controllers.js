var app = angular.module('starter.controllers', []);

app.controller('AppCtrl', function($scope, Sessao, $ionicModal, $timeout) {
	$scope.bandeja = Sessao.bandeja;
});
