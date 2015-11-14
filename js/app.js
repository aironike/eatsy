var eatsyApp = angular.module('eatsyApp', ['ngRoute']);

eatsyApp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'views/home.html',
                controller  : 'mainController'
            })
            .when('/search', {
                templateUrl : 'views/search.html',
                controller  : 'searchController'
            })
            .when('/nearest', {
                templateUrl : 'views/nearest.html',
                controller  : 'nearestController'
            })
            .when('/favourite', {
                templateUrl : 'views/favourite.html',
                controller  : 'favouriteController'
            }).otherwise({redirectTo: '/'});
    });