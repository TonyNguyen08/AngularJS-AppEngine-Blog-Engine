var blogApp = angular.module('blogApp', [
	'ngRoute',
	'infinite-scroll',
	'ui.tinymce',
	'sn.addthis',
	'angulartics', 
	'angulartics.google.analytics',
	'blogAppControllers']);

blogApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'MainCtrl'
		})
		.when('/posts/:year/:month/:day/:shortUrl', {
			templateUrl: 'partials/post.html',
			controller: 'MainCtrl'
		})
		.when('/posts/tag/:tag', {
			templateUrl: 'partials/home.html',
			controller: 'MainCtrl'
		})
		.when('/add', {
			templateUrl: 'partials/add.html',
			controller: 'AddCtrl'
		})
		.when('/add/:year/:month/:day/:shortUrl', {
			templateUrl: 'partials/add.html',
			controller: 'AddCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		});
  	}
]);

blogApp.config(['$locationProvider',
	function($locationProvider) {
		// use the HTML5 History API
    	$locationProvider.html5Mode(true);
	}
]);