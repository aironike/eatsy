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

    // $scope.feedItems.splice(1, 0, data); <- Injection
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

