'use strict';

angular.module('randomImgurApp')
	.controller('MainCtrl', function ($scope, $http, $window) {
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
		$scope.loading = true;
		$scope.loadImages = function() {
			$scope.count = 0;
			var amount = 52;
			$scope.loading = true;
			for (var i = 0; i < amount; i++) {
				$scope.testImage();
				console.log(i);
			}
		};
		$scope.testImage = function() {
			var url = 'http://i.imgur.com/' + $scope.generateURL() + '.png';
			var test = new Image();
			test.src = url;
			test.onload = function() {
				var width = test.width;
				var height = test.height;
				//this is so that any broken images (161, 162, 24) or short images are removed;
				if (width === 161 || width <= 24 || width === 162 || height < 20 ) {
					$scope.testImage();
					$scope.removed = $scope.removed + 1;
				}
				else {
					$scope.imageArray.push(test.src)
					$scope.$apply();
				}
			}
		}
		$scope.loadImages();
	});
