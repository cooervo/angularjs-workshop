angular.module('foobar-app', [])
  .controller('FoobarController', function($scope) {
    $scope.title = 'Title Example' // change value here it changes in child component
    $scope.foobar = 'Foobar @ app.js'

    log('$scope',$scope)
  });

const log = (...x) => {
  console.log(...x)
}
