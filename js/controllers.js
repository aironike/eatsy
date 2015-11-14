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
        {'id' : '1', 'name' : 'Restaurant Noa', 'logo' : 'img/restoranide-ikoonid/feed_icon.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia', 
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.'},
        {'id' : '2', 'name' : 'Cafe Lyon', 'logo' : 'img/restoranide-ikoonid/CafeLyon.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia', 
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.'},
        {'id' : '3', 'name' : 'Fellin', 'logo' : 'img/restoranide-ikoonid/Fellin.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia', 
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.'},
        {'id' : '4', 'name' : 'Truffe', 'logo' : 'img/restoranide-ikoonid/Truffle.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia', 
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.'},
        {'id' : '5', 'name' : 'McDonalds', 'logo' : 'img/restoranide-ikoonid/McDonalds.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia', 
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.'},
        {'id' : '6', 'name' : 'Restaurant Piparmünt', 'logo' : 'img/restoranide-ikoonid/feed_icon2.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia', 
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.'},
        {'id' : '4', 'name' : 'Truffe', 'logo' : 'img/restoranide-ikoonid/Truffle.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia', 
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.'},
        {'id' : '5', 'name' : 'McDonalds', 'logo' : 'img/restoranide-ikoonid/McDonalds.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia', 
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.'},
        {'id' : '6', 'name' : 'Restaurant Piparmynt', 'logo' : 'img/restoranide-ikoonid/feed_icon2.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia', 
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.'}
    ];

    $scope.feedItems.splice(1, 0, data);
});

var data = {'id' : '6', 'name' : 'Restaurant Piparmynt', 'logo' : 'img/restoranide-ikoonid/feed_icon2.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia', 
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.'};


