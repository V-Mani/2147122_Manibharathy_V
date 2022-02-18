
// Create AngularJS application
var app = angular.module('demoLearningTurn',[]);


// Create Controller with name mainCtrl
app.controller('mainCtrl', function($scope,$http){

	
    $scope.rowlimit=4;
    $scope.today = new Date();
    $http.get('http://localhost:3000/getdata')
    .success(function(response)
    {
        emp=JSON.parse(response.employees)
        $scope.names=emp.employees;
        console.log(response.employees)
    });
});

    




