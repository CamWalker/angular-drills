angular.module("apiApp").controller("apiCtrl", function($scope, apiService) {
  var getPokeData = function() {
    apiService.getApiData().then(function (reply) {
      $scope.berryData =  reply;
    })
  }
  getPokeData();
})
