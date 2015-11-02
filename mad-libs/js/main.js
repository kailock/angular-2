// Create application

var myApp = angular.module('myApp', [])


// Bind controller madCtrl
myApp.controller('myCtrl', function($scope){
    $scope.name = "Kaitlin"
    $scope.age = "20"
    $scope.location = "Mars"
    $scope.food = "fried chicken"
})

	// Set initial values for name, age, location, and food

