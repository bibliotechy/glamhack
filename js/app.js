'use strict';


// Declare app level module which depends on filters, and services
angular.module('glamHack', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/home.html'});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html'});
    $routeProvider.when('/what', {templateUrl: 'partials/what.html'});
    $routeProvider.when('/where&when', {templateUrl: 'partials/wherewhen.html'});
    $routeProvider.when('/who', {templateUrl: 'partials/who.html'});
    $routeProvider.when('/challenges', {templateUrl: 'partials/challenges.html'});
    $routeProvider.when('/data', {templateUrl: 'partials/data.html'});
    $routeProvider.when('/coc', {templateUrl: 'partials/coc.html'});
    $routeProvider.when('/sponsors', {templateUrl: 'partials/sponsors.html'});
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
