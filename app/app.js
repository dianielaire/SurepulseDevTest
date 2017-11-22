var devModule = angular.module('devModule',['ui.bootstrap']);


devModule.controller('ngController', ['$scope','$http','$filter', function($scope,$http,$filter){

  $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.data = [];
    $scope.q = ''

    $scope.getData = function () {
      return $filter('filter')($scope.data, $scope.q)

    }

    $scope.numberOfPages=function(){
        return Math.ceil($scope.getData().length/$scope.pageSize);
    }

    for (var i=0; i<65; i++) {
        $scope.data.push("Item "+i);
    }

$http.get('https://jsonplaceholder.typicode.com/photos').then(function(response){
  $scope.posts = response.data;
  $scope.data = response.data
})


}]);
app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
