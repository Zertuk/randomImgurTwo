'use strict';

angular.module('randomImgurApp')
	.controller('MainCtrl', function ($scope, $http) {
		$scope.randomImgur = {};
		$scope.imageArray = [];
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
			for (var i = 0; i < 50; i++) {
				$scope.testImage();
			}
		};
		$scope.testImage = function() {
			var url = 'http://i.imgur.com/' + $scope.generateURL() + '.png';
			var test = new Image();
			test.src = url;
			test.onload = function() {
				var width = test.width;
				console.log(width);
				if (width === 161 || width === 24 || width === 162) {
					$scope.testImage();
					$scope.removed = $scope.removed + 1;
				}
				else {
					$scope.imageArray.push(test.src)
					$scope.i = $scope.i + 1;
					$scope.$apply();
				}
			}
		}

		$scope.loadImages();



	});
