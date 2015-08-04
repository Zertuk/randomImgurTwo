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
	.directive('infiniteScroll', function() {
		return function($scope, elm, attr) {
			var raw = elm[0];
			var checkBounds = function() {
				var rectObject = raw.getBoundingClientRect();
				if (rectObject.bottom === window.innerHeight) {
					if (angular.element('.imgwrap').length % 52 === 0) {
						console.log('loading...')
						$scope.loadImages();
					}
				}
			};
			angular.element(window).bind('scroll load', checkBounds);
		}
	})