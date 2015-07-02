'use strict';

angular.module('randomImgurApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute'
])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);
	})
	.factory('imgCheck', function($http) {
		console.log( angular.element('img').length)
		for (var j = 0; j < 5; j++) {
			for (var i = 0; i < angular.element('img').length; i++) {
				var width = angular.element('img')[i].clientWidth;
				if (width === 161 || width === 24) {
					angular.element('img')[i].remove();
				}
			}
		}
	})
