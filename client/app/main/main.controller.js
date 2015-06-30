'use strict';

angular.module('randomImgurApp')
	.controller('MainCtrl', function ($scope, $http, imgCheck) {
		$scope.randomImgur = {};
		$scope.imgCheck = imgCheck;

		$scope.generateURL = function() {
			var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
			var generatedString = '';
			var numArray = [5, 6, 7];
			var random =  Math.floor(Math.random()*3);
			var length = numArray[random];
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
	});
