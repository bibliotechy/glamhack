'use strict';


// Declare app level module which depends on filters, and services
angular.module('glamHack', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/home.html'});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'MyCtrl2'});
    $routeProvider.when('/what', {templateUrl: 'partials/what.html', controller: 'MyCtrl2'});
    $routeProvider.when('/who', {templateUrl: 'partials/who.html', controller: 'MyCtrl2'});
    $routeProvider.when('/challenges', {templateUrl: 'partials/challenges.html'});
    $routeProvider.when('/data', {templateUrl: 'partials/data.html'});
    $routeProvider.when('/coc', {templateUrl: 'partials/coc.html'});
    $routeProvider.when('/sponsors', {templateUrl: 'partials/sponsors.html'});
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
