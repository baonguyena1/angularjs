'use strict';

var smarthome = angular.module('smarthome', ['ui.router', 'ui.bootstrap', 'appController']);

smarthome
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('login', {
            url: '/',
            template: '<h3>Xin Chao</h3>',
            controller: 'loginController'
        })
        $urlRouterProvider.otherwise('/');
    });

var appController = angular.module('appController', []);
appController.controller('loginController', function($scope){});
