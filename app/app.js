var devModule = angular.module('devModule',[]);


devModule.controller('ngController', ['$scope','$http',function($scope,$http){

$http.get('https://jsonplaceholder.typicode.com/photos').then(function(response){
  $scope.posts = response.data;
})


}]);
