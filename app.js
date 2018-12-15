var app = angular.module('myApp',
    [
        'ui.router',
        'mainModule',
        'secondModule',
        'firstModule'
    ]);

app.constant('BaseURL', "http://www.thirdleave.com:8080");
app.constant('SocketURL', "www.thirdleave.com:8080");
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/src/views/common/login.html',
            controller: 'mainController',
        })
        .state('signup', {
            url: '/signup',
            templateUrl: '/src/views/common/signup.html',
            controller: 'mainController',
        })
        .state('first', {
            url: '/first',
            templateUrl: '/src/views/first/first.html',
            controller: 'firstController'
        })
        .state('second', {
            url: '/second',
            templateUrl: '/src/views/second/second.html',
            controller: 'secondController'
        });
});
