'use strict';

angular.module('randomImgurApp')
	.controller('MainCtrl', function ($scope, $http, $window) {
		$scope.randomImgur = {};
		$scope.imageArray = [];
		$scope.urlArray = [];
		$scope.removed = 0;

		$scope.generateURL = function() {
			var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
			var generatedString = '';
			var length = 5;
			for (var i = 0; i < length; i++) {
				var randomChar = Math.floor(Math.random() * charSet.length);
				generatedString = generatedString + charSet.substring(randomChar, randomChar + 1);
			}
			return generatedString;
		};

		$scope.loadImages = function() {
			var count = 0;
			for (var i = 0; i < 52; i++) {
				$scope.testImage();
			}
		};
		$scope.testImage = function() {
			var generated = $scope.generateURL();
			var url = 'http://i.imgur.com/' + generated + '.png';
			var test = new Image();
			test.src = url;
			test.onload = function() {
				var width = test.width;
				var height = test.height;
				if (width === 161 || width <= 24 || width === 162 || height < 20 ) {
					$scope.testImage();
					$scope.removed = $scope.removed + 1;
				}
				else {
					$scope.imageArray.push(test.src)
					$scope.urlArray.push(generated);
					$scope.i = $scope.i + 1;
					$scope.$apply();
				}
			}
		}

		$scope.loadImages();

		angular.element($window).bind("scroll", function() {
		    var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
		    var body = document.body, html = document.documentElement;
		    var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
		    var windowBottom = windowHeight + window.pageYOffset;
		    if (windowBottom >= docHeight) {
		       $scope.loadImages();
		    }
		});



	});
