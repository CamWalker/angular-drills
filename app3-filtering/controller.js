angular.module("myApp").controller("myController", function ($scope, myService) {
  $scope.data = myService.myData;

  $scope.test = "test";
})
