var app = angular.module('myApp', [], ['ui.bootstrap']);
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'aboutus.html',
        controller: 'FirstController'
    })

    .when('/manipulate', {
        templateUrl: 'manipulate.html',
        controller: 'SecondController'
    })

    .when('/mechanicdata', {
        templateUrl: 'mechanicdata.html',
        controller: 'ThirdController'
    })

    .otherwise({
        redirectTo: '/'
    });
});


app.controller('FirstController', function($scope) {
    $scope.message = 'The Award winning and one of the leading malls of India,The Central Mall is located at the heart of Bangalore’s central business district and is spread across 75,000 sq mts of glittering shopping and entertainment space with five floors and housing over 120 stores. Catering to a plethora of needs, the Central Mall has retail store chains like Shoppers Stop, Westside, Forever 21, Promod, Tommy Hilfiger and more , multiplex Inox which accommodates more than 1000 seats with 5 screens and an array of world cuisine at the Q court – Global kitchens. along with specialty restaurants and entertainment options . Central Mall boasts of one of the city’s largest integrated parking complex.';
});


app.controller('SecondController', function($scope, $http) {
    $http.get('https://pavankumark2410.github.io/FInd-My-Mechanic-JSON/getMechanics.json')
        .success(function(response) {
            $scope.names = response.mechanic;
        });
});

app.controller('ThirdController', function($scope, $http) {
    $http.get('https://pavankumark2410.github.io/FInd-My-Mechanic-JSON/getMechanics.json')
        .success(function(response) {
            $scope.names = response.mechanic;
            $scope.rowlimit = 6;
        });
});