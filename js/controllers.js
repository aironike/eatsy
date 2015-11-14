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
/* TEMP */
eatsyApp.controller('restaurantInfoController', function($scope) {
    $scope.message = 'restaurantInfoPage';
    $scope.pageClass = "restaurantinfo";
});
/* END TEMP */

eatsyApp.controller('otherController', function($scope) {
    $scope.pageClass = "otherSuggestions";
});

eatsyApp.controller('feedController', function ($scope) {
    $scope.feedItems = [
        {'id' : '1', 'name' : 'Restaurant Noa', 'logo' : 'img/restoranide-ikoonid/feed_icon.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia',
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.',
        'rating':'img/rating/4stars.png'},
        {'id' : '2', 'name' : 'Cafe Lyon', 'logo' : 'img/restoranide-ikoonid/CafeLyon.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia',
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.',
        'rating':'img/rating/5stars.png'},
        {'id' : '3', 'name' : 'Fellin', 'logo' : 'img/restoranide-ikoonid/Fellin.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia',
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.',
        'rating':'img/rating/3stars.png'},
        {'id' : '4', 'name' : 'Truffe', 'logo' : 'img/restoranide-ikoonid/Truffle.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia',
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.',
        'rating':'img/rating/3stars.png'}
    ];

    // $scope.feedItems.splice(1, 0, data); <- Injection
});

eatsyApp.controller('foodControllerCourses', function ($scope) {
  $scope.feedItems = [
    {
      'id': '1', 'name': 'Pizza', 'image': 'img/menyy_pildid/pitza.jpg', 'price': '11.99',
      'desc': 'Praesent convallis convallis blandit. Nullam dapibus vel erat eu consequat. Suspendisse quis quam a elit ultricies luctus. '
    },
    {
      'id': '2', 'name': 'Cafe Lyon', 'image': 'img/menyy_pildid/pardimaks.jpg', 'price': '15.39',
      'desc': 'Curabitur volutpat, ex sit amet rhoncus accumsan, justo arcu facilisis enim, at molestie ligula lorem eu lectus.'
    },
    {
      'id': '3', 'name': 'Fellin', 'image': 'img/menyy_pildid/hirvetartar.jpg', 'price': '9.45',
      'desc': 'Maecenas libero ex, tristique a gravida eu, interdum eu elit. Nunc lacinia purus vulputate nibh eleifend, sollicitudin suscipit erat condimentum.'
    },
    {
      'id': '4', 'name': 'Truffe', 'image': 'img/menyy_pildid/galerii352.jpg', 'price': '12.99',
      'desc': 'Quisque iaculis aliquam magna, ut accumsan arcu viverra vitae. Phasellus vulputate sapien et risus venenatis, sit amet volutpat diam accumsan.'
    },
    {
      'id': '5', 'name': 'Truffe', 'image': 'img/menyy_pildid/1-2.jpg', 'price': '12.99',
      'desc': 'Quisque iaculis aliquam magna, ut accumsan arcu viverra vitae. Phasellus vulputate sapien et risus venenatis, sit amet volutpat diam accumsan.'
    }
  ];

  // $scope.feedItems.splice(1, 0, data); <- Injection
});

eatsyApp.controller('drinkController', function ($scope) {
  $scope.feedItems = [
    {
      'id': '1', 'name': 'Blonde Pilsner', 'image': 'img/menyy_pildid/pitza.jpg', 'price': '1.99',
    },
    {
      'id': '2', 'name': 'Bock Dark 12%', 'image': 'img/menyy_pildid/pardimaks.jpg', 'price': '2.99',
    },
    {
      'id': '3', 'name': 'Valmiermuiza Dark', 'image': 'img/menyy_pildid/hirvetartar.jpg', 'price': '3.59',
    },
    {
      'id': '4', 'name': 'Blond Munk', 'image': 'img/menyy_pildid/galerii352.jpg', 'price': '2.99',
    },
    {
      'id': '5', 'name': 'Kala', 'image': 'img/menyy_pildid/1-2.jpg', 'price': '12.99',
      'desc': 'Quisque iaculis aliquam magna, ut accumsan arcu viverra vitae. Phasellus vulputate sapien et risus venenatis, sit amet volutpat diam accumsan.'
    }
  ];

  // $scope.feedItems.splice(1, 0, data); <- Injection
});

eatsyApp.controller('friendsListController', function ($scope) {
   $scope.friendList = [
        {'profile' : 'img/friends/egert.png'},
        {'profile' : 'img/friends/ethan.png'},
        {'profile' : 'img/friends/jussi.png'},
        {'profile' : 'img/friends/pille.png'},
        {'profile' : 'img/friends/rein.png'},
        {'profile' : 'img/friends/hemant.png'}
   ];
});

var data = {'id' : '6', 'name' : 'Restaurant Piparmynt', 'logo' : 'img/restoranide-ikoonid/feed_icon2.png', 'dst' : '300m',
        'desc' : 'Neque porro quisquam est qui dolorem ipsum quia',
        'friends' : 'Bess, Karie, Elvira and 3 other friends have rated this place.'};


