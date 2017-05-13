angular.module('design1')
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state("home",{
		url : '/',
		controller : 'homeCtrl',
		templateUrl : 'views/home.html'
	})
        .state("contactus",{
            url : '/contactus',
            templateUrl : 'views/contactus.html'
        })


	$urlRouterProvider.otherwise('/');
	
}])