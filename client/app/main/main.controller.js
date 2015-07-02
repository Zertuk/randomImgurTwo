'use strict';

angular.module('randomImgurApp')
	.controller('MainCtrl', function ($scope, $http) {
		$scope.randomImgur = {};

		$scope.generateURL = function() {
			var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
			var generatedString = '';
			var numArray = [5, 6, 7];
			var random =  Math.floor(Math.random()*3);
			var length = 5;
			for (var i = 0; i < length; i++) {
				var randomChar = Math.floor(Math.random() * charSet.length);
				generatedString = generatedString + charSet.substring(randomChar, randomChar + 1);
			}
			return generatedString;
		};

		$scope.loadImages = function() {
			$scope.urlArray = [];	
			for (var i = 0; i < 100; i ++) {
				$scope.urlArray[i] = $scope.generateURL();
			}
		};

		$scope.deleteBroken 
		$scope.loadImages();

		$scope.imgtest = function() {
			console.log( angular.element('img').length)
			for (var i = 0; i < angular.element('img').length; i++) {
				var width = angular.element('img')[i].clientWidth;
				if (width === 161 || width === 162 || width === 24) {
					angular.element('img')[i].remove();
				}
				else {
					console.log(angular.element('img')[i]);
				}
			}
		}
	});
