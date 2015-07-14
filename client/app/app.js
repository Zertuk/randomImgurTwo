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
		return {
			checkBottom: function(scope, element, attrs) {
				element.bind("scroll", function() {
		    		var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
		    		var body = document.body, html = document.documentElement;
		   			var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
		    		var windowBottom = windowHeight + window.pageYOffset;
		    		if (windowBottom >= docHeight) {
		      			$scope.loadImages();
		    		}
		    		else {
		    			console.log('test');
		    		}
				});
			}
		}
	})
	.directive('imageonload', function() {
    	return {
        	restrict: 'A',
       		link: function(scope, element, attrs) {
            	element.bind('load', function() {
                	var width = element.width();
                	// element.parent().parent().css('display', 'none');
                	// console.log(width);
				if (width === 161 || width === 162 || width === 24) {
						var rand = Math.random();
						if (rand > 0.5) {
							element.attr('src', 'http://i.imgur.com/smWkS.png');
						}
						else {
							element.attr('src', 'http://i.imgur.com/uvFxa.png');
						}
						
						// element.parent().parent().remove();
						// console.log('removed:')
					}
					else {
						// console.log('good:')
						// element.parent().parent().css('display', 'block');
					}
           		});
        	}
    	};
	});