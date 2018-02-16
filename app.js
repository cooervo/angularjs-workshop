var app = angular.module('foobar-app', [])

app.controller('FoobarController', function($scope, $rootScope) {
  $scope.title = 'Title Example' // change value here it changes in child component
  $scope.foobar = 'Foobar @ app.js'

  log('$rootScope', $rootScope)
  log('$scope', $scope)
  //Remember: $scope ~= this.noGctx
});

const log = (...x) => {
  console.log(...x)
}
