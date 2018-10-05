angular.module('smartShopper', 
['ngRoute']).
config(['$routeProvider', initializeRoutes])
.constant('remote_host','localhost')
.constant('remote_host_port','9000')

function initializeRoutes($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller:'homeCtrl'
            
        })
        .when("/home", {
            templateUrl: "templates/home.html",
            controller:'homeCtrl'
        })
        .when("/register", {
            templateUrl: "templates/register.html",
            controller: "registerCtrl"
        })
        .when("/about", {
            templateUrl: "templates/about.html",
            controller: "aboutCtrl"
        })
        .when("/login", {
            templateUrl: "templates/login.html",
            controller: "loginCtrl"
        })
        .when("/logout",{
            controller:"logoutCtrl",
            templateUrl: "templates/login.html"
        })
        .when("/cart",{
            controller:"cartCtrl",
            templateUrl: "templates/cart.html"
        })
};