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

eatsyApp.controller('TabController', function () {
        this.tab = 1;

        this.setTab = function (tabId) {
            this.tab = tabId;
        };

        this.isSet = function (tabId) {
            return this.tab === tabId;
        };
    });

eatsyApp.controller('RatingDemoCtrl', function ($scope) {
  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];
});

eatsyApp.controller('feedController', function ($scope, $http) {
    $http.get('http://eatsy3.elasticbeanstalk.com/eatsy/city/Tallinn').success( function(data) {
        $scope.relatedRestaurants = data.restaurantWithFriendsInfo;
        $scope.users = [];
        $scope.friends = data.friends;

        angular.forEach(data.restaurantWithFriendsInfo, function(restaurant, index){
            angular.forEach(restaurant.users, function(user,index){
                $scope.users.push(user);
            });
        });
    });
});

eatsyApp.controller('tabsController', function($scope) {
    $scope.tabs = [
        {title: 'info', url: 'templates/restaurant/info.tpl.html'},
        {title: 'menu', url: 'templates/restaurant/menu.tpl.html'},
        {title: 'review', url: 'templates/restaurant/review.tpl.html'},
        {title: 'drinks', url: 'templates/restaurant/drinks.tpl.html'}
    ];

    $scope.currentTab = "info.html";

    $scope.onClickTab = function(tab) {
        $scope.currentTab = tab.url;
    }

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
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

});

eatsyApp.controller('reviewsController', function ($scope) {
  $scope.reviewItems = [
    {
      'id': '1', 'name': 'Egert Kalimulin', 'profile': 'img/friends/egert.png', 'review': 'Quisque iaculis aliquam magna, ut accumsan arcu viverra vitae. Phasellus vulputate sapien et risus venenatis, sit amet volutpat diam accumsan.',
    },
    {
      'id': '2', 'name': 'Ethan J.', 'profile' : 'img/friends/ethan.png', 'review': 'Quisque iaculis aliquam magna, ut accumsan arcu viverra vitae. Phasellus vulputate sapien et risus venenatis, sit amet volutpat diam accumsan.',
    },
    {
      'id': '3', 'name': 'Jussi Mottus', 'profile' : 'img/friends/jussi.png', 'review': 'Quisque iaculis aliquam magna, ut accumsan arcu viverra vitae. Phasellus vulputate sapien et risus venenatis, sit amet volutpat diam accumsan.',
    },
    {
      'id': '4', 'name': 'Pille-Triin Raitviir', 'profile' : 'img/friends/pille.png', 'review': 'Quisque iaculis aliquam magna, ut accumsan arcu viverra vitae. Phasellus vulputate sapien et risus venenatis, sit amet volutpat diam accumsan.',
    },
    {
      'id': '5', 'name': 'Rein Pettai', 'profile' : 'img/friends/rein.png', 'review': 'Quisque iaculis aliquam magna, ut accumsan arcu viverra vitae. Phasellus vulputate sapien et risus venenatis, sit amet volutpat diam accumsan.',
    },
    {
      'id': '6', 'name': 'Hemant', 'profile' : 'img/friends/hemant.png', 'review': 'Quisque iaculis aliquam magna, ut accumsan arcu viverra vitae. Phasellus vulputate sapien et risus venenatis, sit amet volutpat diam accumsan.',
    }
  ];

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


