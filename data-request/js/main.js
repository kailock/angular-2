// Create application

var myApp = angular.module('myApp', [])

// Bind controller customersCtrl
myApp.controller('customerCtrl', function($scope, $http){
    $http.get('http://www.w3schools.com/angular/customers.php').then(function(response){
        $scope.names = response.data.records
    })

    // $http({
    //     method: 'GET',
    //     url: 'http://www.w3schools.com/angular/customers.php'
    // }).then(function successCallback(response) {
    //     $scope.names = response.names
    // });
})