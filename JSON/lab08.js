// Create AngularJS application
var app = angular.module('demoLearningTurn',[]);

// Create Controller with name mainCtrl
app.controller('mainCtrl', function($scope,$http){

	
    $scope.rowlimit=4;
    $scope.fullName ;
    $scope.today = new Date();
    $http.get('https://v-mani.github.io/2147122_Manibharathy_V/JSON/lab08.json')
    .success(function(response)
    {
        $scope.names=response.employees;

    });
});
