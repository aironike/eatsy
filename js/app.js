var eatsyApp = angular.module('eatsyApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap.rating']);

eatsyApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'mainController'
    })
    .when('/search', {
      templateUrl: 'views/search.html',
      controller: 'searchController'
    })
    .when('/nearest', {
      templateUrl: 'views/nearest.html',
      controller: 'nearestController'
    })
    .when('/favourite', {
      templateUrl: 'views/favourite.html',
      controller: 'favouriteController'
    })
    .when('/restaurant', {
      templateUrl: 'views/restaurant.html',
      controller: 'restaurantController'
    })
    .when('/restaurant-info', {
      templateUrl: 'views/restaurant-info.html',
      controller: 'restaurantInfoController'
    }).otherwise({redirectTo: '/'});
});
