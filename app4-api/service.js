angular.module('apiApp').service('apiService', function($http) {
  this.getApiData = function() {
    return $http({
      model: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon'
    }).then(function(reply) {
      console.log(reply);
      return reply.data.results;
    })
  }
})
