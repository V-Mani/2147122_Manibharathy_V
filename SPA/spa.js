angular.module('myapp',['ngRoute'])

.config(function($routeProvider)
{
    $routeProvider.when('/home',
    {
        templateUrl:'christ/home.html',
        controller:'homectrl'}).when('/home/:first/:last',
        {
            templateUrl:'christ/home.html',
            controller:'homectrl'
    }).when('/course',
    {
        templateUrl:'christ/course.html',
        controller:'coursectrl'
    }).when('/staff',
    {
        templateUrl:'christ/staff.html',
        controller:'staffCtrl'
    }) 
})
.controller('myctrl',function()
{

})
.controller("homectrl",function($scope,$routeParams)
{
    $scope.message="Home Page"
    if($routeParams.first&&$routeParams.last)
    {
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last
        };
    }
})
.controller("coursectrl",function($scope)
{
   $scope.courses=["Starbucks","Burger King","The London Shakes","Cafe Coffee Day","Dominos","KFC","Chat Ka Chaska","Ni Hao","Dosa Plaza"]; 
})

.controller("studentctrl",function($scope,$http)
{
    $http.get('student.json')
    .success(function(response)
    {
        $scope.students=response.records;
    });
})

.controller('staffCtrl', function($scope,$http){

	
    $scope.rowlimit=4;
    $scope.fullName ;
    $scope.today = new Date();

    $http.get('https://2147118joshua.github.io/Staff_DetailsJSON/employee.json')
    .success(function(response)
    {
        $scope.names=response.employees;

    });
        
	
});
