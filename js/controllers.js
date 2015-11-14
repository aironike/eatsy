eatsyApp.controller('mainController', function($scope) {
    $scope.message = 'MainPage';
    $scope.pageClass = "home";
});

eatsyApp.controller('searchController', function($scope) {
    $scope.message = 'SearchPage';
    $scope.pageClass = "search";
});

eatsyApp.controller('nearestController', function($scope) {
    $scope.message = 'NearestPage';
    $scope.pageClass = "nearest";
});

eatsyApp.controller('favouriteController', function($scope) {
    $scope.message = 'FavouritesPage';
    $scope.pageClass = "fav";
});

eatsyApp.controller('restaurantController', function($scope) {
    $scope.message = 'restaurantPage';
    $scope.pageClass = "restaurant";
});

eatsyApp.controller('feedController', function ($scope) {
    $scope.feedItems = [
        {'id' : '1', 'name' : 'Restaurant Noa', 'logo' : 'img/icons/feed_icon.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia', 
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.'},
        {'id' : '2', 'name' : 'Cafe Lyon', 'logo' : 'img/icons/feed_icon.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia', 
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.'},
        {'id' : '3', 'name' : 'Cafe Lyon', 'logo' : 'img/icons/feed_icon.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia', 
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.'}
    ];
});
