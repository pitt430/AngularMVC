var myAngularMVCApp = angular.module('myAngularMVCApp', ['ngRoute']);
myAngularMVCApp.controller('LandingPageController', LandingPageController);
myAngularMVCApp.controller('LoginController', LoginController);

myAngularMVCApp.factory('authHttpResponseInterceptor', authHttpResponseInterceptor);

var configFunction=function($routeProvider,$httpProvider) {
    $routeProvider.
       when('/routeOne', {
           templateUrl: 'routeDemo/one'
       })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routeDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routeDemo/three'
        })
        .when('/login?', {
            templateUrl: 'Account/Login',
            controller: LoginController
        })
    .when('/register', {
        templateUrl: 'Account/Register',
        controller:RegisterController
            }
    );
    $httpProvider.interceptors.push('authHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];
myAngularMVCApp.config(configFunction);
myAngularMVCApp.factory('LoginFactory', LoginFactory);
myAngularMVCApp.factory('RegistrationFactory', RegistrationFactory);