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
		return {
			checkWidth: function(element) {
				console.log(this);
				console.log(element);
				var width = this.width();
				console.log(width);
				if (width === 161) {
					element.remove();
				}
				else {
					element.width = 300;
				}
			},
			checkBroken: function() {

			}
		}
	})