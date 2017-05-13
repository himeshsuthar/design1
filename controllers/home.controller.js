angular.module('design1')
	.controller('homeCtrl',['$scope',function($scope){
        $('.carousel.carousel-slider').carousel({fullWidth: true});
		console.log("home ctrl");
	}])