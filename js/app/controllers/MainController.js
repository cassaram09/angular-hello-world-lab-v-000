function MainController($scope) {
  $scope.name = 'Matt Cassara' ;
  $scope.email = 'matt@matt.com';
  $scope.phone = '(123) 456 7890';
}

angular
  .module('app')
  .controller('MainController', MainController)